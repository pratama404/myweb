"use client";

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={cn(
                'grid w-full auto-rows-auto md:auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3',
                className
            )}
        >
            {children}
        </motion.div>
    );
}
