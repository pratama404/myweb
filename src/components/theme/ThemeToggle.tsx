"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-8 h-8" />; // Placeholder to avoid hydration mismatch
    }

    const toggleTheme = () => {
        if (theme === 'dark') setTheme('light');
        else if (theme === 'light') setTheme('system');
        else setTheme('dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-50"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' && <Moon size={20} />}
                    {theme === 'light' && <Sun size={20} />}
                    {theme === 'system' && <Laptop size={20} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
