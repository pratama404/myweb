"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Building2 } from 'lucide-react';
import { CareerItem } from '@/data/career';

interface TimelineProps {
    items: CareerItem[];
}

function TimelineItem({ year, title, company, description, category, tags, index }: CareerItem & { index: number }) {
    const getIconAndColor = () => {
        switch (category) {
            case 'corporate':
                return { icon: Briefcase, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' };
            case 'academic':
                return { icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' };
            case 'community':
                return { icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' };
            default:
                return { icon: Building2, color: 'text-gray-500', bg: 'bg-gray-500/10', border: 'border-gray-500/20' };
        }
    };

    const style = getIconAndColor();
    const Icon = style.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative pl-8 pb-12 border-l border-neutral-200 dark:border-neutral-800 last:border-l-0 last:pb-0"
        >
            <div className={`absolute top-0 left-[-9px] rounded-full p-1 border ${style.bg} ${style.border} ${style.color}`}>
                <Icon size={12} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1">
                <span className={`text-sm font-mono font-medium ${style.color}`}>{year}</span>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">{title}</h3>
            </div>
            <div className="text-base font-medium text-neutral-700 dark:text-neutral-300 mb-2 flex items-center gap-2">
                {company}
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${style.border} ${style.color} uppercase tracking-wider`}>
                    {category}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-3">
                {description}
            </p>
            {tags && (
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="py-8">
            {items.map((item, idx) => (
                <TimelineItem key={idx} {...item} index={idx} />
            ))}
        </div>
    );
}
