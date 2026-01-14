
export type WritingSource = 'medium' | 'blogger' | 'local';

export interface WritingPost {
    id: string;
    title: string;
    description: string;
    date: string;
    source: WritingSource;
    url: string;
    tags: string[];
}

export const WRITING_POSTS: WritingPost[] = [
    // Medium - Technical
    {
        id: 'm1',
        title: 'Optimizing Next.js 15 Server Components for High Traffic',
        description: 'A deep dive into caching strategies and streaming SSR patterns used in enterprise applications.',
        date: 'Oct 12, 2025',
        source: 'medium',
        url: 'https://medium.com/@agengputrapratama',
        tags: ['Next.js', 'React', 'Performance']
    },
    {
        id: 'm2',
        title: 'Building Scalable IoT Pipelines with MQTT and Python',
        description: 'Architecture patterns for handling millions of sensor data points in real-time.',
        date: 'Sep 08, 2025',
        source: 'medium',
        url: 'https://medium.com/@agengputrapratama',
        tags: ['IoT', 'Python', 'System Design']
    },
    {
        id: 'm3',
        title: 'The State of AI Agents in 2025',
        description: 'Exploring the shift from chat-based LLMs to autonomous agentic workflows.',
        date: 'Aug 21, 2025',
        source: 'medium',
        url: 'https://medium.com/@agengputrapratama',
        tags: ['AI', 'LLM', 'Agents']
    },

    // Blogger - Journal / Random
    {
        id: 'b1',
        title: 'Coffee, Rain, and Code: A Weekend in Bandung',
        description: 'Reflections on creativity and finding flow state away from the office monitors.',
        date: 'Jan 10, 2026',
        source: 'blogger',
        url: 'https://agengputrapratama.blogspot.com/',
        tags: ['Life', 'Journal']
    },
    {
        id: 'b2',
        title: 'Why I Still Sketch UIs on Paper',
        description: 'In an era of AI generation, the tactile feel of pen on paper brings the best ideas.',
        date: 'Dec 15, 2025',
        source: 'blogger',
        url: 'https://agengputrapratama.blogspot.com/',
        tags: ['Design', 'Process']
    },
    {
        id: 'b3',
        title: '2025 Year in Review: Growth and Gratitude',
        description: 'Looking back at the milestones achieved and the lessons learned the hard way.',
        date: 'Dec 31, 2025',
        source: 'blogger',
        url: 'https://agengputrapratama.blogspot.com/',
        tags: ['Reflection', 'Year in Review']
    }
];
