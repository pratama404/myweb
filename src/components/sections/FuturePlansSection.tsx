"use client";

import Card from '@/components/ui/Card';
import { Calendar, Hammer, PenTool } from 'lucide-react';

export default function FuturePlansSection() {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Hammer className="text-emerald-500" size={24} />
                Future Lab
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Future Project */}
                <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-500/20">
                    <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                            Q3 2026
                        </span>
                        <Hammer className="text-emerald-500" size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Project: Self-Healing Infra</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        Autonomous agents that detect runtime errors, patch code, and deploy fixes without human intervention.
                    </p>
                </Card>

                {/* Future Post */}
                <Card className="p-6 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-500/20">
                    <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                            Coming Soon
                        </span>
                        <PenTool className="text-blue-500" size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Essay: The Rise of Synthetic Employees</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        Exploring the organizational shift from "hiring people" to "instantiating agents" and the role of the AI Architect.
                    </p>
                </Card>
            </div>
        </div>
    );
}
