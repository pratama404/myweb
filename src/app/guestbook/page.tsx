"use client";

import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock initial data
const INITIAL_ENTRIES = [
    { id: 1, user: 'Alice', message: 'Awesome portfolio! Love the Bento grid.', date: 'Just now' },
    { id: 2, user: 'Bob', message: 'The dark mode is really sleek.', date: '1 hour ago' },
];

export default function GuestbookPage() {
    const [entries, setEntries] = useState(INITIAL_ENTRIES);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setIsLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newEntry = {
            id: Date.now(),
            user: 'Visitor', // In real app, get from auth
            message: message,
            date: 'Just now'
        };

        setEntries([newEntry, ...entries]);
        setMessage('');
        setIsLoading(false);
    };

    return (
        <Container>
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-8 mt-8">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Guestbook</h1>
                <p className="text-neutral-400">
                    Leave a message for me and other potential visitors.
                </p>

                {/* Location Map Section - REORDERED: Moved to Top */}
                <Card className="w-full p-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">I'm Currently Based Here</h3>
                            <p className="text-sm text-neutral-400">Surabaya, East Java, Indonesia</p>
                        </div>
                        <div className="w-full h-[300px] rounded-xl overflow-hidden border border-neutral-800 relative bg-neutral-900">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Surabaya Map"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Surabaya&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                                className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-300 contrast-125 opacity-80 hover:opacity-100"
                            ></iframe>
                        </div>
                    </div>
                </Card>

                <Card className="w-full p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Sign the Guestbook</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message..."
                                className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !message.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white text-black hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                            </button>
                        </div>
                        <p className="text-xs text-neutral-500">
                            Your message will appear immediately. (This is currently a demo using local state).
                        </p>
                    </form>

                    <div className="flex flex-col gap-6">
                        <AnimatePresence initial={false} mode='popLayout'>
                            {entries.map((entry) => (
                                <motion.div
                                    key={entry.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    layout
                                    className="flex flex-col gap-1 border-b border-neutral-800 pb-4 last:border-0"
                                >
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-medium text-neutral-200">{entry.user}</span>
                                        <span className="text-xs text-neutral-500">{entry.date}</span>
                                    </div>
                                    <p className="text-neutral-400">{entry.message}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </Card>
            </div>
        </Container>
    );
}
