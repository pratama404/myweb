"use client";

import { Metadata } from '@/lib/mdx';
import TableOfContents from './TableOfContents';
import { Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
    meta: Metadata;
    content: string;
}

function ShareButtons({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `Check out "${title}" by Ageng via @agengptr_`;

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Share</p>
            <div className="flex gap-2">
                <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-colors"
                    aria-label="Share on Twitter"
                >
                    <Twitter size={18} />
                </button>
                <button
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-300 transition-colors"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin size={18} />
                </button>
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400 transition-colors"
                    aria-label="Copy Link"
                >
                    {copied ? <Check size={18} /> : <LinkIcon size={18} />}
                </button>
            </div>
        </div>
    );
}

export default function Sidebar({ meta, content }: SidebarProps) {
    return (
        <div className="space-y-8 sticky top-24">

            {/* TOC */}
            <div>
                <TableOfContents source={content} />
            </div>

            {/* Share Buttons */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <ShareButtons title={meta.title} />
            </div>

            {/* META INFO */}
            <div className="space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                {/* Spotlight */}
                {meta.spotlight && (
                    <div className="rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-4">
                        <p className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2">
                            <span>💡</span> Spotlight
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                            {meta.spotlight}
                        </p>
                    </div>
                )}

                {/* Tech Stack */}
                {meta.techStack && (
                    <div className="rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-4">
                        <p className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">
                            Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {meta.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Team */}
                {meta.team && (
                    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                        <h4 className="font-bold text-neutral-900 dark:text-white text-sm">{meta.team.name}</h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{meta.team.role}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
