import React from 'react';
import type { LucideIcon } from 'lucide-react';

/**
 * Icon framed inside a hexagon outline — echoes the site's hex-grid nav and the
 * [STELLAR REACH] bracket motif. Thin, non-scaling gradient stroke, faint fill,
 * and a glow that intensifies when an ancestor `.group` is hovered.
 *
 * `hue` tints the whole unit along the site's cyan→violet ramp so a row of these
 * reads as one system without looking mechanically identical; it drives the
 * stroke gradient, the glyph color, the fill, and the glow together. `id` must be
 * unique per instance on a page so the per-icon SVG gradient IDs don't collide.
 */
export function HexIcon({
    Icon,
    hue,
    id,
}: {
    Icon: LucideIcon;
    hue: number;
    id: string | number;
}) {
    const c1 = `hsl(${hue} 100% 62%)`;
    const c2 = `hsl(${hue + 26} 95% 68%)`;
    const gradId = `hexgrad-${id}`;

    return (
        <div
            className="relative inline-flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-105"
            style={
                {
                    '--accent': c1,
                    '--glow': `hsl(${hue} 100% 55% / 0.35)`,
                    '--glow-strong': `hsl(${hue} 100% 58% / 0.6)`,
                } as React.CSSProperties
            }
        >
            <svg
                viewBox="0 0 100 100"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full [filter:drop-shadow(0_0_6px_var(--glow))] transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_13px_var(--glow-strong))]"
            >
                <defs>
                    <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={c1} />
                        <stop offset="100%" stopColor={c2} />
                    </linearGradient>
                </defs>
                <polygon
                    points="50,4 94,28 94,72 50,96 6,72 6,28"
                    fill={`hsl(${hue} 100% 60% / 0.06)`}
                    stroke={`url(#${gradId})`}
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />
                {/* A bright segment that travels continuously around the hexagon
                    edge. `pathLength={100}` normalizes the dash values so the
                    comet is a fixed fraction of the perimeter regardless of size;
                    the hue-based delay gives each card its own phase. */}
                <path
                    d="M50,4 L94,28 L94,72 L50,96 L6,72 L6,28 Z"
                    pathLength={100}
                    fill="none"
                    stroke={c1}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="12 38 12 38"
                    className="hex-travel [filter:drop-shadow(0_0_3px_var(--glow-strong))]"
                    style={{ animationDelay: `${-(hue / 360) * 3.5}s` }}
                />
            </svg>
            <Icon
                strokeWidth={1.5}
                className="relative h-6 w-6 text-[var(--accent)] transition-colors duration-300 group-hover:text-white"
            />
        </div>
    );
}
