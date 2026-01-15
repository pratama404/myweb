"use client";

import { useState, useMemo } from 'react';
import { WritingPost, WritingSource } from '@/data/writing';
import WritingCard from '@/components/cards/WritingCard';
import { cn } from '@/lib/utils';
import { Coffee, FileCode, LayoutGrid, Search, BookOpen } from 'lucide-react';

interface BlogFeedProps {
    initialPosts: WritingPost[];
}

export default function BlogFeed({ initialPosts }: BlogFeedProps) {
    const [filter, setFilter] = useState<'all' | 'engineering' | 'journal' | 'article'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchesFilter = filter === 'all' || post.category === filter;
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesFilter && matchesSearch;
        });
    }, [initialPosts, filter, searchQuery]);

    return (
        <div className="space-y-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">

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
                        All
                    </button>
                    <button
                        onClick={() => setFilter('engineering')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                            filter === 'engineering'
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-neutral-500 hover:text-blue-600"
                        )}
                    >
                        <FileCode size={16} />
                        Engineering
                    </button>
                    <button
                        onClick={() => setFilter('journal')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                            filter === 'journal'
                                ? "bg-orange-500 text-white shadow-sm"
                                : "text-neutral-500 hover:text-orange-500"
                        )}
                    >
                        <Coffee size={16} />
                        Journal
                    </button>
                    <button
                        onClick={() => setFilter('article')}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                            filter === 'article'
                                ? "bg-emerald-500 text-white shadow-sm"
                                : "text-neutral-500 hover:text-emerald-500"
                        )}
                    >
                        <BookOpen size={16} />
                        Articles
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <WritingCard key={post.id} post={post} index={index} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-24 text-neutral-500">
                        No articles found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}
