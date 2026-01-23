
import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import { PROJECTS } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { FaReact, FaDocker, FaPython, FaNodeJs, FaTelegram, FaMicrochip, FaRobot } from 'react-icons/fa6';
import { SiNextdotjs, SiFastapi, SiMqtt, SiPytorch, SiMongodb, SiTailwindcss, SiVite, SiTypescript, SiSupabase, SiFramer, SiWhatsapp, SiGrafana, SiMlflow, SiGithubactions } from 'react-icons/si';

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

// Tech Icon Helper
const getTechIcon = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('next.js')) return <SiNextdotjs size={14} className="text-black dark:text-white" />;
    if (lower.includes('react')) return <FaReact size={14} className="text-blue-400" />;
    if (lower.includes('vite')) return <SiVite size={14} className="text-yellow-400" />;
    if (lower.includes('fastapi')) return <SiFastapi size={14} className="text-teal-500" />;
    if (lower.includes('mqtt')) return <SiMqtt size={14} className="text-red-500" />;
    if (lower.includes('pytorch')) return <SiPytorch size={14} className="text-orange-500" />;
    if (lower.includes('docker')) return <FaDocker size={14} className="text-blue-500" />;
    if (lower.includes('mongo')) return <SiMongodb size={14} className="text-green-500" />;
    if (lower.includes('tailwind')) return <SiTailwindcss size={14} className="text-cyan-400" />;
    if (lower.includes('supabase')) return <SiSupabase size={14} className="text-emerald-500" />;
    if (lower.includes('framer')) return <SiFramer size={14} className="text-pink-500" />;
    if (lower.includes('whatsapp')) return <SiWhatsapp size={14} className="text-green-500" />;
    if (lower.includes('telegram')) return <FaTelegram size={14} className="text-blue-400" />;
    if (lower.includes('esp32') || lower.includes('iot')) return <FaMicrochip size={14} className="text-neutral-500" />;
    if (lower.includes('gemini') || lower.includes('ai') || lower.includes('llm')) return <FaRobot size={14} className="text-indigo-500" />;
    if (lower.includes('node')) return <FaNodeJs size={14} className="text-green-600" />;

    // New Icons
    if (lower.includes('grafana')) return <SiGrafana size={14} className="text-orange-500" />;
    if (lower.includes('mlflow')) return <SiMlflow size={14} className="text-blue-600" />;
    if (lower.includes('github actions') || lower.includes('ci/cd')) return <SiGithubactions size={14} className="text-blue-500" />;
    if (lower.includes('dagshub')) return <Github size={14} className="text-neutral-700 dark:text-neutral-300" />; // Fallback to Github icon for DagsHub (Git-based)

    // Default fallback (no icon, just text will be shown)
    return null;
};

// Helper: Custom Slugify to match rehype-slug roughly
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')  // Remove all non-word chars
        .replace(/--+/g, '-');    // Replace multiple - with single -
};

// Helper: Extract Headers
const extractHeaders = (markdown: string) => {
    const lines = markdown.split('\n');
    const headers: { title: string; slug: string; level: number }[] = [];

    lines.forEach(line => {
        // Match ### Header
        const match = line.match(/^(#{3})\s+(.+)$/);
        if (match) {
            headers.push({
                title: match[2].trim(),
                slug: slugify(match[2].trim()),
                level: match[1].length
            });
        }
    });
    return headers;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Helper to extract YouTube ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const storyHeaders = extractHeaders(project.fullDescription);


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
                            <span>{project.category || project.techStack[0]}</span>
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
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 group">
                    {/* Gradient overlay for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-60" />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                {/* Media Gallery (Videos) */}
                {project.media && project.media.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.media.map((media, idx) => {
                            if (media.outlet === 'YouTube') {
                                const videoId = getYouTubeId(media.url);
                                if (videoId) {
                                    return (
                                        <div key={idx} className="aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-lg">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${videoId}`}
                                                title={media.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        </div>
                                    );
                                }
                            }
                            // Fallback for other media types (like Twitter) - just a stylized link card
                            return (
                                <Link
                                    key={idx}
                                    href={media.url}
                                    target="_blank"
                                    className="aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-lg flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
                                >
                                    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">📺</span>
                                    <span className="font-bold text-neutral-900 dark:text-white">{media.title}</span>
                                    <span className="text-sm text-neutral-500">View on {media.outlet}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Image Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.gallery.map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 group cursor-pointer">
                                <Image
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Content (Left) */}
                    <div className="col-span-1 md:col-span-8 space-y-16 order-1">

                        <section id="explanation" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">The Story</h3>
                            {/* ReactMarkdown for Rich Text */}
                            <div className="prose dark:prose-invert prose-neutral max-w-none prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-img:rounded-xl">
                                <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                                    {project.fullDescription}
                                </ReactMarkdown>
                            </div>
                        </section>

                        <section id="problem" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">The Problem</h3>
                            <div className="prose dark:prose-invert prose-neutral max-w-none">
                                <ReactMarkdown>{project.problem}</ReactMarkdown>
                            </div>
                        </section>

                        <section id="goal" className="space-y-4 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">The Goal</h3>
                            <div className="prose dark:prose-invert prose-neutral max-w-none">
                                <ReactMarkdown>{project.goals}</ReactMarkdown>
                            </div>
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
                            <div className="prose dark:prose-invert prose-neutral max-w-none">
                                <ReactMarkdown>{project.lessons}</ReactMarkdown>
                            </div>
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
                                            The Story
                                        </a>
                                        {/* Render Sub-headers from Story */}
                                        {storyHeaders.length > 0 && (
                                            <ul className="pl-4 mt-2 space-y-2 border-l border-neutral-200 dark:border-neutral-800">
                                                {storyHeaders.map((header, idx) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={`#${header.slug}`}
                                                            className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors block py-0.5"
                                                        >
                                                            {header.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
                                    <span key={tech} className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-2 border border-neutral-200 dark:border-neutral-700">
                                        {/* Icon */}
                                        {getTechIcon(tech)}
                                        {/* Text */}
                                        <span>{tech}</span>
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

