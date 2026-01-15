"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ source }: { source: string }) {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Simple regex to find markdown headers (## and ###)
        // Note: This is a client-side approximation suitable for MDX content source
        const regex = /^(#{2,3})\s+(.*)$/gm;
        const items: TOCItem[] = [];
        let match;

        while ((match = regex.exec(source)) !== null) {
            const level = match[1].length;
            const text = match[2];
            // Generate id consistent with rehype-slug (lowercase, remove special chars, replace spaces with dashes)
            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-');

            items.push({ id, text, level });
        }

        setHeadings(items);
    }, [source]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <div className="hidden lg:block sticky top-24 ml-12 w-64">
            <h4 className="font-bold text-neutral-900 dark:text-white mb-6 text-sm uppercase tracking-widest border-b border-neutral-200 dark:border-neutral-800 pb-2">
                On this page
            </h4>
            <ul className="space-y-4 text-sm font-medium">
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className={cn(
                                "block transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400",
                                activeId === heading.id
                                    ? "text-emerald-600 dark:text-emerald-400 font-medium -ml-[17px] border-l-2 border-emerald-500 pl-4"
                                    : "text-neutral-500 dark:text-neutral-400",
                                heading.level === 3 && "pl-4"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setActiveId(heading.id);
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
