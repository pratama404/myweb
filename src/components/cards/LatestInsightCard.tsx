"use client";

import Card from '@/components/ui/Card';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export default function LatestInsightCard() {
    return (
        <Card className="h-full p-6 flex flex-col justify-between bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-900 group hover:border-emerald-500/50 transition-colors">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                        <BookOpen size={12} />
                        <span>Latest Insight</span>
                    </div>
                    <span className="text-xs text-neutral-500">2 days ago</span>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-emerald-500 transition-colors">
                        The Rise of Agentic AI Patterns
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                        Exploring how autonomous agents are reshaping software architecture and decision-making pipelines.
                    </p>
                </div>
            </div>

            <Link
                href="/blog/agentic-ai-patterns"
                className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-4 group-hover:gap-3 transition-all"
            >
                Read Article <ArrowUpRight size={16} />
            </Link>
        </Card>
    );
}
