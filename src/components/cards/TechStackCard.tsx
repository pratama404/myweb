"use client";

import Card from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee';

export default function TechStackCard() {
    const techStack = [
        "Next.js", "React", "TypeScript", "Tailwind", "Python", "TensorFlow", "PostgreSQL", "Docker", "AWS", "Figma"
    ];

    return (
        <Card className="h-full flex flex-col justify-between overflow-hidden bg-neutral-100 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group">
            <div className="p-6 pb-2">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Tech Stack</h3>
                    <Link href="/uses" className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mb-6">
                {/* Mask gradients are handled inside InfiniteMarquee, but we can add extra padding if needed */}
                <InfiniteMarquee
                    items={techStack}
                    direction="left"
                    speed="slow"
                    className="py-2"
                />
            </div>

            <div className="px-6 pb-6 mt-auto">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Check out my full gear & tools list.
                </p>
            </div>

            {/* Clickable overlay */}
            <Link href="/uses" className="absolute inset-0 z-10" aria-label="View Tech Stack" />
        </Card>
    );
}
