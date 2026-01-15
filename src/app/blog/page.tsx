import Container from '@/components/layout/Container';
import { WRITING_POSTS, WritingPost } from '@/data/writing';
import { getBlogPosts } from '@/lib/mdx';
import BlogFeed from '@/components/blog/BlogFeed';

export const metadata = {
    title: 'Writing Hub | Ageng Putra Pratama',
    description: 'Technical deep dives, thoughts on AI, and personal journal.',
};

export default function BlogPage() {
    // 1. Fetch Local Posts
    const localPostsRaw = getBlogPosts();

    // 2. Transform to WritingPost format
    const localPosts: WritingPost[] = localPostsRaw.map((post) => ({
        id: post.slug,
        title: post.metadata.title,
        description: post.metadata.summary,
        date: formatDate(post.metadata.publishedAt),
        source: 'local',
        slug: post.slug,
        tags: ['Article'], // Default tag if not in metadata, or parse from metadata if added later
        readTime: post.metadata.readTime,
        category: post.metadata.category || 'article',
        url: `/blog/${post.slug}`
    }));

    // 3. Merge with External Posts and Sort by Date
    const allPosts = [...localPosts, ...WRITING_POSTS].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <Container>
            <div className="py-12 md:py-20 space-y-12">

                {/* Header */}
                <div className="space-y-6 max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Writing Hub
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        A collection of thoughts, technical deep dives, and random musings.
                        I write about code on <a href="https://medium.com/@agengputrapratama" target="_blank" className="font-bold text-neutral-900 dark:text-white hover:underline">Medium</a> and life on <a href="https://agengputrapratama.blogspot.com/" target="_blank" className="font-bold text-neutral-900 dark:text-white hover:underline">Blogger</a>.
                    </p>
                </div>

                {/* Client-Side Feed (Filter/Search) */}
                <BlogFeed initialPosts={allPosts} />
            </div>
        </Container>
    );
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
