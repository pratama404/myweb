"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative z-10">{text}</div>

            {isHovered && (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: [0, 1, 0], x: [-2, 2, -2] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                        className="absolute inset-0 text-cyan-500 z-0 opacity-50 translate-x-[2px]"
                    >
                        {text}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: [0, 1, 0], x: [2, -2, 2] }}
                        transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
                        className="absolute inset-0 text-red-500 z-0 opacity-50 -translate-x-[2px]"
                    >
                        {text}
                    </motion.div>
                </>
            )}
        </div>
    );
}
