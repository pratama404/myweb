import { ReactNode } from "react";

interface FeatureProps {
    title: string;
    children: ReactNode;
}

export function Features({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
            {children}
        </div>
    );
}

export function Feature({ title, children }: FeatureProps) {
    return (
        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-bold text-neutral-900 dark:text-white mb-2">{title}</h4>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {children}
            </div>
        </div>
    );
}
