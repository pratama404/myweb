"use client";

import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Disc, Music2 } from 'lucide-react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SpotifyCard() {
    const { data, error } = useSWR('/api/spotify', fetcher, { refreshInterval: 30000 });
    const isLoading = !data && !error;
    const isPlaying = data?.isPlaying;

    return (
        <Card className="col-span-1 row-span-1 flex flex-col justify-between p-6 bg-[#1DB954]/10 border-[#1DB954]/20 hover:border-[#1DB954]/40 transition-colors relative overflow-hidden group">
            <Link
                href={data?.songUrl || 'https://open.spotify.com/user/agengputrapratama'}
                target="_blank"
                className="absolute inset-0 z-10"
            />

            <div className="flex justify-between items-start z-0">
                <div className={`p-2 rounded-full ${isPlaying ? 'bg-[#1DB954] text-white' : 'bg-neutral-800 text-neutral-500'}`}>
                    {isPlaying ? <Music2 size={20} className="animate-pulse" /> : <Disc size={20} />}
                </div>
                {isPlaying && (
                    <div className="flex gap-1 items-end h-4">
                        {[1, 2, 3, 4].map((bar) => (
                            <motion.div
                                key={bar}
                                className="w-1 bg-[#1DB954]"
                                animate={{ height: [4, 16, 8, 14, 4] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: bar * 0.1
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-4 z-0">
                {isPlaying ? (
                    <div className="flex items-center gap-3">
                        {data?.albumImageUrl && (
                            <div className="relative w-12 h-12 rounded-md overflow-hidden shadow-sm flex-shrink-0">
                                <Image
                                    src={data.albumImageUrl}
                                    alt={data.album}
                                    fill
                                    className="object-cover animate-spin-slow"
                                    style={{ animationDuration: '10s' }}
                                />
                            </div>
                        )}
                        <div className="min-w-0">
                            <h3 className="font-semibold text-white truncate text-sm">{data.title}</h3>
                            <p className="text-xs text-neutral-300 truncate">{data.artist}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3 className="font-semibold text-white mb-1">Spotify</h3>
                        <p className="text-sm text-neutral-400">Not playing</p>
                    </>
                )}
            </div>
        </Card>
    );
}
