
export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    image: string;
    demoUrl?: string;
    githubUrl: string;
    problem: string;
    goals: string;
    lessons: string;
    year: string;
    features?: { title: string; description: string }[];
    spotlight?: string;
    team?: { name: string; role: string }[];
    media?: { title: string; url: string; outlet: string }[];
}

export const PROJECTS: Project[] = [
    {
        id: 'breev',
        slug: 'breev',
        title: 'Breev - Physics-Guided Air Quality System',
        shortDescription: 'IoT-based air quality monitoring system powered by AirPhyNet (Physics-Guided Neural Network).',
        fullDescription: 'Breev represents a leap forward in environmental monitoring, developed through an evolutionary prototyping approach. At its core lies **AirPhyNet**, a novel Physics-Guided Neural Network that embeds atmospheric physical principles directly into the model\'s loss function. unlike traditional "black box" AI, Breev understands the physics of how pollutants disperse.\n\nThis research-driven project integrates low-cost sensors (MQ-135, DHT22) with advanced AI to predict Air Quality Index (AQI) up to **72 hours ahead**. By processing data from the Jakarta Air Quality dataset (2010–2025) and real-time sensor feeds, Breev achieves a remarkable system latency of just **2.3 seconds**.',
        techStack: ['Next.js 14', 'FastAPI', 'IoT (ESP32)', 'MQTT', 'PyTorch', 'Physics-Guided NN', 'Docker'],
        image: '/images/project-breev.png',
        demoUrl: 'https://breev.vercel.app',
        githubUrl: 'https://github.com/pratama404/breev',
        problem: 'Urban air pollution is a critical threat, but accurate monitoring is often expensive and sparse. Furthermore, standard AI prediction models often fail to account for the physical laws governing atmospheric dynamics, leading to scientifically inconsistent predictions.',
        goals: 'To validate the feasibility of a Physics-Guided approach in low-cost IoT systems. The goal was to build a system that is not only fast (Latency < 2.5s) but also scientifically robust, achieving an R² value of 0.57 and MAE of 0.40 in real-world scenarios.',
        lessons: 'The biggest breakthrough was proving that Physical Knowledge can be embedded into Neural Networks to improve generalization on small datasets. I learned to balance the "Evolutionary Prototyping" of hardware (dealing with sensor noise) while simultaneously developing complex custom loss functions for the AirPhyNet model.',
        year: '2024',
        features: [
            { title: 'AirPhyNet AI', description: 'Novel Physics-Guided Neural Network predicting AQI 72 hours ahead.' },
            { title: 'Real-time & Low Latency', description: 'Average system latency of 2.3 seconds via MQTT protocol.' },
            { title: 'Multi-Sensor Integration', description: 'Synchronized reading of MQ-135 (Gas) and DHT22 (Temp/Hum).' },
            { title: 'Evolutionary Prototype', description: 'Iterative development focusing on sensor data stabilization.' },
            { title: 'Interactive Dashboard', description: 'Next.js frontend for visualizing historical and forecasted data.' },
            { title: 'Cloud-Native Architecture', description: 'Scalable backend with Docker and Cloudflare Tunnels.' }
        ],
        team: [
            { name: 'Ageng Putra Pratama', role: 'Principal Researcher & Developer' },
            { name: 'Dr. Supervisor', role: 'Thesis Advisor' }
        ],
        spotlight: 'Published as a Research Study on Physics-Guided Neural Networks for IoT-based Environmental Monitoring.'
    },
    {
        id: 'carbcalc',
        slug: 'carbcalc',
        title: 'CarbCalc - AI-Powered Sustainability Ecosystem',
        shortDescription: 'Capstone Project: Gamified carbon footprint tracker powered by Google Gemini AI.',
        fullDescription: 'Climate change is the defining crisis of our time, yet for many, individual action feels insignificant against global statistics. **CarbCalc** was born as a Capstone Project with a simple question: *"How might we make sustainability personal, actionable, and even fun?"*\n\nDesigned as a comprehensive ecosystem rather than just a calculator, CarbCalc bridges the gap between abstract awareness and concrete daily habits. By integrating **Google Gemini AI**, the platform doesn\'t just tell you your footprint—it acts as an intelligent eco-consultant, analyzing your lifestyle (Transportation, Energy, Food, Waste) to offer hyper-personalized reduction strategies.\n\nBut data alone doesn\'t drive change; motivation does. Inspired by the best behavioral psychology principles, we built a robust **Gamification Engine**. Users aren\'t just tracking numbers; they are embarking on a journey—earning Eco Points, climbing leaderboards, and unlocking badges for milestones like "Zero Waste Weekend" or "Bike Commuter". CarbCalc transforms the daunting task of saving the planet into a rewarding daily adventure.',
        techStack: ['Next.js 14', 'MongoDB', 'Google Gemini AI', 'NextAuth.js', 'Chart.js', 'Canvas API', 'Tailwind CSS'],
        image: '/images/project-carbcalc.png',
        demoUrl: 'https://carbcalc.vercel.app',
        githubUrl: 'https://github.com/pratama404/carbcalc',
        problem: 'The "Intention-Action Gap" in sustainability is massive. While 80% of urban citizens express concern about air quality and climate change, less than 20% consistently adopt lower-carbon habits. The barriers are clear: Carbon footprints are invisible, manual tracking is tedious, and without immediate feedback, eco-anxiety leads to inaction rather than positive change.',
        goals: 'To democratize sustainability through technology. Our primary goal was to build a "Feedback Loop" that makes the invisible visible. By combining real-time visualization with AI-driven "Nudges" and social incentives, CarbCalc aims to lower the cognitive barrier to entry for sustainability, proving that small, collective actions can indeed lead to measurable impact.',
        lessons: 'The development of CarbCalc was a masterclass in modern Product Engineering. Integrating **Generative AI (Gemini)** required extensive iteration on "Prompt Engineering" to ensure advice was safe, relevant, and not halluncinated. On the frontend, implementing the "Share to Story" feature using the **HTML5 Canvas API** taught me the complexities of client-side image generation and cross-platform compatibility. Most importantly, I learned that in building social apps, User Experience (UX) is just as critical as the backend architecture.',
        year: '2024',
        features: [
            { title: 'AI Recommendations', description: 'Personalized, difficulty-rated reduction tips using Google Gemini.' },
            { title: 'Gamified System', description: 'Eco Points, Levels, and Badges to reward sustainable milestones.' },
            { title: '4-Pillar Tracking', description: 'Detailed calculator for Transport, Energy, Food, and Waste.' },
            { title: 'Visual Analytics', description: 'Interactive charts showing historical trends and impact analysis.' },
            { title: 'Social Sharing', description: 'Auto-generated infographics for Instagram/Twitter sharing via Canvas API.' },
            { title: 'Professional Reports', description: 'Export detailed emission reports in PDF/CSV formats.' }
        ],
        team: [
            { name: 'Ageng Putra Pratama', role: 'Fullstack & AI Engineer' },
            { name: 'Marsha Alivia Vesti', role: 'UI/UX & Researcher' },
            { name: 'Retania Dewi Anjani', role: 'Data Analyst & QA' }
        ],
        spotlight: 'Capstone Project: 1st Place Winner in Sustainability Innovation Category (Placeholder).',
        media: [
            { title: 'Project Demo', url: 'https://www.youtube.com/watch?v=hn-K5dFLEpI', outlet: 'YouTube' }
        ]
    },
    {
        id: 'wangku',
        slug: 'wangku',
        title: 'Wangku - AI Financial Assistant',
        shortDescription: '2nd Place Winner @ Elevate Hackathon: Integrating Finance into WhatsApp with AI.',
        fullDescription: 'In the high-pressure environment of the **Elevate Hackathon**, our team had 48 hours to solve a simple yet pervasive problem: "Financial Disarray among Gen Z." The result was **Wangku**, a revolutionary "Zero Friction" financial platform that meets users where they already are—on WhatsApp.\n\nWangku disrupts the traditional fintech model by removing the need for standalone apps for daily logging. By leveraging **WhatsApp Business API** parsed by LLMs, users can simply chat "Spent 50k for coffee" and it is instantly recorded. For deeper analysis, a companion **Next.js Web Dashboard** provides stunning 3D visualizations and AI-powered insights, creating a seamless Hybrid Experience.',
        techStack: ['Next.js 15', 'WhatsApp API', 'Supabase', 'Gemini AI', 'Framer Motion', 'Tailwind CSS'],
        image: '/images/project-wangku.png',
        demoUrl: 'https://wangku.id',
        githubUrl: 'https://github.com/pratama404/wangku',
        problem: 'Millennials and Gen Z suffer from "App Fatigue." Despite having powerful banking apps, 60% of daily micro-transactions go untracked because opening an app, logging in, and navigating menus is too much friction for a $2 coffee. This lack of data leads to "Financial Blindness"—not knowing where the money went at the end of the month.',
        goals: 'To achieve "Invisible Banking." We wanted to make financial tracking as natural as texting a friend. The goal was to build a system that captures data effortlessly via Chat (Low Friction) and presents it beautifully via Web (High Resolution), powered by AI that offers financial advice like a smart friend, not a calculator.',
        lessons: 'Building Wangku was a crash course in **System Architecture**. Synchronizing state between a stateless Chat Bot and a stateful Web Dashboard required robust database design with Supabase. I also learned to leverage **Framer Motion** for "Scrollytelling" on the landing page to keep users engaged. Winning 2nd Place at the Hackathon validated that "User Experience" often trumps raw technical complexity.',
        year: '2023',
        features: [
            { title: 'WhatsApp Integration', description: 'Log expenses, check balances, and split bills via simple chat commands.' },
            { title: 'AI Spending Analysis', description: 'Gemini AI analyzes chat logs to categorize spend and detect anomalies.' },
            { title: 'Smart Reminders', description: 'Automated WhatsApp alerts for bills, budget limits, and savings goals.' },
            { title: 'Hybrid Architecture', description: 'Real-time sync between WhatsApp Bot (Input) and Web Dashboard (Analytics).' },
            { title: 'Interactive Dashboard', description: '3D animated charts and budget optimization tools built with Next.js.' },
            { title: 'Split Bill Engine', description: 'Complex group expense sharing logic handled automatically via group chat.' }
        ],
        team: [
            { name: 'Ageng Putra Pratama', role: 'Lead Developer' },
            { name: 'Team Elevate', role: 'Product & Design' }
        ],
        spotlight: '🏆 2nd Place Winner at Elevate Hackathon 2023'
    },
    {
        id: 'tair',
        slug: 'tair',
        title: 'T-Air - Decentralized Air Quality Network (DePIN)',
        shortDescription: 'Web3 DePIN Project on TON Blockchain: Earn crypto by monitoring air quality.',
        fullDescription: 'T-Air stands at the forefront of the **DePIN (Decentralized Physical Infrastructure Network)** revolution, transforming environmental monitoring from a centralized cost center into a decentralized economy. By deploying a network of internet-connected sensors (MQ-135) powered by the **TON Blockchain**, T-Air allows anyone to become a "Data Miner," earning **$TAIR Tokens** in exchange for providing real-time air quality streams.\n\nDeveloped for the **PinGo Indonesian DePIN Hackathon 2025**, the platform utilizes a **Hybrid Architecture** to solve the "Blockchain Trilemma" for IoT. High-velocity sensor data is validated off-chain for negligible latency, while the reward settlement and sensor reputation reputation are immutably recorded on-chain via **Tact Smart Contracts**. This ensures a transparent, tamper-proof ecosystem where cleaner air data directly translates to financial value.',
        techStack: ['React + Vite', 'TON SDK', 'Tact (Smart Contract)', 'Node.js (Serverless)', 'MongoDB', 'ESP32 (IoT)', 'Telegram Mini App'],
        image: '/images/project-tair.png',
        demoUrl: 'https://t.me/TonairBot',
        githubUrl: 'https://github.com/pratama404/tair',
        problem: 'Current air quality monitoring infrastructure is centralized, expensive, and sparse. A single government station covers huge areas, creating "Data Blindspots" in neighborhoods. Moreover, individuals have no economic reason to install and maintain their own sensors, leading to a "Tragedy of the Commons" where environmental data is scarce.',
        goals: 'To build the "Bitcoin of Air Quality." T-Air aims to crowdsource a high-density sensory network by aligning personal incentives with public good. By rewarding uptime and data validity with crypto assets, we create a self-sustaining physical infrastructure that scales organically without central budget limitations.',
        lessons: 'The leap from Web2 to Web3 implementation was profound. Writing **Tact Smart Contracts** required a shift in mindset towards "Trustless Design"—ensuring that the reward algorithm could not be gamed by simulated sensors. I also learned to architect a "Hybrid Bridge" that connects low-power ESP32 microcontrollers to the high-stakes world of Blockchain settlement without overwhelming the user experience.',
        year: '2025',
        features: [
            { title: 'DePIN Economy', description: 'Earn $TAIR tokens on TON Testnet for every kilobyte of valid air data.' },
            { title: 'Proof of Location', description: 'Cryptographic verification of sensor uptime and geographic data.' },
            { title: 'Telegram Mini App', description: 'Frictionless onboarding via Telegram—no separate wallet app needed.' },
            { title: 'Hybrid Settlement', description: 'Off-chain IoT validation layer + On-chain reward distribution.' },
            { title: 'Smart Gas Alerts', description: 'Real-time push notifications for CO, NH3, and Smoke hazards.' },
            { title: 'Transparent DAO', description: 'Community governance over sensor deployment and reward rates.' }
        ],
        team: [
            { name: 'Ageng Putra Pratama', role: 'Fullstack & Blockchain Engineer' }
        ],
        spotlight: '🚀 Submission for PinGo Indonesian DePIN Hackathon 2025 (TON Track)'
    }
];
