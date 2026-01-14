import BentoGrid from '@/components/bento/BentoGrid';
import BentoItem from '@/components/bento/BentoItem';
import ProfileCard from '@/components/cards/ProfileCard';
import ProjectCard from '@/components/cards/ProjectCard';
import LatestInsightCard from '@/components/cards/LatestInsightCard';
import Container from '@/components/layout/Container';
import TechStackCard from '@/components/cards/TechStackCard';
import StatsPreviewCard from '@/components/cards/StatsPreviewCard';
import LocationCard from '@/components/cards/LocationCard';
import CapabilitiesCard from '@/components/cards/CapabilitiesCard';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FuturePlansSection from '@/components/sections/FuturePlansSection';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import BentoMotionWrapper from '@/components/bento/BentoMotionWrapper';

export default function Home() {
  return (
    <Container>
      <section className="py-12 space-y-16">
        {/* HERO SECTION */}
        <div className="space-y-4">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-75 -inset-px bg-gradient-to-r from-blue-600 to-black rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <div className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-white dark:bg-neutral-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border-2 border-transparent bg-clip-padding">
              <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">
                ✨ Available for new opportunities
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-neutral-900 dark:text-white">
            Crafting intelligent <br className="hidden md:block" />
            <span className="text-emerald-500">interfaces</span> & <span className="text-blue-500">models</span>.
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-[650px] leading-relaxed">
            Bridging the gap between complex machine learning algorithms and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-neutral-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              About Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://scholar.google.com/citations?hl=id&user=sMvphWgAAAAJ"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-neutral-900 transition-all duration-200 bg-transparent font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              Our Research
            </Link>

            <Link
              href="https://drive.google.com/file/d/1cicMY60H48R8Y6tacndW1EyZ_Ll58xGz/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 text-neutral-900 transition-all duration-200 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
              aria-label="View Resume"
            >
              <FileText className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* BENTO GRID SECTION */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Curated Work
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 hidden sm:block">
              A glimpse into my digital garden.
            </p>
          </div>

          <BentoGrid>
            {/* Profile - Full Width */}
            <BentoMotionWrapper
              className="col-span-1 md:col-span-3 md:row-span-2 h-full"
            >
              <ProfileCard />
            </BentoMotionWrapper>

            {/* Row 2: Latest Insight & Project 1 & Project 2 */}
            <BentoItem className="col-span-1 md:col-span-1">
              <LatestInsightCard />
            </BentoItem>

            <BentoItem className="col-span-1 md:col-span-1">
              <ProjectCard
                title="LLM Ware"
                description="Contributing to enterprise-grade LLM-based application patterns."
                tags={['Python', 'LLM', 'AI']}
                href="https://github.com/pratama404/llmware"
                image="/images/project-llm.png"
              />
            </BentoItem>

            <BentoItem className="col-span-1 md:col-span-1">
              <ProjectCard
                title="Taipy"
                description="Frontend-end independent, Python-based application builder."
                tags={['Python', 'Data Viz']}
                href="https://github.com/pratama404/taipy"
                image="/images/project-taipy.png"
              />
            </BentoItem>

            {/* Row 3: Location, Capabilities, Stats */}
            <BentoItem className="col-span-1 md:col-span-1">
              <LocationCard />
            </BentoItem>

            <BentoItem className="col-span-1 md:col-span-1">
              <CapabilitiesCard />
            </BentoItem>

            <BentoItem className="col-span-1 md:col-span-1">
              <StatsPreviewCard />
            </BentoItem>

            <BentoItem className="col-span-1 md:col-span-1">
              <CapabilitiesCard />
            </BentoItem>

            {/* Row 4: Blog Link - Full Width */}
            <BentoItem className="col-span-1 md:col-span-3 bg-neutral-100 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 border-none group relative overflow-hidden">
              <Link href="/blog" className="absolute inset-0 z-10" />
              <div className="relative z-0 h-full flex flex-col justify-center p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Writing</span>
                  <div className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">Digital Garden</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-sm leading-relaxed">
                  Explore my thoughts on software engineering, data science pipelines, and the future of tech.
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm font-medium text-neutral-900 dark:text-white group-hover:gap-4 transition-all">
                  Read Articles <ArrowRight size={16} />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 rotate-12 translate-x-1/4 translate-y-1/4 pointer-events-none">
                {/* Decorative background element */}
                <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="white" />
                </svg>
              </div>
            </BentoItem>
          </BentoGrid>
        </div>

        <FuturePlansSection />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Trusted by Mentors & Partners</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md text-right">
              Voices from those I've had the privilege to build with.
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </section>
    </Container >
  );
}
