export type NavigationLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href?: string
  status: 'ready' | 'pending'
}

export type ProfileHighlight = {
  metric: string
  title: string
  description: string
}

export type Profile = {
  name: string
  role: string
  location: string
  email: string
  summary: string
  availability: string
  navigation: NavigationLink[]
  socials: SocialLink[]
  highlights: ProfileHighlight[]
}

export type Project = {
  name: string
  stack: string[]
  summary: string
  impact: string
  highlights: string[]
  sourceUrl?: string
  demoUrl?: string
  showcasePlan: string
}

export type SkillCategory = {
  name: string
  skills: string[]
}

export type Experience = {
  role: string
  organization: string
  period: string
  summary: string
  highlights: string[]
}

export type Education = {
  degree: string
  institution: string
  period: string
}

export const profile: Profile = {
  name: 'Jacky Liang',
  role: 'Computer Science Student & Full-Stack Developer',
  location: 'Vancouver, BC',
  email: 'jackyliang1128@gmail.com',
  summary:
    'UBC computer science student building production web platforms, automated regression pipelines, and applied software systems across web, testing, data, and hardware-adjacent domains.',
  availability: 'Seeking full-stack software engineering opportunities.',
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'GitHub', href: undefined, status: 'pending' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jackyliang-/', status: 'ready' },
    { label: 'Resume', href: undefined, status: 'pending' },
  ],
  highlights: [
    {
      metric: 'Production',
      title: 'Full-stack delivery',
      description:
        'Building Drupal, PHP, PostgreSQL, Azure App Service, and authentication features for public enterprise web properties.',
    },
    {
      metric: 'CI/CD',
      title: 'Quality automation',
      description:
        'Integrating Jest and Playwright suites into delivery pipelines to catch regressions and support continuous delivery.',
    },
    {
      metric: '<0.15s',
      title: 'Real-time systems mindset',
      description:
        'Engineered a sensor glove control pipeline that met low-latency robotic arm response requirements.',
    },
  ],
}

export const projects: Project[] = [
  {
    name: 'Outdoor Activity Management System',
    stack: ['Java', 'SQL', 'Oracle'],
    summary:
      'A database-backed application for managing hiking trails, campsites, weather logs, and trip records through interactive UI panels.',
    impact:
      'Demonstrates relational modeling, backend CRUD design, input validation, and data integrity across a 16-schema Oracle database.',
    highlights: [
      'Designed tables, relationships, and seed data for a stable backend foundation.',
      'Connected Java UI panels to Oracle CRUD operations for viewing, updating, and managing outdoor activity data.',
      'Enforced constraints and validation rules to keep user data reliable.',
    ],
    showcasePlan: 'Use as a case-study card with schema notes, screenshots, and a GitHub link when available.',
  },
  {
    name: 'FitTrack',
    stack: ['Java', 'JUnit', 'Swing', 'Git'],
    summary:
      'A desktop fitness tracker for recording activities, personalizing workout plans, and visualizing user progress.',
    impact:
      'Shows object-oriented design, persistence, test coverage, and iterative feature development in a Java application.',
    highlights: [
      'Architected an object-oriented domain model for activities, plans, and progress tracking.',
      'Implemented JSON persistence for loading and saving workout history.',
      'Built comprehensive JUnit coverage across statements, branches, functions, edge cases, and exceptions.',
    ],
    showcasePlan: 'Best showcased with screenshots, repository notes, and a short walkthrough GIF later.',
  },
  {
    name: 'WCAG Guidelines Checker',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    summary:
      'A React accessibility evaluation tool that checks web content against WCAG-inspired rules and provides real-time remediation suggestions.',
    impact:
      'Directly relevant to frontend quality because it combines UI development, content parsing, and accessible user feedback.',
    highlights: [
      'Built modular JavaScript analysis logic for identifying accessibility violations.',
      'Presented findings through a responsive React interface optimized for rapid scanning.',
      'Focused suggestions on actionable remediation rather than generic pass/fail output.',
    ],
    showcasePlan: 'Strong candidate for a future hosted demo because it is frontend-focused and easy to deploy.',
  },
  {
    name: 'Sensor Glove Capstone Project',
    stack: ['Python', 'C#', 'OpenCV', '.NET'],
    summary:
      'A wearable control system enabling researchers to remotely operate a robotic arm with precise gesture input.',
    impact:
      'Highlights applied engineering, real-time computer vision, cross-language integration, and performance tuning.',
    highlights: [
      'Built an OpenCV gesture detection pipeline to process sensor input in real time.',
      'Implemented the communication layer between the glove and robotic arm.',
      'Tuned gesture-classification algorithms to meet latency and error-rate requirements.',
    ],
    showcasePlan: 'Best showcased with photos, architecture diagrams, and performance metrics instead of a web demo.',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Python', 'SQL', 'C++', 'C#', 'R'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Responsive UI', 'Accessibility', 'Tailwind CSS', 'Playwright'],
  },
  {
    name: 'Backend & Data',
    skills: ['Drupal 11', 'PHP 8.3+', 'PostgreSQL', 'Oracle SQL', 'Java/Spring Boot', '.NET'],
  },
  {
    name: 'Cloud, Testing & Tools',
    skills: ['Jest', 'Docker', 'AWS', 'Azure App Service', 'Sentry', 'Git', 'Bitbucket CI/CD'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    organization: 'BC Liquor Distribution Branch',
    period: 'Jan. 2026 - Current',
    summary:
      'Building production website features and deployment automation for enterprise public web platforms.',
    highlights: [
      'Supports bcldb.com, cannabis content pages, wholesale.bcldb.com, and miniOrange authentication using Drupal 11, PHP 8.3+, PostgreSQL, and Azure App Service.',
      'Designed automated deployment delivery that reduced expected production downtime from 4 hours to 30 minutes.',
      'Developing CI/CD automation for a Java/Spring Boot B2B shipping-rate calculation service.',
    ],
  },
  {
    role: 'Software Development Engineer in Test',
    organization: 'OnTraccr Technologies',
    period: 'Sep. 2025 - Dec. 2025',
    summary:
      'Created automated regression coverage and supported delivery quality through test suites, Jira reporting, and PR review.',
    highlights: [
      'Developed backend Jest suites and end-to-end Playwright tests for bug analysis and edge-case discovery.',
      'Integrated tests into Bitbucket CI/CD to run automated regression checks on every build.',
      'Collaborated in sprint planning and stand-ups to scope product features and critical QA tasks.',
    ],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    organization: 'University of British Columbia',
    period: 'Jul. 2025 - Current',
    summary:
      'Guiding students through Java programming, object-oriented design, debugging, testing, and modular code practices.',
    highlights: [
      'Facilitated lab sessions and office hours for Java programming exercises.',
      'Reviewed student submissions and provided feedback on unit testing, modularity, and best practices.',
      'Collaborated with course staff to improve instructional materials and learning outcomes.',
    ],
  },
  {
    role: 'Design Engineer',
    organization: 'FPS Food Process Solutions',
    period: 'Nov. 2023 - Sep. 2024',
    summary:
      'Led mechanical design work for industrial fryer systems while coordinating requirements, trade-offs, and manufacturability.',
    highlights: [
      'Collaborated with international engineering teams and suppliers to refine requirements and resolve design trade-offs.',
      'Produced detailed CAD models and technical drawings for assembly, verification, and production review.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of British Columbia',
    period: 'Sept. 2024 - May 2027',
  },
  {
    degree: 'Bachelor of Applied Science in Mechanical Engineering',
    institution: 'University of British Columbia',
    period: 'Graduated 2023',
  },
]
