"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ThreeDOrb() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

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

    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-80 flex items-center justify-center cursor-pointer"
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{ rotateX, rotateY }}
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative w-full h-full transform-style-3d"
            >
                {/* Glow Effect behind */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full scale-75 animate-pulse" />

                {/* 3D Orb Image */}
                <div className="relative w-full h-full drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <Image
                        src="/images/cyberpunk-orb.png"
                        alt="Cyberpunk 3D Orb"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Overlay Glitch/Tech Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-emerald-500/10 rounded-full border-dashed"
                />
            </motion.div>
        </motion.div>
    );
}
