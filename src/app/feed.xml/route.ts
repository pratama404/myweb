import { getBlogPosts } from '@/lib/mdx';

export async function GET() {
    const posts = getBlogPosts();
    const siteUrl = 'https://ageng.dev';

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ageng Putra Pratama - Blog</title>
    <link>${siteUrl}</link>
    <description>Thoughts on Software Engineering, Design, and IoT.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${posts
            .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
            .map((post) => {
                return `
      <item>
        <title><![CDATA[${post.metadata.title}]]></title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
        <description><![CDATA[${post.metadata.summary}]]></description>
        <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      </item>`;
            })
            .join('')}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
