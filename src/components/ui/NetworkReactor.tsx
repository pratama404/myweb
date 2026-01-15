"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Brain, Code, Database, Cpu, Network, Terminal, Microscope, Layers } from 'lucide-react';

export default function NetworkReactor() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for mouse following
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const navX = e.clientX - rect.left - width / 2;
            const navY = e.clientY - rect.top - height / 2;

            x.set(navX);
            y.set(navY);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Parallax layers
    const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
    const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

    // Opposing rotations for depth
    const layer1Rotate = useTransform(mouseX, [-100, 100], [-5, 5]);
    const layer2Rotate = useTransform(mouseX, [-100, 100], [10, -10]);

    // Icons setup
    const satellites = [
        { Icon: Code, color: "text-blue-500", x: -60, y: -50, delay: 0 },
        { Icon: Database, color: "text-emerald-500", x: 60, y: -50, delay: 1 },
        { Icon: Microscope, color: "text-purple-500", x: -70, y: 40, delay: 2 },
        { Icon: Cpu, color: "text-orange-500", x: 70, y: 40, delay: 3 },
        { Icon: Terminal, color: "text-gray-400", x: 0, y: -80, delay: 1.5 },
        { Icon: Layers, color: "text-cyan-500", x: 0, y: 80, delay: 0.5 },
    ];

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-80 flex items-center justify-center cursor-pointer perspective-1000"
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-64 h-64 flex items-center justify-center transform-style-3d bg-transparent"
            >
                {/* 1. NETWORK CONNECTIONS (Lines) */}
                <motion.div
                    style={{ rotateZ: layer1Rotate }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <svg className="w-full h-full absolute inset-0 visible overflow-visible">
                        {satellites.map((sat, i) => (
                            <motion.line
                                key={i}
                                x1="50%" y1="50%"
                                x2={`calc(50% + ${sat.x}px)`}
                                y2={`calc(50% + ${sat.y}px)`}
                                className="stroke-neutral-300 dark:stroke-neutral-700 stroke-1"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ duration: 1.5, delay: sat.delay * 0.2 }}
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* 2. CENTRAL CORE (Brain) */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-20 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-xl"
                >
                    <Brain size={32} className="text-neutral-900 dark:text-white" />
                    {/* Inner Pulsing Rings */}
                    <div className="absolute inset-0 -z-10 bg-emerald-500/20 rounded-full animate-ping opacity-20" />
                </motion.div>

                {/* 3. SATELLITE NODES */}
                {satellites.map((Node, i) => (
                    <motion.div
                        key={i}
                        className={`absolute z-20 bg-white dark:bg-neutral-900 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg ${Node.color}`}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: Node.x,
                            y: Node.y,
                            opacity: 1,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 0.5,
                            delay: Node.delay * 0.2, // Entrance stagger
                            scale: {
                                duration: 3,
                                repeat: Infinity,
                                delay: Math.random() * 2 // Random pulse offsets
                            }
                        }}
                        style={{
                            rotateX: -rotateX, // Counter-rotate to keep icons flat relative to screen if desired, or let them tilt.
                            // Let's NOT counter rotate for full 3D feel.
                        }}
                    >
                        <Node.Icon size={20} />
                    </motion.div>
                ))}

                {/* 4. ORBITAL PARTICLES */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] rounded-full border border-dashed border-neutral-200 dark:border-neutral-800 opacity-30 pointer-events-none"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] rounded-full border border-dashed border-neutral-200 dark:border-neutral-800 opacity-20 pointer-events-none"
                />

            </motion.div>
        </motion.div>
    );
}
