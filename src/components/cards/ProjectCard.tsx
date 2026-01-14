"use client";

import Card from '@/components/ui/Card';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    href: string;
    image?: string;
}

export default function ProjectCard({ title, description, tags, href, image }: ProjectCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    return (
        <Card className="group overflow-visible bg-neutral-50 dark:bg-neutral-900/50 p-0 border-neutral-200 dark:border-neutral-800">
            <motion.div
                onMouseMove={onMouseMove}
                className="relative h-full w-full overflow-hidden rounded-2xl p-6"
                whileHover={{ scale: 0.98 }}
            >
                <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 dark:block hidden"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
                    }}
                />

                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 flex-wrap">
                        {tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-neutral-200/50 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link href={href} className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                        <ArrowUpRight size={20} />
                    </Link>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">{description}</p>

                {/* Project Thumbnail */}
                <div className="mt-auto relative h-32 w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-white/5">
                    {image ? (
                        <div className="relative w-full h-full">
                            {/* Simple Next.js Image without complex fill/sizes for this Bento context since card size varies */}
                            <img
                                src={image}
                                alt={title}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800/50" />
                    )}
                </div>
            </motion.div>
        </Card>
    );
}
