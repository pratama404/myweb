import { getBlogPosts } from '@/lib/mdx';
import Container from '@/components/layout/Container';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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

    return (
        <Container className="mt-8">
            <Link href="/blog" className="flex items-center text-sm text-neutral-400 hover:text-white transition-colors mb-8 w-fit gap-1">
                <ArrowLeft size={16} /> Back to Blog
            </Link>
            <article className="prose prose-invert prose-neutral max-w-none">
                <h1 className="title font-bold text-3xl tracking-tighter max-w-[650px] mb-2">
                    {post.metadata.title}
                </h1>
                <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px] text-neutral-500">
                    <p>{post.metadata.publishedAt}</p>
                    <p>•</p>
                    <p>{post.metadata.readTime}</p>
                </div>
                <MDXRemote
                    source={post.content}
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
        </Container>
    );
}
