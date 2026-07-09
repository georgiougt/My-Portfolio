'use client';

import React, { useEffect, useRef } from 'react';

interface WaveConfig {
    amplitude: number;
    frequency: number;
    speed: number;
    phaseOffset: number;
    lineWidth: number;
    opacity: number;
    color: string;
}

interface Sparkle {
    x: number;
    y: number;
    size: number;
    maxSize: number;
    alpha: number;
    speedY: number;
    speedX: number;
    rotation: number;
    rotSpeed: number;
    life: number;
    maxLife: number;
}

export function SpectralWave() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;
        let width = 0;
        let height = 0;

        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        // Sparkles list
        const sparkles: Sparkle[] = [];
        const maxSparkles = 6;

        const resize = () => {
            const rect = container.getBoundingClientRect();
            // Scale by device pixel ratio for sharp retina rendering
            const dpr = window.devicePixelRatio || 1;
            width = rect.width;
            height = 120; // fixed divider height
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            
            ctx.scale(dpr, dpr);
        };

        resize();
        window.addEventListener('resize', resize);

        const createSparkle = (): Sparkle => {
            const life = 0;
            const maxLife = 120 + Math.random() * 120; // 2 to 4 seconds at 60fps
            return {
                x: Math.random() * width,
                y: height / 2 + (Math.random() - 0.5) * 40,
                size: 0,
                maxSize: 3 + Math.random() * 5,
                alpha: 0,
                speedY: (Math.random() - 0.5) * 0.15,
                speedX: (Math.random() - 0.5) * 0.2,
                rotation: Math.random() * Math.PI,
                rotSpeed: (Math.random() - 0.5) * 0.005,
                life,
                maxLife,
            };
        };

        // Initialize some sparkles
        for (let i = 0; i < maxSparkles; i++) {
            sparkles.push(createSparkle());
            // Fast-forward life so they don't all appear at once
            sparkles[i].life = Math.random() * sparkles[i].maxLife;
        }

        const drawFourPointStar = (
            c: CanvasRenderingContext2D,
            cx: number,
            cy: number,
            outerRadius: number,
            innerRadius: number
        ) => {
            c.beginPath();
            c.moveTo(cx, cy - outerRadius);
            // 4 points
            for (let i = 0; i < 4; i++) {
                const angle = (i * Math.PI) / 2;
                // Outer spike
                c.lineTo(cx + Math.cos(angle) * outerRadius, cy + Math.sin(angle) * outerRadius);
                // Inner corner
                const nextAngle = angle + Math.PI / 4;
                c.lineTo(cx + Math.cos(nextAngle) * innerRadius, cy + Math.sin(nextAngle) * innerRadius);
            }
            c.closePath();
        };

        const waves: WaveConfig[] = [
            {
                amplitude: 22,
                frequency: 0.0035,
                speed: 0.006,
                phaseOffset: 0,
                lineWidth: 1.5,
                opacity: 0.6,
                color: '224, 242, 254', // sky-100 (RGB)
            },
            {
                amplitude: 16,
                frequency: 0.0055,
                speed: -0.008,
                phaseOffset: Math.PI / 3,
                lineWidth: 1.2,
                opacity: 0.5,
                color: '125, 211, 252', // sky-300
            },
            {
                amplitude: 26,
                frequency: 0.002,
                speed: 0.004,
                phaseOffset: Math.PI * 0.7,
                lineWidth: 2.0,
                opacity: 0.35,
                color: '56, 189, 248', // sky-400
            },
            {
                amplitude: 12,
                frequency: 0.008,
                speed: 0.012,
                phaseOffset: Math.PI * 1.3,
                lineWidth: 0.8,
                opacity: 0.4,
                color: '186, 230, 253', // sky-200
            },
        ];

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const centerY = height / 2;

            // Update & Draw Sparkles
            sparkles.forEach((sparkle, idx) => {
                sparkle.life += prefersReducedMotion ? 0.2 : 1;
                if (sparkle.life >= sparkle.maxLife) {
                    sparkles[idx] = createSparkle();
                    return;
                }

                // Update physical properties
                sparkle.x += sparkle.speedX;
                sparkle.y += sparkle.speedY;
                sparkle.rotation += sparkle.rotSpeed;

                // Ease size/alpha based on life
                const progress = sparkle.life / sparkle.maxLife;
                sparkle.alpha = Math.sin(progress * Math.PI) * 0.7; // peak in the middle
                sparkle.size = Math.sin(progress * Math.PI) * sparkle.maxSize;

                // Draw sparkle glow
                ctx.save();
                ctx.translate(sparkle.x, sparkle.y);
                ctx.rotate(sparkle.rotation);
                
                // Outer radial glow
                const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, sparkle.size * 2);
                glowGrad.addColorStop(0, `rgba(224, 242, 254, ${sparkle.alpha * 0.4})`);
                glowGrad.addColorStop(1, 'rgba(224, 242, 254, 0)');
                ctx.fillStyle = glowGrad;
                ctx.beginPath();
                ctx.arc(0, 0, sparkle.size * 2, 0, Math.PI * 2);
                ctx.fill();

                // Core Star
                ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.alpha * 0.95})`;
                drawFourPointStar(ctx, 0, 0, sparkle.size, sparkle.size * 0.22);
                ctx.fill();
                
                ctx.restore();
            });

            // Draw Wave Ribbon Bundle
            waves.forEach((w) => {
                // To get the ribbon/spectral texture like the image, we draw multiple sub-strands 
                // nested together with slight phase and amplitude offsets
                const subStrands = 5;
                
                for (let s = 0; s < subStrands; s++) {
                    ctx.beginPath();
                    
                    const subRatio = s / subStrands;
                    // Vary thickness and opacity across the sub-strands
                    ctx.lineWidth = w.lineWidth * (1 - subRatio * 0.4);
                    const subOpacity = w.opacity * (1 - subRatio * 0.6);

                    // Fade at the left and right edges (linear gradient)
                    const grad = ctx.createLinearGradient(0, 0, width, 0);
                    grad.addColorStop(0, `rgba(${w.color}, 0)`);
                    grad.addColorStop(0.15, `rgba(${w.color}, ${subOpacity * 0.2})`);
                    grad.addColorStop(0.5, `rgba(${w.color}, ${subOpacity})`);
                    grad.addColorStop(0.85, `rgba(${w.color}, ${subOpacity * 0.2})`);
                    grad.addColorStop(1, `rgba(${w.color}, 0)`);
                    
                    ctx.strokeStyle = grad;

                    // Wave equation configuration
                    const offsetPhase = (s - subStrands / 2) * 0.06;
                    const offsetAmplitude = (s - subStrands / 2) * 1.8;

                    // Draw the curve across screen width
                    for (let x = 0; x <= width; x += 3) {
                        const phase = time * w.speed + w.phaseOffset + offsetPhase;
                        
                        // Main wave combines high & low frequency modulators for natural motion
                        const y = centerY + 
                            Math.sin(x * w.frequency + phase) * (w.amplitude + offsetAmplitude) * 
                            Math.cos(x * (w.frequency * 0.35) + phase * 0.6);

                        if (x === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }
                    ctx.stroke();
                }
            });

            // Increment time if motion is not reduced
            if (!prefersReducedMotion) {
                time += 0.8;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        // Use IntersectionObserver to pause rendering when component is off-screen
        let isObserverActive = true;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!isObserverActive) {
                            isObserverActive = true;
                            render();
                        }
                    } else {
                        isObserverActive = false;
                        cancelAnimationFrame(animationFrameId);
                    }
                });
            },
            { threshold: 0.05 }
        );

        observer.observe(container);

        // Start render
        render();

        return () => {
            window.removeEventListener('resize', resize);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="pointer-events-none relative z-15 w-full overflow-hidden bg-transparent select-none py-4"
            style={{ height: '120px' }}
        >
            {/* Ambient background glow behind the wave */}
            <div className="absolute inset-x-0 top-1/2 left-1/2 h-20 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-sky-500/5 blur-[80px] rounded-full mix-blend-screen" />
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
