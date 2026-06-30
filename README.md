# Jacky Liang Portfolio

React, TypeScript, Vite, and Tailwind CSS portfolio website for showcasing full-stack software engineering work.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
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
- Project case-study cards
- Skill categories
- Experience entries
- Education entries

This keeps content updates separate from layout components.

## Pending setup

- Add GitHub, resume, and project source links.
- Choose and connect a static contact form provider such as Formspree, Web3Forms, or Getform.
- Choose a deployment target, likely GitHub Pages or Vercel.
