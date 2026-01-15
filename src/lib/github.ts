import { unstable_cache } from 'next/cache';

const GITHUB_USERNAME = 'pratama404';
const BASE_URL = 'https://api.github.com';

// Types
interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    languages_url: string;
    topics: string[]; // Topics are great for linking nodes!
    fork: boolean;
}

export interface GraphNode {
    id: string;
    group: number; // 1 = User/Root, 2 = Repo, 3 = Language/Topic
    val: number; // Size
    color?: string;
    x?: number;
    y?: number;
}

export interface GraphLink {
    source: string;
    target: string;
}

export interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

export async function getGithubGraphData(): Promise<GraphData> {
    // 1. Fetch Repos (Public, Non-Fork preferred, or all)
    // Cache for 1 hour to prevent Rate Limit hits
    const reposRes = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`, {
        next: { revalidate: 3600 }
    });

    if (!reposRes.ok) {
        console.error("GitHub API Limit or Error", reposRes.statusText);
        return { nodes: [], links: [] };
    }

    const repos: Repo[] = await reposRes.json();

    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];
    const languageSet = new Set<string>();
    const topicSet = new Set<string>();

    // Root Node (The User)
    const rootId = GITHUB_USERNAME;
    nodes.push({ id: rootId, group: 1, val: 20, color: "#ffffff" });

    // Process Repos
    for (const repo of repos) {
        if (repo.fork) continue; // Skip forks to show original work

        const repoNodeId = repo.name;
        nodes.push({
            id: repoNodeId,
            group: 2,
            val: 10 + (repo.stargazers_count / 2), // Size based on stars
            color: "#10B981" // Emerald
        });

        // Link User -> Repo
        links.push({ source: rootId, target: repoNodeId });

        // Link Repo -> Primary Language
        if (repo.language) {
            languageSet.add(repo.language);
            links.push({ source: repoNodeId, target: repo.language });
        }

        // Link Repo -> Topics
        if (repo.topics) {
            const IGNORED_TOPICS = ['hacktoberfest', 'assignment', 'homework', 'learning', 'test', 'portfolio'];
            repo.topics.forEach(topic => {
                if (!IGNORED_TOPICS.includes(topic)) {
                    topicSet.add(topic);
                    links.push({ source: repoNodeId, target: topic });
                }
            });
        }
    }

    // Add Language Nodes
    languageSet.forEach(lang => {
        nodes.push({
            id: lang,
            group: 3,
            val: 8,
            color: "#3B82F6" // Blue
        });
    });

    // Add Topic Nodes
    topicSet.forEach(topic => {
        // Dedup if topic same as language
        if (!languageSet.has(topic)) {
            nodes.push({
                id: topic,
                group: 4,
                val: 5,
                color: "#F59E0B" // Amber
            });
        }
    });

    return { nodes, links };
}
