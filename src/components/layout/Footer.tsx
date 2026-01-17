import Link from 'next/link';
import Container from './Container';
import { SOCIAL_LINKS } from '@/data/socials';

const footerLinks = [
    {
        title: 'General',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Blog', href: '/blog' },
            { label: 'Guestbook', href: '/guestbook' },
        ],
    },
    {
        title: 'Specifics',
        links: [
            { label: 'Uses', href: '/uses' },
            { label: 'Products', href: '/products' },
            { label: 'Certificates', href: '/certificates' },
            { label: 'Stats', href: '/stats' },
        ],
    }
];

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 pt-16 pb-8 mt-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">Ageng Putra Pratama</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm">based in Surabaya, ID.</p>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
                                Creating a hopeful future through writing ✍️, design 🎨, engineering 🧩, and laughter 🌱.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 transition-colors ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="flex flex-col gap-4">
                                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">{section.title}</h4>
                                <div className="flex flex-col gap-3">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-sm text-neutral-500 gap-4 md:gap-0">
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <p>&copy; 2026 Ageng. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">CC BY-NC-SA 4.0</a>
                            <span>•</span>
                            <Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
                            <span>•</span>
                            <Link href="/disclaimer" className="hover:text-emerald-500 transition-colors">Disclaimer</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center md:items-end">
                        <div className="flex gap-4 items-center">
                            <a href="https://www.websitecarbon.com/website/agengpp-vercel-app/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
                                <span>🌱 Carbon Neutral</span>
                            </a>
                            <span className="h-3 w-[1px] bg-neutral-700"></span>
                            <a href="https://www.thegreenwebfoundation.org/green-web-check/?url=agengpp.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                                Green Web
                            </a>
                            <span className="h-3 w-[1px] bg-neutral-700"></span>
                            <a href="https://pagespeed.web.dev/analysis/https-agengpp-vercel-app/ow2af72dz5?form_factor=mobile" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                                ⚡ PageSpeed
                            </a>
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-500">
                            Powered by Next.js 16, Vercel & Tailwind v4
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
