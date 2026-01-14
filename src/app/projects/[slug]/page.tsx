
import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import { PROJECTS } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, Globe } from 'lucide-react';

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <Container>
            <div className="py-12 md:py-20 space-y-12">

                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="space-y-6 md:space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-widest uppercase">
                            <span>{project.techStack[0]}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                            {project.title}
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                            {project.shortDescription}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                        {project.demoUrl && (
                            <Link
                                href={project.demoUrl}
                                target="_blank"
                                className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                <Globe size={18} />
                                Live Demo
                            </Link>
                        )}
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            className="px-6 py-3 rounded-full border border-neutral-200 dark:border-white/20 hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            <Github size={18} />
                            Source Code
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Content (Left) */}
                    <div className="col-span-1 md:col-span-8 space-y-16 order-1">

                        <section id="explanation" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Short Explanation</h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                        </section>

                        <section id="problem" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">The Problem</h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {project.problem}
                            </p>
                        </section>

                        <section id="goal" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">The Goal</h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {project.goals}
                            </p>
                        </section>

                        {/* Features List */}
                        {project.features && (
                            <section id="features" className="space-y-6 scroll-mt-24">
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Key Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                                            <h4 className="font-bold text-neutral-900 dark:text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section id="lessons" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Lessons Learned</h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {project.lessons}
                            </p>
                        </section>
                    </div>

                    {/* Right Sidebar (TOC, Meta & Attributions) */}
                    <div className="col-span-1 md:col-span-4 space-y-8 h-fit md:sticky md:top-24 order-2">

                        {/* Table of Contents */}
                        <div className="hidden md:block">
                            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                                <h3 className="text-xs font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-4">On This Page</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#explanation" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block">
                                            Short Explanation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#problem" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block">
                                            The Problem
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#goal" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block">
                                            The Goal
                                        </a>
                                    </li>
                                    {project.features && (
                                        <li>
                                            <a href="#features" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block">
                                                Key Features
                                            </a>
                                        </li>
                                    )}
                                    <li>
                                        <a href="#lessons" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block">
                                            Lessons Learned
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Spotlight Box */}
                        {project.spotlight && (
                            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50">
                                <h3 className="text-sm font-bold text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span className="text-xl">💡</span> Spotlight
                                </h3>
                                <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                                    {project.spotlight}
                                </p>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-4">Tech Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Team / Attribution */}
                        {project.team && (
                            <div>
                                <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-4">Team</h3>
                                <ul className="space-y-3">
                                    {project.team.map((member, idx) => (
                                        <li key={idx} className="flex flex-col">
                                            <span className="text-sm font-bold text-neutral-900 dark:text-white">{member.name}</span>
                                            <span className="text-xs text-neutral-500 dark:text-neutral-400">{member.role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}
