/**
 * Generates the site icons from a single source of truth: the 8-point star
 * that is the Stellar Reach mark.
 *
 * The full logo (public/logo-icon.png) is an outline drawing — its thin
 * strokes turn to mush below ~48px, so a favicon derived from it is
 * unreadable in a tab strip. This draws a FILLED version of the same star
 * instead, which stays legible at 16px.
 *
 * Run: node scripts/generate-icons.mjs
 */
import { Jimp } from 'jimp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ---------------------------------------------------------------- geometry
// Coordinate space is -50..50; the star is centred on the origin.
const OUTER_LONG = 46; // the four cardinal points
const OUTER_SHORT = 36; // the four diagonal points
const INNER = 20; // valley between points — higher = fatter, more legible small
const CORNER_RADIUS = 20; // rounded tile corners

const BG = [0x07, 0x15, 0x21]; // brand navy, matches the site background
// Gradient runs top-left -> bottom-right, mirroring the logo's purple->cyan.
const STOPS = [
    { t: 0.0, c: [0xa7, 0x8b, 0xfa] },
    { t: 0.5, c: [0x4f, 0x9c, 0xf9] },
    { t: 1.0, c: [0x00, 0xf2, 0xfe] },
];

function starPolygon() {
    const pts = [];
    for (let i = 0; i < 8; i++) {
        const aOut = ((-90 + i * 45) * Math.PI) / 180;
        const rOut = i % 2 === 0 ? OUTER_LONG : OUTER_SHORT;
        pts.push([Math.cos(aOut) * rOut, Math.sin(aOut) * rOut]);
        const aIn = ((-90 + i * 45 + 22.5) * Math.PI) / 180;
        pts.push([Math.cos(aIn) * INNER, Math.sin(aIn) * INNER]);
    }
    return pts;
}

const POLY = starPolygon();

/** Ray-casting point-in-polygon. */
function inStar(x, y) {
    let inside = false;
    for (let i = 0, j = POLY.length - 1; i < POLY.length; j = i++) {
        const [xi, yi] = POLY[i];
        const [xj, yj] = POLY[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
            inside = !inside;
        }
    }
    return inside;
}

/** Inside the rounded tile? Keeps corners from being painted. */
function inTile(x, y) {
    const r = CORNER_RADIUS;
    const ax = Math.abs(x), ay = Math.abs(y);
    if (ax > 50 || ay > 50) return false;
    if (ax <= 50 - r || ay <= 50 - r) return true;
    const dx = ax - (50 - r), dy = ay - (50 - r);
    return dx * dx + dy * dy <= r * r;
}

function gradientAt(u) {
    const t = Math.min(1, Math.max(0, u));
    for (let i = 1; i < STOPS.length; i++) {
        if (t <= STOPS[i].t) {
            const a = STOPS[i - 1], b = STOPS[i];
            const k = (t - a.t) / (b.t - a.t);
            return [0, 1, 2].map((n) => Math.round(a.c[n] + (b.c[n] - a.c[n]) * k));
        }
    }
    return STOPS[STOPS.length - 1].c;
}

/**
 * Renders one square icon.
 * `rounded` false produces a full-bleed opaque square — what Apple wants,
 * since iOS applies its own corner mask and a pre-rounded icon double-rounds.
 */
async function render(size, { rounded = true } = {}) {
    const SS = 4; // 4x4 supersampling for anti-aliasing
    const img = new Jimp({ width: size, height: size, color: 0x00000000 });

    for (let py = 0; py < size; py++) {
        for (let px = 0; px < size; px++) {
            let starHits = 0, tileHits = 0, gradAcc = 0;
            for (let sy = 0; sy < SS; sy++) {
                for (let sx = 0; sx < SS; sx++) {
                    const fx = (px + (sx + 0.5) / SS) / size; // 0..1
                    const fy = (py + (sy + 0.5) / SS) / size;
                    const x = fx * 100 - 50; // -50..50
                    const y = fy * 100 - 50;
                    const tile = rounded ? inTile(x, y) : true;
                    if (!tile) continue;
                    tileHits++;
                    if (inStar(x, y)) {
                        starHits++;
                        gradAcc += (fx + fy) / 2; // diagonal gradient parameter
                    }
                }
            }
            const total = SS * SS;
            if (tileHits === 0) continue; // outside the rounded corner

            const tileA = tileHits / total;
            const starA = starHits / total;
            let r, g, b;
            if (starHits > 0) {
                const [gr, gg, gb] = gradientAt(gradAcc / starHits);
                const k = starA / tileA; // star coverage within the painted area
                r = Math.round(BG[0] * (1 - k) + gr * k);
                g = Math.round(BG[1] * (1 - k) + gg * k);
                b = Math.round(BG[2] * (1 - k) + gb * k);
            } else {
                [r, g, b] = BG;
            }
            const a = Math.round(tileA * 255);
            img.setPixelColor(
                ((r << 24) >>> 0) + (g << 16) + (b << 8) + a,
                px,
                py
            );
        }
    }
    return img;
}

/**
 * Multi-size .ico with PNG payloads (supported by every browser still shipping
 * and by Windows Vista onwards). jimp cannot write .ico, so the container is
 * assembled by hand — it is a very small format.
 */
function buildIco(pngs) {
    const count = pngs.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // 1 = icon
    header.writeUInt16LE(count, 4);

    const entries = Buffer.alloc(16 * count);
    let offset = 6 + 16 * count;
    const chunks = [];

    pngs.forEach(({ size, buffer }, i) => {
        const e = 16 * i;
        entries.writeUInt8(size >= 256 ? 0 : size, e + 0); // width (0 == 256)
        entries.writeUInt8(size >= 256 ? 0 : size, e + 1); // height
        entries.writeUInt8(0, e + 2); // palette count
        entries.writeUInt8(0, e + 3); // reserved
        entries.writeUInt16LE(1, e + 4); // colour planes
        entries.writeUInt16LE(32, e + 6); // bits per pixel
        entries.writeUInt32LE(buffer.length, e + 8);
        entries.writeUInt32LE(offset, e + 12);
        offset += buffer.length;
        chunks.push(buffer);
    });

    return Buffer.concat([header, entries, ...chunks]);
}

function svgMark() {
    const d =
        'M ' + POLY.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L ') + ' Z';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
${STOPS.map(
    (s) =>
        `      <stop offset="${s.t * 100}%" stop-color="#${s.c
            .map((n) => n.toString(16).padStart(2, '0'))
            .join('')}"/>`
).join('\n')}
    </linearGradient>
  </defs>
  <rect x="-50" y="-50" width="100" height="100" rx="${CORNER_RADIUS}" fill="#${BG.map(
      (n) => n.toString(16).padStart(2, '0')
  ).join('')}"/>
  <path d="${d}" fill="url(#g)"/>
</svg>
`;
}

const icoSizes = [16, 32, 48];
const pngs = [];
for (const size of icoSizes) {
    const img = await render(size);
    pngs.push({ size, buffer: await img.getBuffer('image/png') });
}

mkdirSync(join(ROOT, 'app'), { recursive: true });
writeFileSync(join(ROOT, 'app', 'favicon.ico'), buildIco(pngs));
writeFileSync(join(ROOT, 'app', 'icon.svg'), svgMark());

// Apple touch icon: opaque square, no rounding — iOS masks it itself.
const apple = await render(180, { rounded: false });
writeFileSync(join(ROOT, 'app', 'apple-icon.png'), await apple.getBuffer('image/png'));

console.log('favicon.ico  ', icoSizes.join('/'), 'px');
console.log('icon.svg     vector');
console.log('apple-icon   180px opaque');
