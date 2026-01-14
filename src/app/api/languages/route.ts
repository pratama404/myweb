import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch('https://api.github.com/users/pratama404/repos?per_page=100&sort=updated', {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error('Failed to fetch from GitHub');
        }

        const repos = await res.json();

        const languageCounts: Record<string, number> = {};
        let totalRepos = 0;

        // Aggregate primary languages
        repos.forEach((repo: any) => {
            if (repo.language && !repo.fork) { // Exclude forks if desired, or keep them. Let's keep original logic simple.
                languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
                totalRepos++;
            }
        });

        // Convert to array format for Recharts
        // Define exact colors for common languages to match the theme
        const languageColors: Record<string, string> = {
            'Python': '#3776AB',
            'TypeScript': '#3178C6',
            'JavaScript': '#F7DF1E',
            'HTML': '#E34F26',
            'CSS': '#1572B6',
            'Jupyter Notebook': '#DA5B0B',
            'Shell': '#89E051',
            'Java': '#007396',
            'C++': '#00599C',
            'Go': '#00ADD8',
            'Rust': '#DEA584',
            'PHP': '#777BB4',
            'Dart': '#0175C2',
            'Swift': '#F05138',
            'Kotlin': '#7F52FF',
        };

        const fallbackColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

        const data = Object.entries(languageCounts)
            .map(([name, count], index) => ({
                name,
                value: count, // Or percentage: Math.round((count / totalRepos) * 100)
                color: languageColors[name] || fallbackColors[index % fallbackColors.length]
            }))
            .sort((a, b) => b.value - a.value) // Sort by most used
            .slice(0, 6); // Top 6 languages

        return NextResponse.json(data);
    } catch (error) {
        console.error('GitHub API Error:', error);
        return NextResponse.json(
            [
                { name: 'Python', value: 45, color: '#3776AB' },
                { name: 'TypeScript', value: 30, color: '#3178C6' },
                { name: 'Jupyter', value: 15, color: '#F37626' },
                { name: 'SQL', value: 10, color: '#003B57' },
            ],
            { status: 200 } // Return mock data on error so UI doesn't break, or could handle errors in UI
        );
    }
}
