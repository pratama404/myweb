"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
            <div className="relative flex items-center justify-between p-2 pl-4 md:pl-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-lg shadow-xl ring-1 ring-black/5 dark:ring-white/5 gap-2">

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 md:gap-2 px-2">
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

                {/* Mobile Navigation Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <span className="text-sm font-bold pl-2 text-neutral-900 dark:text-white">Ageng.</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden md:block w-px h-6 bg-neutral-200 dark:bg-white/10 mx-1" />
                    <ThemeToggle />
                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 md:hidden rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-lg shadow-xl overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'px-4 py-3 text-sm font-medium rounded-xl transition-colors text-center',
                                            isActive
                                                ? 'bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white'
                                                : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
