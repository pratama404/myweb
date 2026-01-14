"use client";

import { motion } from 'framer-motion';

export default function MobileReactor() {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outer rotating ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30"
            />

            {/* Inner counter-rotating ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-emerald-500/20 border-t-emerald-500/60"
            />

            {/* Core Pulse */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-emerald-500/20 blur-md flex items-center justify-center"
            >
                <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            </motion.div>
        </div>
    );
}
