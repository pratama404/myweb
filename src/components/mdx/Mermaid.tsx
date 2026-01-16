"use client";

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            mermaid.initialize({
                startOnLoad: true,
                theme: 'dark',
                securityLevel: 'loose',
            });
            mermaid.contentLoaded();
        }
    }, []);

    useEffect(() => {
        if (ref.current) {
            mermaid.run({
                nodes: [ref.current],
            });
        }
    }, [chart]);

    return (
        <div className="mermaid my-8 flex justify-center bg-neutral-100 dark:bg-neutral-900/50 p-4 rounded-lg overflow-x-auto" ref={ref}>
            {chart}
        </div>
    );
};

export default Mermaid;
