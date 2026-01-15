"use client";

import { cn } from '@/lib/utils';
import { ReactNode, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface CardProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    spotlight?: boolean;
}

export default function Card({ children, className, style, spotlight = true }: CardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                'group relative rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-sm overflow-hidden',
                className
            )}
            style={style}
            onMouseMove={handleMouseMove}
        >
            {spotlight && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(16, 185, 129, 0.15),
                transparent 80%
              )
            `,
                    }}
                />
            )}
            <div className="relative h-full">
                {children}
            </div>
        </div>
    );
}
