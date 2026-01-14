"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PostcardProps {
    frontImage: string;
    backImage: string;
    alt: string;
}

export default function Postcard({ frontImage, backImage, alt }: PostcardProps) {
    return (
        <div className="w-full h-full perspective-1000 group cursor-pointer">
            <motion.div
                className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180"
            >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md">
                    <Image
                        src={frontImage}
                        alt={`${alt} - Front`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Overlay / Stamp / Text for Postcard feel */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-neutral-200 dark:border-white/10">
                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Location</div>
                        <div className="text-sm font-bold text-neutral-900 dark:text-white">Surabaya, ID</div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md"
                >
                    <Image
                        src={backImage}
                        alt={`${alt} - Back`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-full h-full p-6 border-2 border-dashed border-white/20 m-2 rounded-xl flex items-center justify-center relative">
                            {/* "Stamp" */}
                            <div className="absolute top-2 right-2 w-12 h-16 border-2 border-white/40 bg-white/10 rounded flex items-center justify-center rotate-3">
                                <div className="text-[10px] text-white/60 font-mono text-center leading-tight">POST<br />CARD</div>
                            </div>

                            <div className="text-center transform flex flex-col items-center">
                                <div className="text-2xl font-bold text-white mb-2 drop-shadow-md">My Workspace</div>
                                <div className="text-sm text-neutral-200 font-mono">Where ideas become reality.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
