# Jacky Liang Portfolio

React, TypeScript, Vite, and custom CSS portfolio website for showcasing full-stack software engineering work.

## Tech stack

- React
- TypeScript
- Vite
- Custom responsive CSS
- Oxlint

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Content model

Portfolio content lives in `src\data\profile.ts` as typed TypeScript data:

- Profile summary and social links
- Featured and supporting project cards
- Real project screenshots and engineering details
- Experience entries
- Education entries

This keeps content updates separate from layout components.

## Deployment checklist

- Deploy the production build to Vercel.
- Connect and verify the custom domain.
- Confirm the resume and all external project links from the deployed site.
- Add the stable custom-domain URL to the resume.
