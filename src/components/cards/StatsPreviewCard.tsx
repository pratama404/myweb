"use client";

import Card from '@/components/ui/Card';
import { ArrowRight, GitCommit } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function StatsPreviewCard() {
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const rounded = useTransform(spring, (latest) => Math.round(latest));

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                // Fetch contributions for 2025
                const response = await fetch('https://github-contributions-api.jogruber.de/v4/pratama404?y=2025');
                const data = await response.json();

                // Calculate total contributions
                if (data.total && data.total[2025]) {
                    spring.set(data.total[2025]);
                } else {
                    // Fallback if API structure differs or fails specific year, try robust sum
                    const total = data.contributions?.reduce((acc: number, day: any) => acc + day.count, 0) || 1248;
                    spring.set(total);
                }
            } catch (error) {
                console.error("Failed to fetch contributions:", error);
                spring.set(1248); // Fallback to partial year count
            }
        };

        fetchContributions();
    }, [spring]);

    // Use a state to force re-render on value change if needed, 
    // but motion.span is better.

    return (
        <Card className="h-full flex flex-col justify-between p-6 bg-neutral-100 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group">
            <div className="flex justify-between items-start">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                    <GitCommit size={20} />
                </div>
                <Link href="/stats" className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </Link>
            </div>

            <div className="mt-4">
                <div className="flex items-baseline gap-1">
                    <motion.h3 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        {/* We use a motion value directly for text */}
                        <motion.span>{rounded}</motion.span>
                    </motion.h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Commits in 2025</p>
            </div>

            {/* Clickable overlay */}
            <Link href="/stats" className="absolute inset-0 z-10" aria-label="View Stats" />
        </Card>
    );
}
