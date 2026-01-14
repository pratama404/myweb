
export const GRAPH_NODES = [
    // Core Roles
    { id: 'Data Scientist', group: 1, val: 20 },
    { id: 'Software Engineer', group: 1, val: 20 },

    // Languages
    { id: 'Python', group: 2, val: 15 },
    { id: 'TypeScript', group: 2, val: 15 },
    { id: 'SQL', group: 2, val: 10 },
    { id: 'JavaScript', group: 2, val: 10 },

    // Data Science Stack
    { id: 'TensorFlow', group: 3, val: 12 },
    { id: 'PyTorch', group: 3, val: 12 },
    { id: 'Scikit-learn', group: 3, val: 10 },
    { id: 'Pandas', group: 3, val: 8 },
    { id: 'LLM', group: 3, val: 15 },
    { id: 'RAG', group: 3, val: 12 },

    // Web Stack
    { id: 'Next.js', group: 4, val: 12 },
    { id: 'React', group: 4, val: 12 },
    { id: 'Tailwind CSS', group: 4, val: 8 },
    { id: 'Node.js', group: 4, val: 10 },
    { id: 'FastAPI', group: 4, val: 10 },

    // Tools/DevOps
    { id: 'Docker', group: 5, val: 10 },
    { id: 'AWS', group: 5, val: 10 },
    { id: 'Git', group: 5, val: 8 },
    { id: 'PostgreSQL', group: 5, val: 8 },
    { id: 'Figma', group: 6, val: 8 },
    { id: 'Vercel', group: 5, val: 8 },
];

export const GRAPH_LINKS = [
    // Core connections
    { source: 'Data Scientist', target: 'Python' },
    { source: 'Data Scientist', target: 'SQL' },
    { source: 'Software Engineer', target: 'TypeScript' },
    { source: 'Software Engineer', target: 'JavaScript' },
    { source: 'Software Engineer', target: 'Python' },

    // Python ecosystem
    { source: 'Python', target: 'TensorFlow' },
    { source: 'Python', target: 'PyTorch' },
    { source: 'Python', target: 'Scikit-learn' },
    { source: 'Python', target: 'Pandas' },
    { source: 'Python', target: 'FastAPI' },
    { source: 'Python', target: 'LLM' },

    // AI/LLM
    { source: 'LLM', target: 'RAG' },
    { source: 'LLM', target: 'TensorFlow' },
    { source: 'LLM', target: 'PyTorch' },

    // Web Ecosystem
    { source: 'TypeScript', target: 'React' },
    { source: 'TypeScript', target: 'Next.js' },
    { source: 'JavaScript', target: 'React' },
    { source: 'React', target: 'Next.js' },
    { source: 'Next.js', target: 'Tailwind CSS' },
    { source: 'Next.js', target: 'Node.js' },

    // Full Stack Connections
    { source: 'FastAPI', target: 'Next.js' }, // Backend for Frontend
    { source: 'PostgreSQL', target: 'SQL' },
    { source: 'PostgreSQL', target: 'FastAPI' },
    { source: 'PostgreSQL', target: 'Next.js' },

    // DevOps
    { source: 'Software Engineer', target: 'Docker' },
    { source: 'Software Engineer', target: 'AWS' },
    { source: 'Software Engineer', target: 'Git' },
    { source: 'Data Scientist', target: 'Git' }, // Modern DS uses Git
    { source: 'Next.js', target: 'Vercel' }, // Implicit
];
