"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { Activity, Database, Server } from "lucide-react";

export default function ProfileVisuals() {
    const containerRef = useRef<HTMLDivElement>(null);
    const brainRef = useRef<HTMLDivElement>(null);
    const node1Ref = useRef<HTMLDivElement>(null);
    const node2Ref = useRef<HTMLDivElement>(null);
    const node3Ref = useRef<HTMLDivElement>(null);

    // Mouse Interaction Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
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

    return (
        <div
            className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center cursor-pointer"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* SATELLITE NODES (Hidden visuals, purely for beam targets) */}
            <div className="absolute flex flex-col justify-between h-[80%] left-0 md:-left-4">
                <div ref={node1Ref} className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm z-10 backdrop-blur-sm">
                    <Database size={16} className="text-emerald-500" />
                </div>
                <div ref={node2Ref} className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm z-10 backdrop-blur-sm">
                    <Server size={16} className="text-blue-500" />
                </div>
                <div ref={node3Ref} className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm z-10 backdrop-blur-sm">
                    <Activity size={16} className="text-purple-500" />
                </div>
            </div>

            {/* CENTRAL BRAIN (Target) */}
            {/* We keep the ref on this wrapper for stable Beams, while the internal content tilts */}
            <div ref={brainRef} className="relative z-20 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center perspective-1000">
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-full h-full flex items-center justify-center"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 blur-[60px] rounded-full opacity-50 animate-pulse" />

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/images/ml-hero.png"
                            alt="Neural Brain"
                            fill
                            className="object-contain mix-blend-screen scale-110"
                        />
                    </motion.div>

                    {/* FLOATING STATS CARDS - Now also move in 3D */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        style={{ zIndex: 30, transform: "translateZ(20px)" }}
                        className="absolute -right-4 top-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl shadow-xl flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <div>
                            <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Training Loss</p>
                            <p className="text-sm font-mono font-bold text-neutral-900 dark:text-white">0.0243 ↓</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        style={{ zIndex: 30, transform: "translateZ(30px)" }}
                        className="absolute -left-4 bottom-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl shadow-xl flex items-center gap-3"
                    >
                        <Activity size={16} className="text-blue-500" />
                        <div>
                            <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Accuracy</p>
                            <p className="text-sm font-mono font-bold text-neutral-900 dark:text-white">99.8%</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* BEAMS */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={node1Ref}
                toRef={brainRef}
                curvature={-50}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={node2Ref}
                toRef={brainRef}
                curvature={0}
                pathColor="rgba(59, 130, 246, 0.2)"
                gradientStartColor="#3b82f6"
                gradientStopColor="#8b5cf6"
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={node3Ref}
                toRef={brainRef}
                curvature={50}
                pathColor="rgba(168, 85, 247, 0.2)"
                gradientStartColor="#8b5cf6"
                gradientStopColor="#ec4899"
                endYOffset={10}
                duration={2.5}
                reverse
            />
        </div>
    );
}
