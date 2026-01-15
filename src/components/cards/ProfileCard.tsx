import Card from '@/components/ui/Card';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/socials';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveReactor from '@/components/ui/InteractiveReactor';
import MobileReactor from '@/components/ui/MobileReactor';
import GlitchText from '@/components/ui/GlitchText';



export default function ProfileCard() {
    return (
        <Card className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 overflow-hidden relative h-full">
            <div className="flex flex-col items-start gap-6 z-10 max-w-lg">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-white/10 shadow-lg">
                    <Image
                        src="/images/ageng.jpg"
                        alt="Ageng Putra Pratama"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative">

                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                        <GlitchText text="Ageng Putra Pratama" />
                    </h1>

                    <div className="h-8 mb-4 flex items-center">
                        <span className="text-xl font-medium text-emerald-600 dark:text-emerald-400">
                            Data Scientist & Software Engineer
                        </span>
                        <span className="w-0.5 h-6 ml-1 bg-emerald-500 animate-blink"></span>
                    </div>

                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                        Creating a hopeful future through writing ✍️, design 🎨, engineering 🧩, and laughter 🌱.
                    </p>
                </div>

                <div className="flex gap-4">
                    {SOCIAL_LINKS.filter(s => ['GitHub', 'LinkedIn', 'Instagram'].includes(s.name)).map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-neutral-700 dark:text-neutral-300"
                        >
                            <social.icon size={20} />
                        </Link>
                    ))}
                    <Link href="mailto:hello@ageng.dev" className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-neutral-700 dark:text-neutral-300">
                        <Mail size={20} />
                    </Link>
                </div>
            </div>

            {/* Interactive Reactor / 3D Element */}
            <div className="relative z-10 hidden md:flex items-center justify-center -mr-4 scale-110">
                <InteractiveReactor />
            </div>

            {/* Mobile-only Reactor */}
            <div className="absolute -right-6 -bottom-6 md:hidden opacity-60 pointer-events-none">
                <MobileReactor />
            </div>
        </Card>
    );
}
