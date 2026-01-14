"use client";

import Container from '@/components/layout/Container';
import WritingCard from '@/components/cards/WritingCard';
import { WRITING_POSTS, WritingSource } from '@/data/writing';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Coffee, FileCode, LayoutGrid } from 'lucide-react';

export default function BlogPage() {
    const [filter, setFilter] = useState<'all' | WritingSource>('all');

    const filteredPosts = filter === 'all'
        ? WRITING_POSTS
        : WRITING_POSTS.filter(post => post.source === filter);

    return (
        <Container>
            <div className="py-12 md:py-20 space-y-12">

                {/* Header */}
                <div className="space-y-6 max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Writing Hub
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        A collection of thoughts, technical deep dives, and random musings.
                        I write about code on <strong>Medium</strong> and life on <strong>Blogger</strong>.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 p-1 bg-neutral-100 dark:bg-neutral-900/50 rounded-xl w-fit border border-neutral-200 dark:border-white/5">
                    <button
                        onClick={() => setFilter('all')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                            filter === 'all'
                                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                        )}
                    >
                        <LayoutGrid size={16} />
                        All Posts
                    </button>
                    <button
                        onClick={() => setFilter('medium')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                            filter === 'medium'
                                ? "bg-blue-500 text-white shadow-sm"
                                : "text-neutral-500 hover:text-blue-500"
                        )}
                    >
                        <FileCode size={16} />
                        Technical (Medium)
                    </button>
                    <button
                        onClick={() => setFilter('blogger')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                            filter === 'blogger'
                                ? "bg-orange-500 text-white shadow-sm"
                                : "text-neutral-500 hover:text-orange-500"
                        )}
                    >
                        <Coffee size={16} />
                        Journal (Blogger)
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                        <WritingCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
