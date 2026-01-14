"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function InteractiveReactor() {
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

    const layer1X = useTransform(mouseX, [-100, 100], [-10, 10]);
    const layer1Y = useTransform(mouseY, [-100, 100], [-10, 10]);

    const layer2X = useTransform(mouseX, [-100, 100], [-20, 20]);
    const layer2Y = useTransform(mouseY, [-100, 100], [-20, 20]);

    const layer3X = useTransform(mouseX, [-100, 100], [-30, 30]);
    const layer3Y = useTransform(mouseY, [-100, 100], [-30, 30]);

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
                {/* 1. OUTER RING (Dashed Scan) */}
                <motion.div
                    style={{ x: layer1X, y: layer1Y }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-neutral-300 dark:border-neutral-700 opacity-50"
                />

                {/* 2. HEXAGONAL GRID (Detailed Wireframe) */}
                <motion.div
                    style={{ x: layer1X, y: layer1Y }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 flex items-center justify-center opacity-60"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-emerald-500/40 stroke-[0.2]">
                        <path d="M50 2 L93.3 27 M93.3 27 L93.3 77 M93.3 77 L50 102 M50 102 L6.7 77 M6.7 77 L6.7 27 M6.7 27 L50 2" strokeDasharray="5,5" />
                        <circle cx="50" cy="50" r="30" className="stroke-cyan-500/30" />
                        <path d="M50 20 L50 80 M20 50 L80 50" className="stroke-emerald-500/20" />
                    </svg>
                </motion.div>

                {/* 3. ORBITAL RINGS (Cyberpunk Cyan/Purple) */}
                <motion.div
                    style={{ x: layer2X, y: layer2Y }}
                    className="absolute inset-8"
                >
                    <motion.div
                        animate={{ rotateX: 360, rotateY: 180 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-cyan-400/30 border-t-transparent border-b-transparent transform-style-3d"
                    />
                    <motion.div
                        animate={{ rotateX: -360, rotateY: 90 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 rounded-full border border-purple-400/30 border-l-transparent border-r-transparent transform-style-3d"
                    />
                </motion.div>

                {/* 4. DATA PARTICLES (Floating Dots) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full"
                >
                    <div className="absolute top-4 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[1px] shadow-[0_0_8px_#34d399]" />
                    <div className="absolute bottom-1/4 right-8 w-1 h-1 bg-cyan-400 rounded-full blur-[1px]" />
                    <div className="absolute top-1/3 left-8 w-1 h-1 bg-purple-400 rounded-full blur-[1px]" />
                </motion.div>

                {/* 5. CORE REACTOR (Pulsing Energy) */}
                <motion.div
                    style={{ x: layer3X, y: layer3Y }}
                    className="relative w-20 h-20 flex items-center justify-center"
                >
                    {/* Glow Bloom */}
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse" />

                    {/* Solid Core */}
                    <div className="relative w-12 h-12 bg-neutral-900/90 dark:bg-black/90 rounded-full border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] backdrop-blur-md">
                        <div className="w-6 h-6 bg-gradient-to-tr from-emerald-500 to-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                    </div>

                    {/* HUD Marks around Core */}
                    <div className="absolute inset-[-10px] border border-emerald-500/10 rounded-full" />
                    <div className="absolute top-0 w-0.5 h-2 bg-emerald-500/50" />
                    <div className="absolute bottom-0 w-0.5 h-2 bg-emerald-500/50" />
                    <div className="absolute left-0 w-2 h-0.5 bg-emerald-500/50" />
                    <div className="absolute right-0 w-2 h-0.5 bg-emerald-500/50" />
                </motion.div>

                {/* 6. GLITCH OVERLAY (Subtle Technoise) */}
                <motion.div
                    animate={{ opacity: [0, 0.1, 0, 0.2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1] }}
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/5 to-transparent pointer-events-none"
                />
            </motion.div>
        </motion.div>
    );
}
