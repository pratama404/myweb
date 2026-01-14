"use client";

import Container from '@/components/layout/Container';
import WideProjectCard from '@/components/cards/WideProjectCard';
import { PROJECTS } from '@/data/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    return (
        <Container>
            <div className="py-12 md:py-20 space-y-12 md:space-y-20">
                <div className="space-y-6 max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Selected Work
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        A collection of projects showcasing my journey in software engineering and data science.
                        Solving real problems with clean code and intelligent models.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {PROJECTS.map((project, index) => (
                        <WideProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
