"use client";

import { motion } from 'framer-motion';
import { itemVariants } from './BentoItem';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoMotionWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function BentoMotionWrapper({ children, className }: BentoMotionWrapperProps) {
    return (
        <motion.div
            className={cn(className)}
            variants={itemVariants}
        >
            {children}
        </motion.div>
    );
}
