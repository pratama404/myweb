"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface WideProjectCardProps {
    project: Project;
    index: number;
}

export default function WideProjectCard({ project, index }: WideProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors p-4 md:p-6"
        >
            {/* Image / Video Loop Section */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 dark:bg-black/80 rounded-full text-sm font-medium backdrop-blur-sm">
                        View Details
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-widest uppercase">
                            {project.category || project.techStack[0]}
                        </span>
                        <span className="text-neutral-500 text-sm font-mono">
                            {project.year}
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(1).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white border-b border-black dark:border-white pb-0.5 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all"
                    >
                        Read Case Study <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Full Click Area */}
            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" />
        </motion.div>
    );
}
