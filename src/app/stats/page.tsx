import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { GitCommit, Code, Coffee, Zap } from 'lucide-react';
import { Metadata } from 'next';
import CodingActivity from '@/components/charts/CodingActivity';
import GitHubCalendar from '@/components/charts/GitHubCalendar';
import { getGithubGraphData } from '@/lib/github';
import GitHubKnowledgeGraph from '@/components/charts/GitHubKnowledgeGraph';

export const metadata: Metadata = {
    title: 'Stats | Ageng Putra Pratama',
    description: 'Dashboard of personal metrics and coding activity.',
};

const METRICS = [
    { label: "GitHub Commits (2025)", value: "1,248", icon: GitCommit, color: "text-emerald-500 dark:text-emerald-400" },
    { label: "Lines of Code", value: "350k+", icon: Code, color: "text-blue-500 dark:text-blue-400" },
    { label: "Coffees Consumed", value: "∞", icon: Coffee, color: "text-amber-600 dark:text-amber-500" },
    { label: "Ship Speed", value: "Fast", icon: Zap, color: "text-yellow-500 dark:text-yellow-400" },
];

export default async function StatsPage() {
    const graphData = await getGithubGraphData();

    return (
        <Container>
            <div className="flex flex-col gap-8 py-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">Dashboard</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                        Real-time metrics and project relationships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {METRICS.map((metric) => (
                        <Card key={metric.label} className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <metric.icon className={metric.color} size={24} />
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neutral-900 dark:text-white">{metric.value}</div>
                                <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1">{metric.label}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* GitHub Calendar */}
                <div className="space-y-6">
                    <GitHubCalendar />
                </div>

                {/* Coding Analytics (Charts) */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Coding Activity</h2>
                    <CodingActivity />
                </div>

                {/* Knowledge Graph */}
                <div className="space-y-6">
                    <div className="flex items-end justify-between">
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Project Galaxy</h2>
                        <p className="text-sm text-neutral-500 hidden sm:block">
                            Visualizing repositories and technologies from GitHub.
                        </p>
                    </div>
                    <GitHubKnowledgeGraph data={graphData} />
                </div>
            </div>
        </Container>
    );
}
