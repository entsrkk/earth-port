# Earth Port

Personal portfolio website of **Niti Surakongka (Earth)**, a Junior Full Stack Developer based in Bangkok, Thailand. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and daisyUI 5, the website presents professional experience, featured projects, and technical skills through a responsive bilingual interface focused on readability, accessibility, and performance.

## Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack), [next-intl](https://next-intl.dev/) |
| Language | TypeScript, React 19 |
| Styling / UI | Tailwind CSS 4, daisyUI 5, Mantine (`@mantine/core`, `@mantine/hooks`) |
| Typography | Noto Sans Thai, Sarabun, Outfit |
| Animation | AOS (Animate On Scroll), `react-type-animation` |
| Icons | `react-icons` |
| HTTP | Axios |
| Monitoring | Vercel Speed Insights |
| Linting | ESLint (`eslint-config-next`) |

## Features

- **Hero section** — animated introduction with typewriter effect
- **Experience timeline** — work history at CHAZ Insurance Brokers and EventTech.ai
- **Curated projects grid** — featured projects pulled from typed portfolio data
- **All projects page** — full list view with tech badges and live/GitHub links
- **Project detail pages** — clean dynamic routes (`/projects/[slug]`) with an image preview modal
- **Tech stack showcase** — visual grid of tools and languages used
- **Contact page** — quick links to Facebook, Line, phone, GitHub, and LinkedIn
- **Bilingual interface** — English is the default at unprefixed URLs, while Thai uses the `/th` prefix
- **Locale behavior** — locale routing is URL-driven with `next-intl`; `NEXT_LOCALE` is a session cookie and locale prefixes are added only when needed
- Fully responsive interface with AOS scroll animations and optimized Thai/English typography using Noto Sans Thai, Sarabun, and Outfit

## Project Structure

```
messages/                   # next-intl JSON message catalogs (en, th)
src/
├── app/                    # Next.js App Router pages
│   ├── [locale]/            # Localized layout and application routes
│   │   ├── contact/         # Contact page
│   │   └── projects/        # Projects list + [slug] detail pages
│   ├── global-not-found.tsx # English fallback for unmatched root routes
│   └── sitemap.ts           # Localized sitemap metadata route
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── providers/            # AOS provider
│   ├── sections/              # Hero, MyExperiences, ProjectsGrid, TechStack
│   └── ui/                    # Reusable UI: Button, ProjectCard, TechBadge, etc.
├── data/                   # Canonical portfolio data and localized content
├── i18n/                   # next-intl routing, navigation, request, and metadata helpers
├── lib/                    # Data accessors, tech icons, and theme utilities
├── proxy.ts                # Locale resolution and legacy route redirects
└── types/                  # Shared TypeScript types (Project, etc.)
```

## Content

Canonical project and experience data live in [`src/data/projects.ts`](src/data/projects.ts) and [`src/data/experiences.ts`](src/data/experiences.ts). Localized structured copy lives in [`src/data/project-copy.ts`](src/data/project-copy.ts) and [`src/data/experience-copy.ts`](src/data/experience-copy.ts). Shared interface messages live in [`messages/en.json`](messages/en.json) and [`messages/th.json`](messages/th.json).

## Environment

Copy `.env.example` to `.env.local` for local overrides. Set `SITE_URL` to the public origin when deploying outside Vercel so canonical URLs and the sitemap never point to localhost. Vercel deployments use `VERCEL_PROJECT_PRODUCTION_URL` automatically.

## Contact

- GitHub: [@iE4rthDEV](https://github.com/iE4rthDEV)
- LinkedIn: [Niti Surakongka](https://www.linkedin.com/in/nitisurakongka/)

## License

This project is personal portfolio source code. Feel free to explore the code for reference, but please don't reuse the personal content/branding as your own.
