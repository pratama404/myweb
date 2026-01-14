"use client";

import Link from 'next/link';
import { WritingPost } from '@/data/writing';
import { ArrowUpRight, BookOpen, Coffee, FileCode } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface WritingCardProps {
    post: WritingPost;
    index: number;
}

export default function WritingCard({ post, index }: WritingCardProps) {
    const isMedium = post.source === 'medium';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
        >
            <Link
                href={post.url}
                target="_blank"
                className={cn(
                    "block h-full p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden",
                    // Styles based on source
                    isMedium
                        ? "bg-neutral-900 border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-800/80"
                        : "bg-[#fffdf5] dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-orange-400/50 hover:shadow-sm"
                )}
            >
                {/* Decoration */}
                <div className={cn(
                    "absolute top-0 right-0 p-3 opacity-10 transition-opacity group-hover:opacity-20",
                    isMedium ? "text-blue-500" : "text-orange-500"
                )}>
                    {isMedium ? <FileCode size={64} /> : <Coffee size={64} />}
                </div>

                <div className="relative z-10 flex flex-col h-full space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <span className={cn(
                            "text-xs font-bold tracking-wider uppercase flex items-center gap-2",
                            isMedium ? "text-blue-400" : "text-orange-600 dark:text-orange-400 font-serif italic"
                        )}>
                            {isMedium ? <FileCode size={14} /> : <Coffee size={14} />}
                            {isMedium ? "Engineering" : "Journal"}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                            {post.date}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                        <h3 className={cn(
                            "text-lg font-bold leading-tight group-hover:underline decoration-1 underline-offset-4",
                            isMedium ? "text-white group-hover:text-blue-200" : "text-neutral-900 dark:text-gray-100 font-serif group-hover:text-orange-800 dark:group-hover:text-orange-200"
                        )}>
                            {post.title}
                        </h3>
                        <p className={cn(
                            "text-sm line-clamp-2 leading-relaxed",
                            isMedium ? "text-neutral-400" : "text-neutral-600 dark:text-neutral-400"
                        )}>
                            {post.description}
                        </p>
                    </div>

                    {/* Footer / Read More */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-2">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className={cn(
                                        "text-[10px] px-2 py-0.5 rounded-full border",
                                        isMedium
                                            ? "border-neutral-700 text-neutral-400 bg-neutral-800"
                                            : "border-orange-200 text-orange-700 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300"
                                    )}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <ArrowUpRight size={16} className={cn(
                            "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                            isMedium ? "text-neutral-500 group-hover:text-white" : "text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                        )} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
