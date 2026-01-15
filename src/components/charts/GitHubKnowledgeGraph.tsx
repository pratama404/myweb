"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import type { GraphData, GraphNode } from '@/lib/github';

// Dynamically import ForceGraph2D with no SSR
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false,
    loading: () => <div className="h-96 w-full flex items-center justify-center text-neutral-500">Loading GitHub Galaxy...</div>
});

export default function GitHubKnowledgeGraph({ data }: { data: GraphData }) {
    const { resolvedTheme } = useTheme(); // Use resolvedTheme for system preference support
    const graphRef = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef<HTMLDivElement>(null);
    const isDark = resolvedTheme === 'dark';

    useEffect(() => {
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

        // Add initial zoom/center after small delay to let graph settle
        setTimeout(() => {
            if (graphRef.current) {
                graphRef.current.zoomToFit(400);
            }
        }, 1000);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Custom Glowing Node Renderer
    const nodeCanvasObject = (node: any, ctx: any, globalScale: number) => {
        // Cast node to GraphNode for property access safety if needed, 
        // but strict typing here might conflict with d3-force internal props (vx, vy, index).
        // Let's keep (node: any) in the signature to satisfy the library type, but treat it as GraphNode inside.
        const n = node as GraphNode & { x: number, y: number };
        const label = n.id;
        const fontSize = 12 / globalScale;
        const radius = Math.max(2, Math.sqrt(n.val) * 1.2); // Smaller nodes

        // Glow Effect
        const glowColor = n.color || (isDark ? '#10B981' : '#059669');
        ctx.shadowBlur = isDark ? 8 : 3; // Reduced glow
        ctx.shadowColor = glowColor;

        // Draw Node
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = glowColor;
        ctx.fill();

        // Reset Shadow for Text
        ctx.shadowBlur = 0;

        // Draw Label (Only if zoomed in or large node)
        // Show labels for Groups 1 (User) and 3 (Languages) more aggressively
        const shouldShowLabel = globalScale > 1.2 || n.group === 1 || n.group === 3;

        if (shouldShowLabel) {
            ctx.font = `600 ${fontSize < 3 ? 3 : fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top'; // Draw below the node

            const textY = n.y + radius + 2;

            // Stroke (Outline) for visibility
            ctx.lineWidth = 2 / globalScale;
            ctx.strokeStyle = isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)';
            ctx.strokeText(label, n.x, textY);

            // Fill
            ctx.fillStyle = isDark ? '#ffffff' : '#000000';
            ctx.fillText(label, n.x, textY);
        }
    };

    return (
        <div ref={containerRef} className="w-full h-[600px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-900 relative">
            <div className="absolute top-4 left-4 z-10 bg-white/80 dark:bg-black/50 p-3 rounded-lg backdrop-blur-sm pointer-events-none border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">GitHub Project Galaxy</h3>
                <p className="text-xs text-neutral-500">Live data from @pratama404</p>
                <div className="flex gap-2 mt-2 text-[10px] text-neutral-600 dark:text-neutral-400">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white border border-gray-400"></span>Me</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Repo</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Lang</span>
                </div>
            </div>

            <ForceGraph2D
                ref={graphRef}
                width={dimensions.width}
                height={dimensions.height}
                graphData={data}
                nodeCanvasObject={nodeCanvasObject}
                linkColor={() => isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)'} // Increased opacity
                backgroundColor="transparent"
                minZoom={0.5}
                maxZoom={6}
                d3VelocityDecay={0.7} // More friction = less jitter
                cooldownTicks={100}
                onNodeClick={(node: any) => {
                    // Focus on click
                    const n = node as GraphNode & { x: number, y: number };
                    graphRef.current?.centerAt(n.x, n.y, 400);
                    graphRef.current?.zoom(2.5, 400);
                }}
            />
        </div>
    );
}
