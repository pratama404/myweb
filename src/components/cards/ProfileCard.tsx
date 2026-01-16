"use client";

import Card from '@/components/ui/Card';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/socials';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveReactor from '@/components/ui/InteractiveReactor';
import TechGlobe from '@/components/ui/TechGlobe';
import GlitchText from '@/components/ui/GlitchText';
import { useRef } from 'react';



export default function ProfileCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
        }
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 overflow-hidden relative h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 pb-20 md:p-8 gap-8 h-full w-full">
                <div className="md:col-span-7 flex flex-col items-start gap-6 z-10 w-full">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-white/10 shadow-lg">
                        <Image
                            src="/images/ageng.jpg"
                            alt="Ageng Putra Pratama"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative">

                        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                            <GlitchText text="Ageng Putra Pratama" />
                        </h1>

                        <div className="h-8 mb-4 flex items-center">
                            <span className="text-xl font-medium text-emerald-600 dark:text-emerald-400">
                                Data Scientist & Software Engineer
                            </span>
                            <span className="w-0.5 h-6 ml-1 bg-emerald-500 animate-blink"></span>
                        </div>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                            Creating a hopeful future through writing ✍️, design 🎨, engineering 🧩, and laughter 🌱.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {SOCIAL_LINKS.filter(s => ['GitHub', 'LinkedIn', 'Instagram'].includes(s.name)).map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-neutral-700 dark:text-neutral-300"
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                        <Link href="mailto:agengputrapratama@gmail.com" className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-neutral-700 dark:text-neutral-300">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>

                {/* Tech Stack Globe / Interactive Visual */}
                {/* Unified Interactive Visual */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="md:col-span-5 relative z-10 flex items-center justify-center w-full md:w-[300px] h-[300px] flex-shrink-0 md:-mr-4 mt-6 md:mt-0 cursor-pointer"
                >
                    {/* Background: Subtle Tech Map */}
                    <div className="absolute inset-0 flex items-center justify-center scale-125 opacity-100 dark:opacity-100 z-0">
                        <TechGlobe mouseX={mouseX} mouseY={mouseY} faded />
                    </div>

                    {/* Foreground: Active Reactor Core */}
                    <div className="relative z-10 scale-110 saturate-150 pointer-events-none">
                        {/* pointer-events-none so mouse passes to container handler */}
                        <InteractiveReactor mouseX={mouseX} mouseY={mouseY} />
                    </div>
                </div>
            </div>
        </Card>
    );
}
