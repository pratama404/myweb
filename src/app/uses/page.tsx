import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';

export const metadata = {
    title: 'Uses',
    description: 'Software and hardware I use daily.',
};


interface UsesItem {
    name: string;
    description: string;
    tag: string;
    link?: string;
    badge?: string;
}

const USES_DATA: { category: string; items: UsesItem[] }[] = [
    {
        category: "Workstation",
        items: [
            {
                name: "Lenovo IdeaPad Gaming 3",
                description: "My daily driver. Powered by Ryzen 3, it handles everything from coding to data processing.",
                tag: "Laptop",
                link: "https://www.lenovo.com/id/in/laptops/ideapad/ideapad-gaming-laptops/IdeaPad-Gaming-3-Gen-6-15-AMD/p/WMD00000479",
            },
            {
                name: "Logitech G304 Lightspeed",
                description: "Wireless, precise, and zero latency. The white colorway matches my setup perfectly.",
                tag: "Mouse",
                link: "https://www.logitechg.com/en-us/products/gaming-mice/g304-lightspeed-wireless-gaming-mouse.html"
            },
            {
                name: "Keychron K2 V2",
                description: "75% Wireless Mechanical Keyboard. Brown switches for the tactile feel without the noise.",
                tag: "Keyboard",
                link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard"
            }
        ]
    },
    {
        category: "Development",
        items: [
            {
                name: "VS Code",
                description: "The editor of choice. Heavily customized with 'One Dark Pro' theme and 'Fira Code' font.",
                tag: "Editor",
                link: "https://code.visualstudio.com/"
            },
            {
                name: "Warp",
                description: "A blazingly fast, Rust-based terminal that makes CLI feel like a modern editing interface.",
                tag: "Terminal",
                link: "https://www.warp.dev/"
            },
            {
                name: "Figma",
                description: "Where design happens before a single line of code is written. Essential for wireframing.",
                tag: "Design",
                link: "https://www.figma.com/"
            },
            {
                name: "Postman",
                description: "Indispensable for testing API endpoints and debugging backend services.",
                tag: "Tool",
                link: "https://www.postman.com/"
            }
        ]
    },
    {
        category: "Cloud & Services",
        items: [
            {
                name: "Vercel",
                description: "The best place to deploy frontend apps. Zero configuration, global CDN, and edge functions.",
                tag: "Hosting",
                link: "https://vercel.com",
                badge: "Recommended"
            },
            {
                name: "Railway",
                description: "Deploy without the hassle. I use it for heavy backend tasks. Sign up to get $20 in credits.",
                tag: "Infrastructure",
                link: "https://railway.com?referralCode=dzAA4r",
                badge: "$20 Credit"
            },
            {
                name: "Supabase",
                description: "The Open Source Firebase alternative. Postgres database with Realtime subscriptions.",
                tag: "Database",
                link: "https://supabase.com",
                badge: "Favorite"
            },
            {
                name: "DigitalOcean",
                description: "Simple, scalable cloud computing. I use Droplets for hosting my custom Docker containers. Get $200 in credit.",
                tag: "VPS",
                link: "https://m.do.co/c/66e27bb5092b",
                badge: "$200 Credit"
            },
            {
                name: "Cursor",
                description: "The AI-first Code Editor. It helps me write code faster with built-in GPT-4 integration.",
                tag: "AI Editor",
                link: "https://cursor.sh/",
                badge: "Game Changer"
            }
        ]
    },
    {
        category: "Productivity",
        items: [
            {
                name: "Notion",
                description: "My second brain. Used for documentation, task tracking, and life management.",
                tag: "Notes",
                link: "https://www.notion.so/"
            },
            {
                name: "Linear",
                description: "The gold standard for issue tracking. Keeps projects organized and sleek.",
                tag: "Planning",
                link: "https://linear.app/"
            },
            {
                name: "Raycast",
                description: "Replaces Spotlight. A powerful productivity booster for macOS-like workflow.",
                tag: "Tools",
                link: "https://www.raycast.com/"
            }
        ]
    }
];

export default function UsesPage() {
    return (
        <Container>
            <div className="flex flex-col gap-8 mt-8 py-12">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">Uses</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg">
                        A curated list of the hardware, software, and tools I use to build things.
                    </p>
                </div>

                <div className="space-y-12">
                    {USES_DATA.map((section) => (
                        <div key={section.category} className="space-y-6">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {section.items.map((item) => {
                                    const Content = () => (
                                        <Card className="p-4 flex flex-col gap-3 bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg transition-all h-full group relative overflow-hidden">
                                            {item.badge && (
                                                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                                    {item.badge}
                                                </div>
                                            )}
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                    {item.name}
                                                </h3>
                                                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-full">
                                                    {item.tag}
                                                </span>
                                            </div>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </Card>
                                    );

                                    return item.link ? (
                                        <a
                                            key={item.name}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full"
                                        >
                                            <Content />
                                        </a>
                                    ) : (
                                        <div key={item.name} className="h-full">
                                            <Content />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
