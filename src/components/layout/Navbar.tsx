"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Guestbook', href: '/guestbook' },
];

import ThemeToggle from '../theme/ThemeToggle';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
            <div className="flex items-center justify-center p-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-lg shadow-xl ring-1 ring-black/5 dark:ring-white/5 gap-2">
                <div className="flex items-center gap-1 md:gap-2 px-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'relative px-4 py-2 text-sm font-medium transition-colors hover:text-black dark:hover:text-white',
                                    isActive ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-zinc-400'
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 -z-10 rounded-full bg-neutral-200/50 dark:bg-white/10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
                <div className="w-px h-6 bg-neutral-200 dark:bg-white/10 mx-1" />
                <ThemeToggle />
            </div>
        </nav>
    );
}
