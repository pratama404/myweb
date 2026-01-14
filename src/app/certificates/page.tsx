import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export const metadata = {
    title: 'Certificates',
    description: 'Professional certifications and achievements.',
};

const CERTIFICATES = [
    {
        name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
        date: "2025",
        description: "Validated expertise in designing and implementing data science solutions on OCI.",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=99C0CBAD783960D753BBB8950E414AEC57C19540B60D539B2109538672FBA29C"
    },
    {
        name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        date: "2025",
        description: "Proficiency in Large Language Models (LLMs) and Generative AI services on OCI.",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A1AF0A9F472E3CAECA9E3E34D4D54314543808E50DD0EC0BAA78341470D2779B"
    },
    {
        name: "Alibaba Cloud Certified Associate: Cloud Engineer",
        issuer: "Alibaba Cloud",
        date: "2025",
        description: "Fundamental knowledge of cloud computing and Alibaba Cloud products.",
        link: "https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_dfa7467dde4b4c596c73ea2d4ef4666e.png"
    },
    {
        name: "Microsoft Office Specialist: Word Associate",
        issuer: "Microsoft",
        date: "2025",
        description: "Competency in creating and managing professional documents.",
        link: "https://www.credly.com/badges/c05b5f02-2f3b-4d95-9634-b86f0738bed8/public_url"
    },
    {
        name: "BNSP System Analyst",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "2025",
        description: "National certification for System Analysis competency.",
        link: "#"
    },
    {
        name: "BNSP IT Auditor",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "2025",
        description: "National certification for Information Technology Auditing.",
        link: "#"
    },
    {
        name: "BNSP Data Scientist",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "2025",
        description: "National certification for Data Science competency.",
        link: "#"
    }
];

const AWARDS = [
    {
        name: "Juara 2 - ExplorAItion",
        issuer: "Jagoan Hosting X Ngalup.co",
        date: "Dec 2025",
        description: "Developed AI-based chatbot MVP for student financial management. The product facilitates expense tracking and budget planning via interactive chat.",
        link: "#"
    },
    {
        name: "3rd Place – PinGo x BGA Indonesia DePIN Hackathon 2025",
        issuer: "PinGo AI & Chain for Good",
        date: "Nov 2025",
        description: "National Web3 DePIN competition. Project 'T-Air' leverages decentralized networks and real-world sensors to address urban pollution using TON Blockchain.",
        link: "#"
    },
    {
        name: "Digital Security Fellowship for Media and Content Creators",
        issuer: "AJI Indonesia, IMS, European Union",
        date: "Jun 2025",
        description: "Selected as one of 21 fellows for a digital security capacity building program. Received mentorship and grant support for digital safety projects.",
        link: "#"
    }
];

const CREDENTIALS = [
    {
        name: "Google Developers",
        description: "Verified Developer Profile",
        link: "https://developers.google.com/profile/u/agengputrapratama",
        icon: "Google"
    },
    {
        name: "Credly",
        description: "Digital Badge Wallet",
        link: "https://www.credly.com/users/ageng-putra-pratama",
        icon: "Credly"
    },
    {
        name: "Dicoding",
        description: "Tech Academy Profile",
        link: "https://www.dicoding.com/users/agengputrapratama",
        icon: "Dicoding"
    },
    {
        name: "Google Skills",
        description: "Skillshop Public Profile",
        link: "https://www.skills.google/public_profiles/a72db783-9bee-4d62-a4ba-8ec77a97533a",
        icon: "Google"
    },
    {
        name: "Credential.net",
        description: "Verified Certificates",
        link: "https://www.credential.net/profile/agengputrapratama290206/wallet",
        icon: "Certificate"
    }
];

export default function CertificatesPage() {
    return (
        <Container>
            <div className="flex flex-col gap-16 mt-8 py-12">

                {/* Header */}
                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Credentials
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Professional badges, verified capabilities, and continuous learning milestones.
                    </p>
                </div>

                {/* Verified Profiles Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        Digital Footprint
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {CREDENTIALS.map((cred) => (
                            <a
                                key={cred.name}
                                href={cred.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-emerald-500/50 transition-all"
                            >
                                <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {cred.name}
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {cred.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Honors & Awards List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        Honors & Awards
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {AWARDS.map((award) => (
                            <Card key={award.name} className="group p-6 bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-amber-100 dark:bg-amber-500/20 rounded-full text-amber-600 dark:text-amber-500">
                                        <Award size={24} />
                                    </div>
                                    <div className="flex items-center text-xs text-amber-700 dark:text-amber-400 gap-2 font-mono uppercase tracking-wider bg-white dark:bg-neutral-900 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                                        <Calendar size={12} />
                                        <span>{award.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{award.name}</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 font-medium mb-4">{award.issuer}</p>

                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    {award.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Certificates List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CERTIFICATES.map((cert) => (
                            <Card key={cert.name} className="group p-6 bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-full text-emerald-600 dark:text-emerald-400">
                                        <Award size={24} />
                                    </div>
                                    {cert.link !== "#" && (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{cert.name}</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 font-medium mb-4">{cert.issuer}</p>

                                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                                    {cert.description}
                                </p>

                                <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-500 gap-2">
                                    <Calendar size={14} />
                                    <span>Issued {cert.date}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
