
export type WritingSource = 'medium' | 'blogger' | 'local';

export interface WritingPost {
    id: string;
    title: string;
    description: string;
    date: string;
    source: WritingSource;
    url?: string; // Optional for local posts
    slug?: string; // Required for local posts
    tags: string[];
    readTime?: string;
    category?: 'engineering' | 'journal' | 'article';
}

export const WRITING_POSTS: WritingPost[] = [];
