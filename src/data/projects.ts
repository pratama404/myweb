
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
    gallery?: string[];
    category?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 'breev',
        slug: 'breev',
        title: 'Breev - End-to-End AI Air Quality System',
        shortDescription: 'Taming the NaN: A Physics-Informed AI system connecting low-cost IoT sensors to a deep learning brain.',
        fullDescription: `### The Invisible Enemy
We live in an era where the air we breathe is becoming increasingly invisible, yet increasingly dangerous. As an Information Systems student, I often wondered: Can we use technology not just to monitor this, but to *predict* it?

This curiosity turned into an obsession when I stumbled upon a research paper titled *"AirPhyNet: Physics-Informed Deep Learning for Air Quality Modeling"*. I didn't just want to replicate this code; I wanted to bring it to life. I envisioned **"Project Breev"**: a complete ecosystem connecting the physical world to a digital brain.

### 1. The Architecture: From Chaos to Order
Building an end-to-end IoT system is more than just stacking containers; it's about orchestrating a symphony of data. I designed a robust pipeline that moves sensor readings from the streets of Jakarta to our AI cloud in milliseconds.

![System Architecture](/images/breev/system-architecture.png)
*Figure 1: High-Level Architecture. Data flows from ESP32 sensors via MQTT, processed by a Python worker, stored in MongoDB, and ultimately fed into the AirPhyNet Model.*

The architecture relies on **MQTT**—the heartbeat of the system. Unlike HTTP, which requires a handshake for every request, MQTT keeps a persistent connection, allowing our ESP32 sensors to stream data with minimal overhead. It’s the difference between sending a letter and having a conversation.

### 2. The Hardware: "The Frankenstein" Setup
Theory is clean; hardware is messy. We built our sensing node using the **MQ-135** gas sensor and **DHT22** for temperature/humidity.

![Hardware Prototype](/images/breev/hardware-setup.jpg)
*Figure 2: The Physical Prototype. An ESP32 microcontroller wired to MQ-135 and DHT22 sensors, transmitting vital air quality data every 5 seconds.*

**The Hardware Betrayal:** Real-world data is dirty. I discovered the sensor drifted by 2-3% whenever humidity exceeded 80%—it was "lying" to me due to physical properties. To combat this, I wrote a **software calibration algorithm** in the preprocessing pipeline that neutralizes this drift using real-time humidity data, ensuring reliability even on humid nights.

### 3. The AI: Taming the NaN
The biggest battle wasn't coding; it was math. My first training runs were a disaster, resulting in **NaN** (Not a Number) losses. The model wasn't learning; it was exploding. I treated these failures not as dead ends, but as data points.

**Strategy 1: Anti-Exploding Gradient**
I implemented \`torch.nn.utils.clip_grad_norm_\` to cap extreme errors before they shattered the model weights.

**Strategy 2: The "Brain" Upgrade**
I tuned the architecture, increasing \`hidden_size\` to **128** and adding **Dropout (0.3)** layers. To prevent "memorizing" (overfitting), I added **Weight Decay (1e-4)** to the Adam optimizer—a form of L2 regularization that penalizes the model for being too complex.

**Strategy 3: Scientific ML**
I didn't just trust the data; I trusted physics. I integrated a custom loss function: \`total_loss = loss + 0.01 * p_loss\`. This forces the model to respect fluid dynamics (advection/diffusion) rather than just minimizing error.

![Model Performance](/images/breev/model-performance.png)
*Figure 3: Training History. The struggle (left) vs. convergence (right). After 200 epochs of fine-tuning learning rates (1e-4), the loss curve finally stabilized.*

### 4. The Breakthrough: Analyzing the "Good Fit"
After weeks of iteration, the numbers finally turned green.
*   **Test R² Score:** 0.537 – 0.569. (Explaining ~57% of variance).
*   **The "Gap" Analysis:**
    *   Train Loss: **0.433**
    *   Test MSE: **0.466**
    *   Gap: **0.033**

This tiny gap is the holy grail of Machine Learning: a **"Good Fit"**. It means the model isn't just memorizing the answer key (overfitting); it actually understands the patterns.

### 5. The Result: Actionable Intelligence
All this engineering culminates in the Dashboard—a Next.js interface that empowers users to see the invisible. We didn't just want raw data; we wanted clarity.

**The Command Center**
The main dashboard serves as the central hub for real-time monitoring. It aggregates data from multiple sensor nodes, presenting a live AQI reading that updates every 2.3 seconds. Users can instantly see the current air quality status (Healthy, Moderate, Unhealthy) colour-coded for immediate decision making.

![Live Dashboard Overview](/images/breev/dashboard-ui.png)
*Figure 4: The Breev Dashboard. Real-time AQI visualization with historical trends and a 72-hour forecast engine.*

**Deep Dive Analytics**
Beyond simple gauges, the system offers deep analytical capabilities. Users can drill down into specific pollutants—tracking Carbon Monoxide (CO), Nitrogen Oxides (NOx), and Ozone (O3) individually. This granularity helps identify specific pollution sources, such as vehicle emissions vs. industrial waste.

![Detailed Analytics](/images/breev/dashboard-v2.png)
*Figure 5: Detailed Analytics View. Granular data drill-down showing specific pollutant levels (CO, NOx, O3) over time.*

**Validating the Future**
The true test of the system is its predictive power. The plot below visualizes the model's performance on unseen test data. The **Blue Line** represents the ground truth (actual sensor values), while the **Yellow Line** is the AI's prediction. The close alignment (R² ~0.57) proves that the Physics-Guided approach successfully captures the complex, non-linear dynamics of air pollution.

![Prediction Plot](/images/breev/model-prediction.png)
*Figure 6: Prediction vs Actual. The yellow line (Prediction) closely follows the blue line (Actual Ground Truth), proving that Physics-Guided AI can work on low-cost hardware.*

### 6. References & Scientific Foundation
This project was heavily inspired by the research paper **"AirPhyNet: Physics-Informed Deep Learning for Air Quality Modeling"**. The core innovation lies in treating pollution not just as a time-series problem, but as a fluid dynamics phenomenon governed by advection and diffusion equations.

*   **Paper**: [AirPhyNet: Physics-Informed Deep Learning for Air Quality Modeling](https://arxiv.org/abs/2402.03784)
*   **Documentation**: [MLflow for Experiment Tracking](https://mlflow.org/docs/latest/index.html)
*   **Dataset**: Jakarta Air Quality Index (2013-2024) on Kaggle.

### Conclusion
Project Breev taught me that Machine Learning is **20% modeling and 80% engineering**. A fancy model cannot fix broken data. MLOps saved me—tracking every "Run A" vs "Run B" in MLflow allowed me to debug the math behind the code. Resilience isn't just a soft skill; in AI, it's the ability to look at a NaN loss and see a math problem waiting to be solved.`,
        techStack: ['PyTorch', 'Docker', 'MLflow', 'DagsHub', 'GitHub Actions', 'MongoDB', 'Grafana', 'ESP32', 'MQTT', 'Next.js'],
        image: '/images/breev/header.jpg',
        demoUrl: 'https://breev.vercel.app',
        githubUrl: 'https://github.com/pratama404/breev',
        problem: '### The "Exploding Gradient" Nightmare\nMy initial AI model failed. Not just "low accuracy" failed, but **NaN (Not a Number)** failed. I stared at the console, seeing loss values explode into infinity, realizing my model wasn\'t learning—it was broken. The R² score was **-13.48**, meaning my AI was performing worse than a random guess.\n\nSimultaneously, the physical world betrayed me. The low-cost **MQ-135 sensors** were drifting by 2-3% purely due to humidity changes, effectively sending "lying" data to the cloud. To top it off, I had to deploy this heavy stack (Database, API, AI Model) on a single **resource-constrained VPS**, leading to constant "Out of Memory" crashes.',
        goals: '### Operationalizing Research\nThe goal wasn\'t just to write code, but to **build a "Good Fit" model that is not a Black Box**. I aimed to translate the theoretical "AirPhyNet" research paper into a working, end-to-end production system.\n\n*   **Latency Target:** < 3 seconds (Sensor to Dashboard). with MQTT.\n*   **Accuracy Target:** R² Score > 0.5 (Good Fit).\n*   **Resilience:** Automated drift compensation for sensor hardware.\n\nUltimately, I wanted to prove that advanced Physics-Informed AI could run on affordable, democratized IoT infrastructure.',
        lessons: '### 80% Engineering, 20% Modeling\nProject Breev taught me that in the real world, a "perfect" model is useless if the data pipeline is broken. I learned that **MLOps is not a luxury, but a necessity**—without MLflow to track my experiments, I would have been lost in a sea of log files.\n\nI also learned **Mathematical Resilience**. Seeing "NaN" is terrifying, but it\'s usually just a math problem (like unscaled inputs or high learning rates) waiting to be solved. This project shifted my mindset from "Student" to "Engineer"—someone who treats failures not as dead ends, but as data points to be debugged.',
        year: '2024',
        features: [
            { title: 'AirPhyNet Implementation', description: 'Physics-informed neural network capturing advection and diffusion.' },
            { title: 'Robust Data Pipeline', description: 'Automated calibration algorithm compensating for sensor humidity drift.' },
            { title: 'MLOps Automation', description: 'CI/CD with GitHub Actions and model tracking via MLflow/DagsHub.' },
            { title: 'Real-time Dashboard', description: 'Live AQI visualization with 2.3s latency using MQTT & WebSockets.' },
            { title: 'Infrastructure Monitoring', description: 'Grafana dashboards tracking CPU/RAM to manage VPS resources.' },
        ],
        team: [
            { name: 'Ageng Putra Pratama', role: 'AI & IoT Engineer' },
            { name: 'Pak Subhan & Pak Andik', role: 'Thesis Advisors' }
        ],
        spotlight: 'From NaN to R² 0.569: Capturing 53% of air quality variance with a $5 sensor setup.',
        category: 'AI Engineering • IoT'
    },
    {
        id: 'carbcalc',
        slug: 'carbcalc',
        title: 'CarbCalc - AI-Powered Sustainability Ecosystem',
        shortDescription: 'Capstone Project: Gamified carbon footprint tracker powered by Google Gemini AI.',
        fullDescription: `### The Psychological Barrier
Climate change is the defining crisis of our time, yet "Eco-Anxiety" often leads to paralysis rather than action. As a team, we identified the **"Intention-Action Gap"**: 80% of people *want* to live sustainably, but fewer than 20% actually *do*. Why? Because sustainability feels like homework—tedious, invisible, and lonely.

**CarbCalc** was born from a simple question: *What if saving the planet felt less like a chore and more like a game?*

### 1. The "Fitbit" for Carbon
We designed CarbCalc not just as a calculator, but as a **Personal Eco-Ecosystem**.
*   **Track:** Users log daily activities across Transportation, Energy, Food, and Waste.
*   **Visualize:** We don't just show numbers; we show impact.
*   **Compete:** We introduced "Eco Points", Leaderboards, and Badges (e.g., "Zero Waste Warrior") to tap into intrinsic motivation.

![CarbCalc Ecosystem](/images/carbcalc/showcase-1.png)
*Figure 1: The CarbCalc Experience. Gamifying sustainability through visual feedback and social milestones.*

### 2. AI as the "Eco-Coach"
Data without direction is useless. We integrated **Google Gemini AI** to act as a hyper-personalized consultant. Instead of generic advice like "Drive less," the AI analyzes your specific patterns: *"You spent 200k on GoRide this week. Switching to TransJakarta for just 2 days would save 15kg of CO2 and Rp50k."*

### 3. The Virality Factor
Sustainability acts as "Social Currency." We utilized the **HTML5 Canvas API** to generate beautiful, shareable "Eco-Receipts" for Instagram Stories. This turns individual action into collective inspiration.

### Victory at Capstone
What started as a university project evolved into a comprehensive platform. Our focus on **User Experience (UX)** and **Behavioral Design** set us apart.

![Capstone Victory](/images/carbcalc/showcase-2.png)
*Figure 2: The Winning Moment. Celebrating our 1st Place victory in the Sustainability Innovation Category.*

CarbCalc proves that technology can bridge the gap between abstract climate data and concrete daily habits. We didn't just build an app; we built a movement.`,
        techStack: ['Next.js 14', 'MongoDB', 'Google Gemini AI', 'NextAuth.js', 'Chart.js', 'Canvas API', 'Tailwind CSS'],
        image: '/images/carbcalc/header.jpg',
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
        spotlight: '🏆 Best Capstone Information System UINSA',
        media: [
            { title: 'Project Demo', url: 'https://www.youtube.com/watch?v=hn-K5dFLEpI', outlet: 'YouTube' }
        ],
        category: 'SaaS • Sustainability'
    },
    {
        id: 'wangku',
        slug: 'wangku',
        title: 'Wangku - AI Financial Assistant',
        shortDescription: '2nd Place Winner @ Elevate Hackathon: Integrating Finance into WhatsApp with AI.',
        fullDescription: `### The Hackathon Crucible
**"Garuda Spark"** (Jagoan Hosting x Markas x Ngalup) wasn't just another coding competition; it was a test of adaptability. I walked into the offline venue alone and walked out with a team of strangers-turned-founders. We had 48 hours to solve a problem we all felt but never articulated: *Financial Disarray*.

### 1. The "Social Friction" Crisis
Financial literacy in Indonesia is rising, yet Gen Z is trapped in "conceptual debt"—vulnerable to *Pinjol* (predatory lending) and bad credit. But the real issue we found was social.
*   **The "Gak Enakan" Factor:** Asking a friend to pay back lunch money is awkward.
*   **App Fatigue:** Nobody wants to install *another* finance app that they'll forget to open.
*   **The Result:** "Financial Blindness"—not knowing where the money went until it's too late.

### 2. Enter "Invisible Banking"
We asked: *What if banking felt as natural as chatting?*
The answer was **Wangku**. We built a "Zero Friction" financial assistant that lives where users already are: **WhatsApp**.

*   **Chat-to-Track:** Users simply text *"Spent 50k for coffee"* and our NLP engine categorizes it instantly.
*   **Split Bill Engine:** A group-centric design where users can split bills in a group chat without the social awkwardness—the bot does the nagging for you.

### 3. The "Zero Learning Curve" MVP
Our biggest challenge was building a product that required **zero rewiring of user habits**. We utilized the **WhatsApp Business API** for the interface and connected it to a robust **Next.js Dashboard** for deep analytics. This Hybrid Architecture allowed users to have the speed of chat for input and the depth of a web app for review.

### Victory in 48 Hours
The validation was immediate. Users loved the "No Install" approach. This user-centric philosophy propelled our ragtag team to secure **2nd Place**. We proved that in a hackathon, the best code doesn't win—the best solution to a real human problem does.

![Winner Presentation](/images/wangku/winner-presentation.jpg)
*Figure 1: The Victory Moment. Presenting our MVP to the judges at the Garuda Spark Hackathon finale.*`,
        techStack: ['Next.js 15', 'WhatsApp API', 'Supabase', 'Gemini AI', 'Framer Motion', 'Tailwind CSS'],
        image: '/images/wangku/header.jpg',
        demoUrl: 'https://wangku.id',
        githubUrl: 'https://github.com/pratama404/wangku',
        problem: '### The "Taboo" of Money\nFor Gen Z and Millennials, money management is plagued by friction. Manual tracking in spreadsheets is boring, and installing complex banking apps adds cognitive load. Worse is the **"Social Friction"**: bills between housemates or colleagues often go unpaid because asking for money is considered impolite (*tabu*). This leads to a cycle of "Conceptual Debt" and financial anxiety.',
        goals: '### Modernizing Financial Transparency\nOur goal was to **eliminate the friction of entry**. We aimed to build a tool that requires: \n1.  **Zero Installation:** Lives in WhatsApp.\n2.  **Zero Learning Curve:** Uses natural language (Chat).\n3.  **Group-Centric:** Solves the "Split Bill" awkwardness by acting as a neutral third-party automated ledger.\n\nUltimately, we wanted to make financial accountability transparent, accountable, and socially painless.',
        lessons: '### Aligning Vision under Pressure\nThe biggest struggle wasn\'t the code; it was the people. Formed on the spot at the offline event, our team had conflicting visions. I learned that **leadership is about listening**. We spent the first few hours just aligning our "North Star" before writing a single line of code. This taught me that a unified team with a "Good Enough" MVP beats a disjointed team with perfect code. We validated our idea directly with users during the event, proving that **Feedback Loops > Assumptions**.',
        year: '2023',
        features: [
            { title: 'Information-to-Insight', description: 'Converts raw chat logs ("Nasi goreng 15k") into structured financial data.' },
            { title: 'Invisible Banking', description: 'Zero-install interface via WhatsApp for frictionless daily logging.' },
            { title: 'The "Nagging" Bot', description: 'Automated reminders for Split Bills so you don\'t have to be the bad guy.' },
            { title: 'Hybrid Experience', description: 'Real-time sync between WhatsApp (Input) and Web Dashboard (Analytics).' },
            { title: 'Visual Wealth', description: '3D animated charts and budget optimization tools built with Next.js.' },
            { title: 'Group Centric', description: 'Designed for "Anak Kos" and committees to manage shared funds transparently.' }
        ],
        team: [
            { name: 'Ageng Putra Pratama', role: 'Lead Developer' },
            { name: 'Team Elevate', role: 'Product & Design' }
        ],
        spotlight: '🏆 2nd Place Winner at Garuda Spark Hackathon (Jagoan Hosting x Markas)',
        media: [
            { title: 'Winner Announcement', url: 'https://www.instagram.com/p/DTANfgiD1Ac/', outlet: 'Instagram' }
        ],
        category: 'Fintech • Generative AI'
    },
    {
        id: 'tair',
        slug: 'tair',
        title: 'T-Air - From Rookie to Top 3 (DePIN)',
        shortDescription: '3rd Place Winner at PinGo Web3 Hackathon: A DePIN solution for democratizing air quality data on TON Blockchain.',
        fullDescription: `### The "Solo Leveling" Moment
Participating in the **PinGo Web3 Hackathon** wasn't just a competition; it felt like a real-life *RPG Quest*. Stepping into the dungeon of Web3 development with tight deadlines and high stakes, I was a rookie facing an imposing boss: The complexity of Blockchain integration. But this pressure cooker environment became the catalyst for one of my most rapid 'Level Ups' as a developer. We didn't just code; we survived.

![PinGo Hackathon Banner](/images/bannerpingodemoday.jpg)
*The Arena: PinGo Web3 Hackathon Demo Day. The atmosphere was charged with the energy of innovators building on the TON Blockchain.*

### 1. The Fog of War (The Problem)
Data from **Tempo.com** reveals a grim reality: Jakarta and Surabaya frequently rank among the world's most polluted cities. But the real enemy isn't just the smog; it's the *blindness*.
Government monitoring stations are powerful but sparse—like having only one watchtower for an entire kingdom. This creates a "Fog of War" where toxic PM2.5 spikes in residential areas go undetected. We realized that without granular, hyper-local information, citizens are fighting an invisible enemy blindfolded.

### 2. Enter T-Air: The Legendary Weapon
We crafted **T-Air** to turn the tide. It's not just an IoT device; it's a DePIN (Decentralized Physical Infrastructure Network) artifact. We asked: *What if every home could be a watchtower?*

By transforming affordable ESP32 devices into **'Mining Nodes'**, we empower citizens to become part of the solution.
*   **Proof of Location:** The system validates that data is coming from real coordinates, not a bot.
*   **Mining Economy:** Users don't just measure air quality; they *mine* it. Every valid byte of data sent to the network is rewarded with **$TAIR tokens** on the **TON Blockchain**.
It’s an ecosystem where helping the planet pays off—literally.

### 3. The Hardware Grind (Crafting Phase)
Building the physical node was our first grind. We needed something robust yet cheap enough for mass adoption. We integrated **MQ-135** sensors for gas detection with **ESP32** for Wi-Fi capabilities.
It wasn't a sleek Apple product; it was a humble "Common Item" crafted from spare parts and exposed wires context. But it worked. It streamed real-time gas levels to our smart contracts, proving that you don't need expensive gear to make an impact.

### 4. The Boss Fight: Demo Day
The coding phase was intense, but the real boss fight was the Pitch. We had to explain a complex DePIN architecture (IoT + Blockchain + Tokenomics) to judges in just a few minutes.
*   **The Challenge:** "Why Blockchain?" they asked.
*   **The Critical Hit:** "Because trust matters," we answered. "In a centralized server, I can fake the data. On-chain, the data is immutable."
I felt isolated initially, struggling to connect the dots. But using the **PinGo** Layer 2 stack provided the 'skill books' we needed. We iterated fast, pivoting our smart contracts overnight to handle the high throughput of sensor data.

![Pitching T-Air](/images/pichingpingo.jpg)
*The Boss Fight: Pitching T-Air to the judges and investors. We demonstrated how we combine simple IoT hardware with complex blockchain validation.*

### Victory & Legendary Loot
Against the odds, our hard work paid off. We secured **3rd Place**, winning $500 and a **PinGo Mining Machine**.

![The Legendary Loot](/images/pingo-mining.jpeg)
*The Legendary Loot: The PinGo Mining Machine we won. This isn't just a trophy; it's a powerful tool that allows us to explore the deeper ecosystem of DePIN computing.*

![Award Ceremony](/images/awardpingodemoday.png)
*Victory Moment: Receiving the award. This victory proved that even with minimal time, a focused vision can solve massive real-world problems.*

This loot represents the next chapter. With the Mining Machine, we can now validate transactions on the network ourselves, moving from mere participants to infrastructure providers. The quest isn't over; it's just beginning.`,
        techStack: ['React + Vite', 'TON SDK', 'Tact (Smart Contract)', 'Node.js (Serverless)', 'MongoDB', 'ESP32 (IoT)', 'Telegram Mini App'],
        image: '/images/tair/header.jpg',
        demoUrl: 'https://t.me/TonairBot',
        githubUrl: 'https://github.com/pratama404/tair',
        problem: '### The "Blind" Map\nImagine playing an RPG map where 90% of the area is covered in "Fog of War." That is Jakarta\'s air quality monitoring today. Government stations are too few and far between. We noticed that high pollution in residential areas often goes undetected because the nearest sensor is kilometers away. This lack of granular data makes it impossible for citizens to know if they are breathing poison right in their own homes.',
        goals: '### DePIN: Decentralized Power\nOur Quest Goal was specific: **Democratize Data Ownership**. We wanted to build a system where:\n1.  **Low Barrier:** Anyone with $10 (ESP32) can join the network.\n2.  **Play-to-Earn (Sort of):** Incentivize contributions with $TAIR tokens.\n3.  **Trustless:** Data validity is verified effectively on-chain.\n\nWe aimed to prove that DePIN isn\'t just a buzzword, but a viable solution for environmental monitoring.',
        lessons: '### Speed & Iteration (Agility)\nAs a newcomer to the Web3 hackathon scene, I learned that **Perfect is the enemy of Done**. In a 48-hour raid, you can\'t build a cathedral. You build a fortress. We pivoted multiple times, simplified our smart contracts, and focused heavily on the "Proof of Concept." Winning the PinGo Mining Machine was the cherry on top, giving us the actual hardware to continue our DePIN journey.',
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
        spotlight: '🏆 3rd Place Winner at PinGo Web3 Hackathon 2025 ($500 & PinGo Mining Machine Prize)',
        media: [
            { title: 'Pitch Video', url: 'https://youtu.be/0hnBXlRmM1k', outlet: 'YouTube' },
            { title: 'PinGo Demo Day', url: 'https://x.com/PinGoAI/status/1996157669879722290/video/1', outlet: 'Twitter' }
        ],
        category: 'DePIN • IoT System'
    }
];
