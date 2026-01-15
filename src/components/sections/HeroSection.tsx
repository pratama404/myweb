"use client";

import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import TextReveal from '@/components/ui/TextReveal';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-75 -inset-px bg-gradient-to-r from-blue-600 to-black rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-white dark:bg-neutral-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border-2 border-transparent bg-clip-padding">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">
                            ✨ Available for new opportunities
                        </span>
                    </div>
                </div>

                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-neutral-900 dark:text-white">
                    Crafting intelligent <br className="hidden md:block" />
                    <span className="text-emerald-500">interfaces</span> & <span className="text-blue-500">models</span>.
                </h2>

                <div className="text-lg text-neutral-600 dark:text-neutral-400 max-w-[650px] leading-relaxed">
                    <TextReveal text="Bridging the gap between complex machine learning algorithms and intuitive user experiences." delay={0.5} />
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                        href="/about"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-neutral-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                    >
                        About Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="https://scholar.google.com/citations?hl=id&user=sMvphWgAAAAJ"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-neutral-900 transition-all duration-200 bg-transparent font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
                    >
                        Our Research
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1cicMY60H48R8Y6tacndW1EyZ_Ll58xGz/view?usp=sharing"
                        target="_blank"
                        className="inline-flex items-center justify-center w-12 h-12 text-neutral-900 transition-all duration-200 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
                        aria-label="View Resume"
                    >
                        <FileText className="w-5 h-5" />
                    </Link>
                </div>
            </motion.div>

            <div className="relative w-full h-[400px] lg:h-[600px] hidden md:flex items-center justify-center perspective-1000">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-[100px] rounded-full opacity-50" />

                {/* 3D Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0],
                        rotateY: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        opacity: { duration: 1 },
                        scale: { duration: 1 }
                    }}
                    className="relative w-full h-full"
                >
                    <img
                        src="/images/iot-hero.png"
                        alt="IoT Network Visualization"
                        className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500 scale-125"
                    />
                </motion.div>
            </div>
        </div>
    );
}
