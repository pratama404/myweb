import Container from '@/components/layout/Container';
import Timeline from '@/components/ui/Timeline';
import { Metadata } from 'next';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Users } from 'lucide-react';
import Image from 'next/image';
import Postcard from '@/components/ui/Postcard';

export const metadata: Metadata = {
    title: 'About | Ageng Putra Pratama',
    description: 'A glimpse into my journey as a Data Scientist and Software Engineer.',
};

import { SOCIAL_LINKS } from '@/data/socials';

import { CAREER_DATA } from '@/data/career';

export default function AboutPage() {

    // Filter data
    const careerItems = CAREER_DATA.filter(item => item.category === 'corporate' || item.category === 'academic');
    const volunteerItems = CAREER_DATA.filter(item => item.category === 'community');

    return (
        <Container>
            <div className="max-w-7xl mx-auto py-12 space-y-16">

                {/* Header Section */}
                <div className="space-y-6 border-b border-neutral-200 dark:border-neutral-800 pb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        About
                    </h1>
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="space-y-6 flex-1">
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white leading-tight">
                                I&apos;m Ageng. I live in Surabaya, where I create the future.
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                I&apos;m a Data Scientist and Software Engineer based in Surabaya. Currently, I&apos;m working as an <strong>Independent Researcher</strong>, focusing on <strong>Agentic AI</strong> and developing autonomous software systems.
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                My journey bridges the gap between complex data analysis and intuitive software engineering. I love building systems that not only solve problems but also provide a seamless user experience.
                            </p>
                        </div>
                        {/* Decorative / Map / Image Side */}
                        <div className="relative w-full md:w-72 aspect-[4/5] md:aspect-square rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Postcard
                                frontImage="/images/map_surabaya.png"
                                backImage="/images/workspace_cyberpunk.png"
                                alt="Surabaya Location"
                            />
                        </div>
                    </div>
                </div>

                {/* What I'm up to now */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">What I&apos;m up to now</h2>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-8xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Current Focus</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 text-lg text-neutral-600 dark:text-neutral-400 items-start">
                                    <span className="flex-shrink-0 mt-1">🌍</span>
                                    <span>
                                        Building <a href="https://clicky.id/geotera" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">GeoTera</a>, a geospatial data analytic platform for environmental monitoring.
                                    </span>
                                </li>
                                <li className="flex gap-4 text-lg text-neutral-600 dark:text-neutral-400 items-start">
                                    <span className="flex-shrink-0 mt-1">💼</span>
                                    <span>
                                        Conducting <strong>Independent Research</strong>, exploring the frontiers of Agentic AI and Large Language Models.
                                    </span>
                                </li>
                                <li className="flex gap-4 text-lg text-neutral-600 dark:text-neutral-400 items-start">
                                    <span className="flex-shrink-0 mt-1">🎓</span>
                                    <span>
                                        Mentoring the <strong>IoT Community SPARK</strong> at HIMAPROSIF UINSA, guiding students in embedded systems and IoT projects.
                                    </span>
                                </li>
                                <li className="flex gap-4 text-lg text-neutral-600 dark:text-neutral-400 items-start">
                                    <span className="flex-shrink-0 mt-1">🛠️</span>
                                    <span>
                                        Always <strong>tinkering</strong> with new things and exploring the latest emerging technologies.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tech Stack / Arsenal */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        {[
                            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkInv: true }, // Invert in dark mode if needed (Next.js logo is black)
                            { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                            { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                            { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', darkInv: true },
                            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                        ].map((tech) => (
                            <div key={tech.name} className="group relative flex flex-col items-center gap-2 p-4 pt-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300 w-24 h-24 justify-center">
                                <div className={`relative w-10 h-10 transition-transform duration-300 group-hover:scale-110 ${tech.darkInv ? 'dark:invert' : ''}`}>
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 absolute bottom-2">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career & Organization Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Career & Education */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                            Career & Education
                        </h2>
                        <Timeline items={careerItems} />
                    </div>

                    {/* Right Column: Organization & Volunteer */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                            Organization & Volunteer
                        </h2>
                        <Timeline items={volunteerItems} />
                    </div>
                </div>


                {/* Featured & Highlights */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Featured & Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* LISK X Spark UINSA */}
                        <Link
                            href="https://uinsa.ac.id/lisk-irl-surabaya-series-di-uinsa-kolaborasi-pentahelix-untuk-sdm-digital-yang-mendunia"
                            target="_blank"
                            className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ArrowUpRight size={40} />
                            </div>
                            <div className="flex flex-col h-full justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                        <Users size={18} />
                                        <span className="text-xs font-bold uppercase tracking-wider">Collaboration</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        LISK X Spark UINSA
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                        Lisk IRL Surabaya Series: Kolaborasi Pentahelix untuk SDM Digital yang Mendunia.
                                    </p>
                                </div>
                                <span className="text-xs font-mono text-neutral-500">uinsa.ac.id</span>
                            </div>
                        </Link>

                        {/* Python Surabaya Meetup */}
                        <Link
                            href="https://www.instagram.com/p/DQ-5ujsjxXa/"
                            target="_blank"
                            className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ArrowUpRight size={40} />
                            </div>
                            <div className="flex flex-col h-full justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                        <Users size={18} />
                                        <span className="text-xs font-bold uppercase tracking-wider">Community</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        Python Surabaya Meetup
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                        Sharing session and networking with the Python Surabaya community.
                                    </p>
                                </div>
                                <span className="text-xs font-mono text-neutral-500">instagram.com</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </Container>
    );
}
