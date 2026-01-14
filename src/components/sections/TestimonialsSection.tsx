"use client";

import Card from '@/components/ui/Card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Dr. Eng Anang",
        role: "Faculty Advisor",
        text: "Ageng's ability to translate complex ML concepts into intuitive applications is rare. A true innovator.",
        avatar: "/images/avatar.png"
    },
    {
        name: "Subhan Noor",
        role: "AMF Lab",
        text: "Reviewing Ageng's code was a pleasure. Clean, efficient, and well-architected. Highly recommended.",
        avatar: "/images/avatar.png"
    },
    {
        name: "Novin Ardian",
        role: "Product Manager",
        text: "He doesn't just build code; he builds solutions. The OfficeHub dashboard transformed our workflow.",
        avatar: "/images/avatar.png"
    }
];

export default function TestimonialsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pb-16">
            {testimonials.map((t, i) => (
                <div key={i} className={`relative group ${i % 2 === 0 ? 'md:rotate-2' : 'md:-rotate-2'} hover:rotate-0 transition-transform duration-300 ease-in-out`}>
                    <Card className="p-6 h-full bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden">
                        <Quote className="absolute top-4 right-4 text-emerald-500/10" size={64} />
                        <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                            <p className="text-neutral-600 dark:text-neutral-300 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 relative overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                                    {/* Placeholder/Fallback Avatar */}
                                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-neutral-400">
                                        {t.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{t.name}</h4>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
