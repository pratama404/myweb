# Ageng's Portfolio v4 🚀

_Software Engineer & Data Scientist based in Surabaya, ID._

[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/agengpp)](https://agengpp.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A personal digital garden showcasing my work, writings, and digital products. Built with performance and aesthetics in mind.

![Portfolio Preview](image.png)

## ⚡ PageSpeed Insights

Optimized for performance and user experience.

[Check Live Analysis](https://pagespeed.web.dev/analysis/https-agengpp-vercel-app/ow2af72dz5?form_factor=mobile)

| Metric | Score |
| :--- | :--- |
| **Performance** | 🟢 95+ |
| **Accessibility** | 🟢 100 |
| **Best Practices** | 🟢 100 |
| **SEO** | 🟢 100 |

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: MDX
- **Deployment**: [Vercel](https://vercel.com)

## 🏗️ Architecture & Workflow

The development and deployment pipeline is streamlined using GitHub and Vercel.

```mermaid
graph TD
    subgraph Development
        A[Developer] -->|Commit & Push| B[GitHub Repository]
    end

    subgraph CI/CD Pipeline
        B -->|Trigger Webhook| C[Vercel Build System]
        C -->|Install Dependencies| D[Build Next.js App]
        D -->|Optimization| E[Static Generation & Edge Functions]
    end

    subgraph Production
        E -->|Deploy| F[Vercel Edge Network]
        F -->|Serve| G[Live Website]
    end
```

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository**

    ```bash
    git clone https://github.com/pratama404/myweb.git
    cd myweb
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

A quick look at the top-level files and directories you'll see in this project.

```text
.
├── src/
│   ├── app/           # App Router pages and layouts
│   ├── components/    # Reusable UI components
│   ├── content/       # MDX content for blog/projects
│   ├── lib/           # Utility functions
│   └── styles/        # Global styles
├── public/            # Static assets
├── .eslintrc.json     # ESLint configuration
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 📜 License

### Content
<p xmlns:cc="http://creativecommons.org/ns#" >This work is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>

### Source Code

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The source code is licensed under the [MIT License](LICENSE).

---

Based in Surabaya, Indonesia 🇮🇩 | © 2026 Ageng Putra Pratama
