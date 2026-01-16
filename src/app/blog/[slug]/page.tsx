import { getBlogPosts } from '@/lib/mdx';
import Container from '@/components/layout/Container';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Sidebar from '@/components/blog/Sidebar';
import { Callout } from '@/components/mdx/Callout';
import { MDXImage } from '@/components/mdx/MDXImage';
import { Features, Feature } from '@/components/mdx/Features';
import Mermaid from '@/components/mdx/Mermaid';
import ProgressBar from '@/components/blog/ProgressBar';
import WritingCard from '@/components/cards/WritingCard';
import { WritingPost } from '@/data/writing';

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
        return;
    }
    return {
        title: post.metadata.title,
        description: post.metadata.summary,
    };
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    const options = {
        theme: 'github-dark',
        keepBackground: true,
    };

    const components = {
        Callout,
        MDXImage,
        Features,
        Feature,
        Mermaid,
        img: (props: any) => (
            <MDXImage
                src={props.src}
                alt={props.alt || "Blog Image"}
                caption={props.title}
            />
        ),
        // Explicit Typography Overrides
        h1: (props: any) => (
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-8 mt-0 leading-tight" {...props} />
        ),
        h2: (props: any) => (
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-16 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800" {...props} />
        ),
        h3: (props: any) => (
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-10 mb-4" {...props} />
        ),
        p: (props: any) => (
            <p className="text-base md:text-lg leading-loose text-neutral-600 dark:text-neutral-300 mb-6" {...props} />
        ),
        ul: (props: any) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-base md:text-lg text-neutral-600 dark:text-neutral-300" {...props} />
        ),
        ol: (props: any) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-base md:text-lg text-neutral-600 dark:text-neutral-300" {...props} />
        ),
        li: (props: any) => (
            <li className="leading-relaxed" {...props} />
        ),
        blockquote: (props: any) => (
            <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 my-8 italic text-xl text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-lg" {...props} />
        ),
        a: (props: any) => (
            <a className="text-emerald-600 dark:text-emerald-400 font-medium underline decoration-emerald-500/30 hover:decoration-emerald-500 transition-all decoration-2 underline-offset-2" {...props} />
        ),
    };

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.metadata.title,
        datePublished: post.metadata.publishedAt,
        description: post.metadata.summary,
        url: `https://ageng.dev/blog/${post.slug}`,
        author: {
            '@type': 'Person',
            name: 'Ageng Putra Pratama',
            url: 'https://ageng.dev',
        },
    };

    return (
        <Container className="mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProgressBar />
            <Link href="/blog" className="flex items-center text-sm text-neutral-400 hover:text-white transition-colors mb-12 w-fit gap-1">
                <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                {/* Main Content (Left - 8 cols) */}
                <article className="col-span-1 lg:col-span-8 max-w-none">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4 leading-tight">
                        {post.metadata.title}
                    </h1>
                    <div className="flex items-center gap-2 mb-10 text-sm text-neutral-500 font-mono">
                        <p>{post.metadata.publishedAt}</p>
                        <span>•</span>
                        <p>{post.metadata.readTime}</p>
                    </div>

                    <MDXRemote
                        source={post.content}
                        components={components}
                        options={{
                            mdxOptions: {
                                rehypePlugins: [
                                    [rehypePrettyCode, options],
                                    rehypeSlug,
                                    [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                                ]
                            }
                        }}
                    />
                </article>

                <aside className="col-span-1 lg:col-span-4 h-fit sticky top-24">
                    <Sidebar meta={post.metadata} content={post.content} />
                </aside>
            </div>

            {/* Related Posts Section */}
            <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-12">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Read Next</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getBlogPosts()
                        .filter((p) => p.slug !== post.slug && p.metadata.category === post.metadata.category)
                        .slice(0, 3)
                        .map((p, i) => {
                            const relatedPost: WritingPost = {
                                id: p.slug,
                                title: p.metadata.title,
                                description: p.metadata.summary,
                                date: p.metadata.publishedAt,
                                source: 'local',
                                slug: p.slug,
                                tags: [],
                                readTime: p.metadata.readTime,
                                category: p.metadata.category || 'article',
                                url: `/blog/${p.slug}`
                            };
                            return <WritingCard key={p.slug} post={relatedPost} index={i} />;
                        })}
                </div>
            </div>
        </Container>
    );
}
