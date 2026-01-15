"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, MotionValue } from "framer-motion";

const TAGS = [
    "Next.js", "React", "TypeScript", "Tailwind", "Python",
    "TensorFlow", "PyTorch", "OpenCV", "Docker", "AWS",
    "MQTT", "IoT", "Figma", "Node.js", "PostgreSQL",
    "Redis", "Git", "Linux", "Arduino", "ESP32"
];

const RADIUS = 120;

interface TechGlobeProps {
    children?: React.ReactNode;
    mouseX?: MotionValue<number>;
    mouseY?: MotionValue<number>;
    faded?: boolean;
}

export default function TechGlobe({ children, mouseX: externalMouseX, mouseY: externalMouseY, faded = false }: TechGlobeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    const mouseX = externalMouseX || x;
    const mouseY = externalMouseY || y;

    useEffect(() => {
        setMounted(true);
        let animationFrameId: number;
        let angle = 0;

        const animate = () => {
            angle += 0.003; // Auto rotation speed
            setRotation(prev => ({
                x: prev.x + 0.001, // Slow tumble
                y: angle
            }));
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x / 2);
            mouseY.set(y / 2);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-80 flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing"
        >
            <div className="relative w-full h-full preserve-3d flex items-center justify-center">
                {/* Core Glow */}
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full opacity-50 animate-pulse pointer-events-none" />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transform-style-3d">
                    {children}
                </div>

                {mounted && TAGS.map((tag, i) => {
                    // Fibonacci Sphere Distribution
                    const phi = Math.acos(-1 + (2 * i) / TAGS.length);
                    const theta = Math.sqrt(TAGS.length * Math.PI) * phi;

                    const x = RADIUS * Math.cos(theta) * Math.sin(phi);
                    const y = RADIUS * Math.sin(theta) * Math.sin(phi);
                    const z = RADIUS * Math.cos(phi);

                    return (
                        <Tag
                            key={i}
                            text={tag}
                            x={x} y={y} z={z}
                            rotation={rotation}
                            mouseX={mouseX}
                            mouseY={mouseY}
                            faded={faded}
                        />
                    );
                })}
            </div>
        </div>
    );
}

interface TagProps {
    text: string;
    x: number;
    y: number;
    z: number;
    rotation: { x: number; y: number };
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    faded: boolean;
}

function Tag({ text, x, y, z, rotation, mouseX, mouseY, faded }: TagProps) {
    // ... logic ...

    // In render:
    // className={... text-neutral-600 ... ${faded ? 'opacity-40 hover:opacity-100 scale-90' : ''}}
    // Let's rely on standard classes.

    // Apply rotation matrix
    // Combine auto-rotation (rotation prop) with mouse-interaction (mouseX/Y props)
    // Note: This is a simplified projection for visual effect

    // We render this in a loop or verify functionality? 
    // Usually extracting coordinate logic to a hook is better, but doing inline for component simplicity.

    // Actually, to make it react to mouse *smoothly* on top of auto-rotation, we need to combine the values.
    // Ideally we project 3D point to 2D CSS transform.

    // Calculate position synchronously
    const mx = mouseX.get() * 0.01;
    const my = mouseY.get() * 0.01;

    const rx = rotation.x + my;
    const ry = rotation.y + mx;

    // Rotate around Y
    let px = x * Math.cos(ry) - z * Math.sin(ry);
    let pz = x * Math.sin(ry) + z * Math.cos(ry);

    // Rotate around X
    let py = y * Math.cos(rx) - pz * Math.sin(rx);
    pz = y * Math.sin(rx) + pz * Math.cos(rx);

    // Project
    const scale = (pz + 200) / 300;
    const alpha = (pz + RADIUS) / (RADIUS * 2);

    const screenPos = {
        x: px,
        y: py,
        scale: Math.max(0.5, scale),
        opacity: Math.max(0.2, alpha),
        zIndex: Math.floor(pz)
    };

    const colorClass = faded
        ? "text-emerald-600/40 dark:text-emerald-400/40 font-medium hover:text-emerald-500 dark:hover:text-emerald-400"
        : "text-neutral-600 dark:text-neutral-300 font-bold hover:text-emerald-500";

    return (
        <motion.span
            className={`absolute left-1/2 top-1/2 text-sm whitespace-nowrap will-change-transform cursor-pointer hover:text-emerald-500 hover:scale-125 transition-all duration-300 ${colorClass}`}
            style={{
                x: screenPos.x,
                y: screenPos.y,
                scale: screenPos.scale,
                opacity: screenPos.opacity,
                zIndex: screenPos.zIndex,
                // textShadow: screenPos.scale > 1 ? "0 0 10px rgba(16, 185, 129, 0.5)" : "none", // Redundant with new color logic
                color: undefined // Let className handle color, unless scale override is strict.
            }}
            whileHover={{ scale: 1.5, zIndex: 100 }}
        >
            {text}
        </motion.span>
    );
}
