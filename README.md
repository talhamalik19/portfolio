# Talha Malik — Full Stack Developer

My personal portfolio, built with Next.js, React, and TypeScript. It showcases my work across e-commerce, corporate websites, and point-of-sale systems, alongside my experience, skills, education, and certifications.

[GitHub](https://github.com/talhamalik19) · [LinkedIn](https://www.linkedin.com/in/talhamalik19) · [Email](mailto:talhamalick19@gmail.com) · [Resume](public/cv.pdf)

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Dark mode by default, with a light/dark switch that remembers your preference.
- Project filtering by category and individual project detail pages.
- Experience, technical skills, education, and certifications.
- Downloadable PDF resume.
- SMTP contact form with client and server validation, sending status, and success/error feedback.
- Page metadata, social preview image, favicon, and generated sitemap.
- Keyboard navigation, labeled form fields, and reduced-motion support.

## Featured projects

| Project | Overview | Technologies |
| --- | --- | --- |
| [FME Extensions](https://www.fmeextensions.com) | Dynamic e-commerce storefront with performance and Core Web Vitals improvements. | React, Next.js, REST, GraphQL, Magento 2 |
| [Extendons](https://www.extendons.com) | E-commerce website with cart functionality, multiple currencies, and multiple languages. | React, Next.js, REST, GraphQL, Magento 2 |
| [Juice Station](https://juicestation.com.pk) | Responsive corporate website with CMS-managed content. | React, Next.js, TypeScript, Strapi |
| [Baseer POS] | Desktop POS and admin system with offline support, inventory workflows, and real-time synchronization. | React, Next.js, Electron.js, Magento 2, WebSockets |

## Tech stack

The portfolio itself uses:

| Area | Technology |
| --- | --- |
| Framework | Next.js 16, App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, custom CSS |
| Icons | Lucide React |
| Email | Nodemailer, SMTP |
| Typography | Locally hosted Geist |

## Getting started

### Requirements

- Node.js 20.9 or later.
- npm.

### Local development

Run these commands from the project directory:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The website runs without SMTP credentials. Configure them in `.env.local` to enable contact form delivery, then restart the development server.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create the production build and check TypeScript. |
| `npm start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## Environment variables

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | SMTP hostname. Defaults to `smtp.gmail.com`. |
| `SMTP_PORT` | SMTP port. Defaults to `465`. |
| `SMTP_SECURE` | `true` for implicit TLS, typically port `465`; `false` for STARTTLS on port `587`. If omitted, inferred from the port. |
| `SMTP_EMAIL` | SMTP login email and default sender address. |
| `SMTP_USER` | Optional login username; takes precedence over `SMTP_EMAIL` for authentication. |
| `SMTP_PASS` | SMTP password or provider-issued app password. |
| `SMTP_FROM` | Optional sender address authorized by your SMTP provider. |
| `CONTACT_TO_EMAIL` | Recipient for contact form messages. Defaults to the email in `src/lib/data/site.ts`. |
| `NEXT_PUBLIC_SITE_URL` | Full production site URL, used for social metadata and sitemap URLs. |

For Gmail, use an app password for `SMTP_PASS`. If your SMTP username is not an email address, set `SMTP_FROM` to an authorized sender email.

SMTP credentials are read by the server-side `/api/contact` route. The visitor’s email is set as the message’s reply-to address. If sending fails, the form keeps the draft and offers a direct email link.

The site URL helper also supports `SITE_URL`, followed by Vercel’s `VERCEL_PROJECT_PRODUCTION_URL`. Without a configured site URL, the sitemap has no entries.

## Content and customization

| What to update | File |
| --- | --- |
| Personal details, contact links, navigation | [src/lib/data/site.ts](src/lib/data/site.ts) |
| Projects, skills, work highlights, certifications | [src/lib/data/portfolio.ts](src/lib/data/portfolio.ts) |
| Homepage layout, experience, and education copy | [src/app/page.tsx](src/app/page.tsx) |
| Colors, typography, responsive styles | [src/app/globals.css](src/app/globals.css) |
| Page metadata and initial theme | [src/app/layout.tsx](src/app/layout.tsx) |
| Project detail layout | [src/app/case-studies/[slug]/page.tsx](src/app/case-studies/%5Bslug%5D/page.tsx) |
| Downloadable resume | [public/cv.pdf](public/cv.pdf) |
| Social preview and favicon | [public/og-image.svg](public/og-image.svg), [src/app/icon.svg](src/app/icon.svg) |

Project detail routes are generated from `portfolioProjects` in `src/lib/data/portfolio.ts`. Rebuild the application after adding a project.

## Production

```bash
npm run build
npm start
```

Deploy to a hosting environment that supports Next.js with the Node.js runtime and outbound SMTP connections. Add your SMTP settings and set `NEXT_PUBLIC_SITE_URL` to your real site URL before building.

The contact API requires a server runtime; a static-only deployment cannot send contact form messages.

## Font attribution

Geist is included under the [SIL Open Font License](public/fonts/OFL.txt).
