"use client";

import { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

export interface AnimatedBeamProps {
    className?: string;
    containerRef: RefObject<HTMLElement | null>;
    fromRef: RefObject<HTMLElement | null>;
    toRef: RefObject<HTMLElement | null>;
    curvature?: number;
    reverse?: boolean;
    pathColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    gradientStartColor?: string;
    gradientStopColor?: string;
    delay?: number;
    duration?: number;
    startXOffset?: number;
    startYOffset?: number;
    endXOffset?: number;
    endYOffset?: number;
}

export const AnimatedBeam = ({
    className,
    containerRef,
    fromRef,
    toRef,
    curvature = 0,
    reverse = false, // Include the reverse prop
    duration = Math.random() * 3 + 4,
    delay = 0,
    pathColor = "gray",
    pathWidth = 2,
    pathOpacity = 0.2,
    gradientStartColor = "#10b981", // Emerald-500
    gradientStopColor = "#3b82f6",  // Blue-500
    startXOffset = 0,
    startYOffset = 0,
    endXOffset = 0,
    endYOffset = 0,
}: AnimatedBeamProps) => {
    const id = useId();
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    // Calculate the path d attribute based on ref positions
    useEffect(() => {
        const updatePath = () => {
            if (containerRef.current && fromRef.current && toRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const rectA = fromRef.current.getBoundingClientRect();
                const rectB = toRef.current.getBoundingClientRect();

                const svgWidth = containerRect.width;
                const svgHeight = containerRect.height;
                setSvgDimensions({ width: svgWidth, height: svgHeight });

                const startX =
                    rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
                const startY =
                    rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
                const endX =
                    rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
                const endY =
                    rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

                const controlY = startY - curvature;
                const d = `M ${startX},${startY} Q ${(startX + endX) / 2
                    },${controlY} ${endX},${endY}`;
                setPathD(d);
            }
        };

        // Initialize ResizeObserver to handle layout changes dynamically
        const resizeObserver = new ResizeObserver((entries) => {
            // Create a debounce/requestAnimationFrame to save performance? 
            // For now, raw update is smooth enough for single component.
            requestAnimationFrame(updatePath);
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Also update on window resize
        window.addEventListener("resize", updatePath);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updatePath);
        };
    }, [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset,
    ]);

    return (
        <svg
            fill="none"
            width={svgDimensions.width}
            height={svgDimensions.height}
            xmlns="http://www.w3.org/2000/svg"
            className={`pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 ${className}`}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
        >
            <path
                d={pathD}
                stroke={pathColor}
                strokeWidth={pathWidth}
                strokeOpacity={pathOpacity}
                strokeLinecap="round"
            />
            <path
                d={pathD}
                stroke={`url(#${id})`}
                strokeWidth={pathWidth}
                strokeOpacity="1"
                strokeLinecap="round"
            />
            <defs>
                <motion.linearGradient
                    className="transform-gpu"
                    id={id}
                    gradientUnits="userSpaceOnUse"
                    initial={{
                        x1: "0%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%",
                    }}
                    animate={{
                        x1: ["0%", "100%"],
                        x2: ["0%", "100%"],
                        y1: ["0%", "100%"],
                        y2: ["0%", "100%"],
                    }}
                    transition={{
                        delay,
                        duration,
                        ease: [0.16, 1, 0.3, 1], // Custom bezier for liquid feel
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                >
                    <stop stopColor={gradientStartColor} stopOpacity="0" />
                    <stop stopColor={gradientStartColor} />
                    <stop stopColor={gradientStopColor} offset="32.5%" />
                    <stop stopColor={gradientStopColor} stopOpacity="0" />
                </motion.linearGradient>
            </defs>
        </svg>
    );
};
