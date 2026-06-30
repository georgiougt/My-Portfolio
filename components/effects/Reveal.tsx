'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    /** Stagger delay in seconds, e.g. index * 0.08 for grids. */
    delay?: number;
    /** Travel distance in px (default 24). */
    y?: number;
    className?: string;
}

/**
 * Fades + slides its children up once when scrolled into view.
 * Honors prefers-reduced-motion (renders instantly, no transform).
 */
export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}
