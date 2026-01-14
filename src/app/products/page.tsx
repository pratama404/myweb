
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { ExternalLink, ShoppingBag, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'Shop - Digital Products',
    description: 'High-quality Notion templates, spreadsheets, and digital assets to boost your productivity.',
};

const PRODUCTS = [
    {
        name: "Notion Life OS Template",
        description: "The ultimate all-in-one workspace to organize your life, projects, and goals. Features recurring tasks, habit tracking, and PARA method organization.",
        price: "Paid",
        category: "Notion",
        image: "/images/products/notion-template.png", // Placeholder
        link: "https://lynk.id/agengputrapratama/LmXDdB2",
        tags: ["Productivity", "System"]
    },
    {
        name: "Google Sheets Budget Tracker",
        description: "Automated monthly budget planner with visual dashboards. Track income, expenses, and savings goals with zero formula knowledge required.",
        price: "Paid",
        category: "Spreadsheet",
        image: "/images/products/sheets-template.png", // Placeholder
        link: "https://lynk.id/agengputrapratama/EEZJ2D8",
        tags: ["Finance", "Automation"]
    },
    {
        name: "SaaS Healthcare Starter Kit",
        description: "Next.js boilerplate for building HIPAA-compliant healthcare applications. Includes patient management, appointment scheduling, and telemedicine UI.",
        price: "Coming Soon",
        category: "Software",
        image: "/images/products/saas-healthcare.png", // Placeholder
        link: "#",
        tags: ["Next.js", "React"]
    },
    {
        name: "Premium Microstock Portfolio",
        description: "High-quality stock photography and vector assets available for commercial licensing on Shutterstock.",
        price: "Varies",
        category: "Assets",
        image: "/images/products/microstock.png", // Placeholder
        link: "https://www.shutterstock.com/g/agengputrapratama",
        tags: ["Photography", "Design"]
    }
];

export default function ProductsPage() {
    return (
        <Container>
            <div className="flex flex-col gap-16 mt-8 py-12">

                {/* Header Section */}
                <div className="space-y-6 text-center md:text-left max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Digital <span className="text-emerald-600 dark:text-emerald-400">Products</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Curated collection of templates, software, and creative assets designed to save you time and elevate your work.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PRODUCTS.map((product) => (
                        <Card key={product.name} className="group flex flex-col overflow-hidden border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">

                            {/* Image Placeholder Area */}
                            <div className="relative h-48 w-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
                                {/* Use a pattern or gradient if no image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 opacity-50" />
                                <ShoppingBag className="text-neutral-300 dark:text-neutral-700 w-16 h-16 relative z-10" />

                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/90 text-emerald-600 rounded-full shadow-sm backdrop-blur-sm">
                                        {product.price}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6 gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50">
                                            {product.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="text-[10px] text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800">
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all group-hover:scale-[1.02]"
                                    >
                                        {product.price === "Paid" || product.price === "Varies" ? (
                                            <>Get it Now <ExternalLink size={16} /></>
                                        ) : (
                                            <>Join Waitlist <ArrowRight size={16} /></>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
}
