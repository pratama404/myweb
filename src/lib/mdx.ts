import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import matter from 'gray-matter';

export interface Metadata {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    readTime?: string;
    spotlight?: string;
    category?: 'engineering' | 'journal' | 'article';
    techStack?: string[];
    team?: {
        name: string;
        role: string;
    };
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(rawContent);

    // Calculate reading time
    const readTime = readingTime(content).text;

    return {
        metadata: { ...data, readTime } as Metadata,
        content
    };
}

export function getBlogPosts() {
    const dir = path.join(process.cwd(), 'src', 'content');

    if (!fs.existsSync(dir)) {
        return [];
    }

    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    }).sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        return 1;
    });
}
