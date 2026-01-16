"use client";

import Card from '@/components/ui/Card';
import { Cpu, Globe, Server } from 'lucide-react';

const capabilities = [
    { icon: Globe, label: "Frontend", val: "Next.js 15, React, Tailwind" },
    { icon: Server, label: "Backend", val: "Python, FastAPI, Supabase" },
    { icon: Cpu, label: "Agentic AI", val: "LangChain, CrewAI, RAG" },
];

export default function CapabilitiesCard() {
    return (
        <Card className="h-full flex flex-col justify-center p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <h3 className="text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-sm" />
                System Modules
            </h3>
            <div className="space-y-4">
                {capabilities.map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                                <item.icon size={18} />
                            </div>
                            <span className="font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                {item.label}
                            </span>
                        </div>
                        <span className="text-xs text-neutral-500 dark:text-neutral-500 text-right">
                            {item.val}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
