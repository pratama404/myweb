"use client";

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Card from '@/components/ui/Card';
import { motion, Variants } from 'framer-motion';

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    span?: {
        mobile?: number;
        desktop?: number;
    };
}

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
};

export default function BentoItem({ children, className, span }: BentoItemProps) {
    return (
        <motion.div variants={itemVariants} className={cn(className, "h-full")}>
            <Card
                className={cn(
                    'h-full flex flex-col justify-between p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
                    // className passed on wrapper mostly implies positioning, but we apply h-full to card too
                )}
            >
                {children}
            </Card>
        </motion.div>
    );
}
