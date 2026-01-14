export interface CareerItem {
    year: string;
    title: string;
    company: string;
    description: string;
    category: 'corporate' | 'academic' | 'community';
    tags?: string[];
}

export const CAREER_DATA: CareerItem[] = [
    {
        year: "Aug 2025 - Present",
        title: "Cloud Computing Practicum Assistant",
        company: "UIN Sunan Ampel Surabaya",
        description: "Assisted 30+ students in cloud practicums (IaaS, PaaS, SaaS). Supported MLOps pipeline implementation and guided projects on observability.",
        category: "academic",
        tags: ["Python", "Teaching", "Cloud"]
    },
    {
        year: "Feb 2025 - Present",
        title: "Machine Learning Engineer Cohort",
        company: "Coding Camp by DBS Foundation",
        description: "Hands-on ML model development. Improved model accuracy by 60% and built big data pipelines for resource efficiency.",
        category: "academic",
        tags: ["Machine Learning", "Python"]
    },
    {
        year: "Jan 2025 - Dec 2025",
        title: "Programming Laboratory Assistant",
        company: "UIN Sunan Ampel Surabaya",
        description: "Assisted students with debugging and served as a mentor for Computational Thinking and Basic Programming courses.",
        category: "academic",
        tags: ["Java", "Python", "Mentoring"]
    },
    {
        year: "Jan 2025 - Jul 2025",
        title: "R&D Intern – IoT & Machine Learning",
        company: "PT Pompa DEX Indoguna",
        description: "Developed IoT Weather Station prototype with ESP32/MQTT. Trained ML models (Random Forest, XGBoost) for weather prediction with 90% accuracy.",
        category: "corporate",
        tags: ["IoT", "Machine Learning", "ESP32"]
    },
    {
        year: "Sep 2024 - Jan 2025",
        title: "Cloud Computing Cohort",
        company: "Bangkit Academy (Google, GoTo, Traveloka)",
        description: "Built and deployed 3 cloud infrastructures for air quality apps. Selected as one of the top graduates.",
        category: "academic",
        tags: ["GCP", "Cloud Computing"]
    },
    {
        year: "Sep 2024 - Oct 2024",
        title: "Data Analyst (Part-time)",
        company: "Kementerian Agama Republik Indonesia",
        description: "Analyzed data from 200,000+ students (AKMI). Created visualizations in Tableau/Python influencing educational strategies.",
        category: "corporate",
        tags: ["Statistical Analysis", "EDA", "Tableau"]
    },
    {
        year: "Mar 2024 - Dec 2024",
        title: "Expert Team of IT Dept",
        company: "HIMAPROSIF UINSA",
        description: "Developed official INSYMA website (500+ visitors/mo) and produced 'inSIght' podcast series. Increased digital engagement by 30%.",
        category: "community",
        tags: ["Web Dev", "Podcasting", "IT"]
    },
    {
        year: "Aug 2023 - Jul 2024",
        title: "Lead",
        company: "Google Developer Student Clubs",
        description: "Organized successful events with 97% positive feedback. Established collaborations with 5 external communities.",
        category: "community",
        tags: ["Leadership", "Community Management"]
    },
    {
        year: "Mar 2023 - Feb 2024",
        title: "HR Development Staff",
        company: "HIMAPROSIF UINSA",
        description: "Managed 5+ events with 95% success rate. Led 'Road to Proksi' with 200+ participants, increasing engagement by 45%.",
        category: "community",
        tags: ["Event Management", "HRD", "Leadership"]
    },
    {
        year: "Jul 2023 - Dec 2023",
        title: "Ready4Security Participant",
        company: "InfraDigital Foundation",
        description: "Learned Microsoft Security (SC-900, SC-200). Managed vulnerability labs and analyzed security threats.",
        category: "academic",
        tags: ["Cybersecurity", "SOC"]
    },
    {
        year: "Feb 2023 - Mar 2023",
        title: "Project-Based Intern: QA",
        company: "Evermos",
        description: "Conducted performance testing using Grafana k6 and Postman. Created detailed test reports to ensure system reliability.",
        category: "corporate",
        tags: ["QA", "k6", "Postman"]
    },
    {
        year: "Nov 2022 - Dec 2022",
        title: "Project-Based Intern: Big Data Analytics",
        company: "PT. Kimia Farma, TBK",
        description: "Focused on Big Data Analytics, data visualization, and data mart creation to support business decision-making.",
        category: "corporate",
        tags: ["Big Data", "SQL"]
    }
];
