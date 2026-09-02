'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Full-viewport 3D starfield rendered behind all page content.
 *
 * Stars are given a real depth (z) and projected with a perspective divide, so
 * they drift slowly toward the viewer — near stars sweep outward and fade in,
 * far stars sit as a fine, twinkling dust. Tinted white/cyan to match the brand.
 *
 * Cheap and self-throttling: a single requestAnimationFrame loop, DPR capped at
 * 2, the loop paused while the tab is hidden, and a static frame (no motion) for
 * users who prefer reduced motion.
 */
interface Star {
    x: number; // world-space X (centered on 0)
    y: number; // world-space Y (centered on 0)
    z: number; // depth: DEPTH (far) -> ~0 (at the viewer)
    size: number; // base radius in px at the near plane
    tint: [number, number, number]; // RGB
    twinkle: number; // per-star twinkle phase
}

const DEPTH = 900; // furthest star distance
const FOV = 320; // focal length — larger = flatter, less spread
const SPEED = 0.55; // depth units travelled per frame (gentle drift)

// Brand palette, weighted mostly toward soft white with occasional cyan accents.
const PALETTE: [number, number, number][] = [
    [248, 250, 252], // near-white (most stars)
    [248, 250, 252],
    [248, 250, 252],
    [186, 230, 253], // sky-200
    [125, 211, 252], // sky-300
    [0, 242, 254], // brand cyan (rare, brightest)
];

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        let width = 0;
        let height = 0;
        let cx = 0;
        let cy = 0;
        let dpr = 1;
        let stars: Star[] = [];
        let raf = 0;
        let time = 0;

        // Smoothed pointer offset for a subtle parallax lean.
        const parallax = { x: 0, y: 0, tx: 0, ty: 0 };

        const spawn = (atFront: boolean): Star => ({
            // Spread proportional to the viewport so density feels even.
            x: (Math.random() - 0.5) * width * 1.6,
            y: (Math.random() - 0.5) * height * 1.6,
            z: atFront ? Math.random() * DEPTH : DEPTH,
            size: 0.8 + Math.random() * 1.8,
            tint: PALETTE[Math.floor(Math.random() * PALETTE.length)],
            twinkle: Math.random() * Math.PI * 2,
        });

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            cx = width / 2;
            cy = height / 2;

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Density scales with screen area, capped for performance.
            const count = Math.min(Math.round((width * height) / 4200), 620);
            stars = Array.from({ length: count }, () => spawn(true));
        };

        resize();

        const onPointerMove = (e: MouseEvent) => {
            // Map cursor to a small -1..1 lean; multiplied to a few px of shift.
            parallax.tx = (e.clientX / width - 0.5) * 2;
            parallax.ty = (e.clientY / height - 0.5) * 2;
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Ease the parallax toward its target so it feels weighty, not jittery.
            parallax.x += (parallax.tx - parallax.x) * 0.05;
            parallax.y += (parallax.ty - parallax.y) * 0.05;
            const px = parallax.x * 18;
            const py = parallax.y * 18;

            for (const star of stars) {
                if (!prefersReducedMotion) {
                    star.z -= SPEED;
                    // Recycle a star once it passes the viewer.
                    if (star.z <= 1) {
                        Object.assign(star, spawn(false));
                        continue;
                    }
                }

                const k = FOV / star.z;
                const sx = star.x * k + cx + px;
                const sy = star.y * k + cy + py;

                // Skip anything projected off-screen.
                if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) {
                    continue;
                }

                // Nearer stars are larger and brighter; fade in from the far plane
                // and out again as they rush past, so nothing pops.
                const depth = 1 - star.z / DEPTH; // 0 far -> 1 near
                const radius = star.size * (0.55 + depth * 1.7);
                const twinkle = prefersReducedMotion
                    ? 1
                    : 0.7 + 0.3 * Math.sin(time * 0.05 + star.twinkle);
                // Distant stars keep a visible baseline; only the nearest ones
                // fade out as they rush past the viewer, so nothing pops in/out.
                const nearFade = depth > 0.9 ? (1 - depth) * 10 : 1;
                const alpha = Math.min(1, 0.35 + depth * 0.65) * twinkle * nearFade;
                const [r, g, b] = star.tint;

                // Soft glow for the brightest near stars.
                if (radius > 1.4) {
                    const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 4);
                    glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.35})`);
                    glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                    ctx.fillStyle = glow;
                    ctx.beginPath();
                    ctx.arc(sx, sy, radius * 4, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            if (!prefersReducedMotion) time += 1;
            raf = requestAnimationFrame(render);
        };

        const start = () => {
            if (!raf) raf = requestAnimationFrame(render);
        };
        const stop = () => {
            if (raf) {
                cancelAnimationFrame(raf);
                raf = 0;
            }
        };

        const onVisibility = () => {
            if (document.hidden) stop();
            else start();
        };

        // Reduced motion: draw a single static frame and stop.
        if (prefersReducedMotion) {
            render();
            stop();
        } else {
            start();
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onPointerMove, { passive: true });
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            stop();
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onPointerMove);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        />
    );
}
