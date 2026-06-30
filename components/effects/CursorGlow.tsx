'use client';

import React, { useEffect, useRef } from 'react';

/**
 * A soft gradient orb that follows the cursor with a slight lag.
 * Desktop / fine-pointer only, disabled for users who prefer reduced motion.
 * GPU-cheap: transform-only updates inside a single requestAnimationFrame loop.
 */
export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Skip on touch devices and when the user prefers reduced motion.
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        if (!finePointer || reduceMotion) return;

        const el = glowRef.current;
        if (!el) return;

        // Start off-screen so it doesn't flash in the corner before first move.
        const target = { x: -9999, y: -9999 };
        const current = { x: -9999, y: -9999 };
        let visible = false;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            target.x = e.clientX;
            target.y = e.clientY;
            if (!visible) {
                // Snap on the very first move to avoid a long slide-in.
                current.x = e.clientX;
                current.y = e.clientY;
                visible = true;
                el.style.opacity = '1';
            }
        };

        const onLeave = () => {
            el.style.opacity = '0';
        };
        const onEnter = () => {
            if (visible) el.style.opacity = '1';
        };

        const tick = () => {
            // Lerp toward the cursor for a smooth, lagging trail.
            current.x += (target.x - current.x) * 0.15;
            current.y += (target.y - current.y) * 0.15;
            el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
            raf = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseenter', onEnter);
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mouseenter', onEnter);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[60] h-[400px] w-[400px] rounded-full opacity-0 mix-blend-screen blur-[90px] transition-opacity duration-300 will-change-transform"
            style={{
                background:
                    'radial-gradient(circle, rgba(58,134,255,0.45) 0%, rgba(131,56,236,0.30) 45%, rgba(131,56,236,0) 70%)',
            }}
        />
    );
}
