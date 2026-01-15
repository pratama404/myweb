import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ageng.dev'; // Replace with your actual domain

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/projects',
        '/blog',
        '/guestbook',
        '/uses',
        '/stats',
        '/certificates',
        '/products',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Blog Routes
    const posts = getBlogPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 3. Combine
    return [...staticRoutes, ...blogRoutes];
}
