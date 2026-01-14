"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { GRAPH_NODES, GRAPH_LINKS } from '@/data/graph-data';

// Dynamically import ForceGraph2D with no SSR
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false,
    loading: () => <div className="h-96 w-full flex items-center justify-center text-neutral-500">Loading Knowledge Graph...</div>
});

export default function KnowledgeGraph() {
    const { theme } = useTheme();
    const graphRef = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Responsive resizing
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };

        window.addEventListener('resize', updateDimensions);
        updateDimensions();

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const isDark = theme === 'dark';

    // Custom D3-style Node Rendering
    const nodeCanvasObject = (node: any, ctx: any, globalScale: number) => {
        const label = node.id;
        const fontSize = 12 / globalScale; // Scale font based on zoom level

        // Draw Node
        const radius = 5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = isDark ? (node.group === 1 ? '#10B981' : '#34D399') : (node.group === 1 ? '#059669' : '#10B981');
        ctx.fill();

        // Draw Label (Always visible or scalable)
        ctx.font = `${fontSize < 2 ? 2 : fontSize}px Sans-Serif`; // Minimum font size check
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isDark ? '#ffffff' : '#000000';

        // Offset text below node
        ctx.fillText(label, node.x, node.y + radius + (fontSize < 2 ? 2 : fontSize));
    };

    return (
        <div ref={containerRef} className="w-full h-[500px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-900 relative">
            <div className="absolute top-4 left-4 z-10 bg-white/80 dark:bg-black/50 p-3 rounded-lg backdrop-blur-sm pointer-events-none border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Knowledge Network (D3 Force)</h3>
                <p className="text-xs text-neutral-500">Scroll to zoom • Drag nodes</p>
            </div>

            <ForceGraph2D
                ref={graphRef}
                width={dimensions.width}
                height={dimensions.height}
                graphData={{ nodes: GRAPH_NODES, links: GRAPH_LINKS }}
                nodeCanvasObject={nodeCanvasObject}
                nodePointerAreaPaint={(node: any, color, ctx) => {
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
                    ctx.fill();
                }}
                linkColor={() => isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}
                backgroundColor="transparent"
                minZoom={0.5}
                maxZoom={4}
            />
        </div>
    );
}
