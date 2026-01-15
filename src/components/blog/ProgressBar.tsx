"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Smooth out the progress bar movement
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Only show progress bar after scrolling a bit
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest > 0.02) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Don't render on server or if not scrolled
    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 dark:bg-emerald-400 origin-left z-50"
            style={{ scaleX }}
        />
    );
}
