'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
    /** The numeric target to count to. */
    value: number;
    /** Text rendered before the number, e.g. "". */
    prefix?: string;
    /** Text rendered after the number, e.g. "+" or "%". */
    suffix?: string;
    /** Animation duration in ms. */
    duration?: number;
    className?: string;
}

/**
 * Counts up from 0 to `value` once when scrolled into view.
 * Honors prefers-reduced-motion (shows the final value immediately).
 */
export function CountUp({
    value,
    prefix = '',
    suffix = '',
    duration = 1600,
    className,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduceMotion) {
            setDisplay(value);
            return;
        }

        let raf = 0;
        let start: number | null = null;

        const step = (now: number) => {
            if (start === null) start = now;
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic for a natural settle.
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) raf = requestAnimationFrame(step);
            else setDisplay(value);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [inView, reduceMotion, value, duration]);

    const rounded = Math.round(display);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {rounded}
            {suffix}
        </span>
    );
}
