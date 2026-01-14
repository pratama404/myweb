"use client";

import Card from '@/components/ui/Card';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function LocationCard() {
    return (
        <Card className="relative h-full min-h-[200px] flex flex-col justify-end p-6 overflow-hidden group">
            {/* Background Map Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/map_surabaya.png"
                    alt="Surabaya Map"
                    fill
                    className="object-cover opacity-50 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-emerald-500 rounded-full animate-pulse">
                        <MapPin size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Based In</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Surabaya, ID</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    Available for remote work & collaborations.
                </p>
            </div>
        </Card>
    );
}
