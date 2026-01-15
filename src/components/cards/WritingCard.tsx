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
    const isEngineering = post.category === 'engineering';
    const isJournal = post.category === 'journal';
    const isArticle = !isEngineering && !isJournal;

    // Link destination: we prioritize internal link if it exists
    const href = post.url || `/blog/${post.slug}`;
    const target = post.source === 'local' ? '_self' : '_blank';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
        >
            <Link
                href={href}
                target={target}
                className={cn(
                    "block h-full p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden",
                    // Styles based on CATEGORY
                    isEngineering
                        ? "bg-neutral-900 border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-800/80"
                        : isJournal
                            ? "bg-[#fffdf5] dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-orange-400/50 hover:shadow-sm"
                            : "bg-emerald-50/50 dark:bg-emerald-900/10 border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-900/10"
                )}
            >
                {/* Decoration */}
                <div className={cn(
                    "absolute top-0 right-0 p-3 opacity-10 transition-opacity group-hover:opacity-20",
                    isEngineering ? "text-blue-500" : isJournal ? "text-orange-500" : "text-emerald-500"
                )}>
                    {isEngineering ? <FileCode size={64} /> : isJournal ? <Coffee size={64} /> : <BookOpen size={64} />}
                </div>

                <div className="relative z-10 flex flex-col h-full space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <span className={cn(
                            "text-xs font-bold tracking-wider uppercase flex items-center gap-2",
                            isEngineering ? "text-blue-400" : isJournal ? "text-orange-600 dark:text-orange-400 font-serif italic" : "text-emerald-600 dark:text-emerald-400"
                        )}>
                            {isEngineering ? <FileCode size={14} /> : isJournal ? <Coffee size={14} /> : <BookOpen size={14} />}
                            {isEngineering ? "Engineering" : isJournal ? "Journal" : "Article"}
                        </span>
                        <div className="flex items-center gap-2">
                            {post.readTime && (
                                <span className="text-[10px] text-neutral-400 font-medium px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800">
                                    {post.readTime}
                                </span>
                            )}
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                                {post.date}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                        <h3 className={cn(
                            "text-lg font-bold leading-tight group-hover:underline decoration-1 underline-offset-4",
                            isEngineering ? "text-white group-hover:text-blue-200" : isJournal ? "text-neutral-900 dark:text-gray-100 font-serif group-hover:text-orange-800 dark:group-hover:text-orange-200" : "text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                        )}>
                            {post.title}
                        </h3>
                        <p className={cn(
                            "text-sm line-clamp-2 leading-relaxed",
                            isEngineering ? "text-neutral-400" : "text-neutral-600 dark:text-neutral-400"
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
                                        isEngineering
                                            ? "border-neutral-700 text-neutral-400 bg-neutral-800"
                                            : isJournal
                                                ? "border-orange-200 text-orange-700 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300"
                                                : "border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                                    )}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <ArrowUpRight size={16} className={cn(
                            "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                            isEngineering ? "text-neutral-500 group-hover:text-white" : "text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                        )} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
