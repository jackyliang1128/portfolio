export type NavigationLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type Profile = {
  name: string
  role: string
  location: string
  email: string
  availability: string
  tagline: string
  about: string[]
  resumeUrl: string
  navigation: NavigationLink[]
  socials: SocialLink[]
}

export type Project = {
  id: string
  name: string
  tier: 'featured' | 'supporting'
  stack: string[]
  summary: string
  details: string[]
  sourceUrl?: string
  demoUrl?: string
  demoLabel?: string
  primaryImage?: ProjectImage
  gallery?: ProjectImage[]
}

export type Experience = {
  role: string
  organization: string
  period: string
  contribution: string
}

export type Education = {
  degree: string
  institution: string
  period: string
}

export const profile: Profile = {
  name: 'Jacky Liang',
  role: 'Full-Stack Software Engineer',
  location: 'Vancouver, BC',
  email: 'jackyliang1128@gmail.com',
  availability: 'Open to software engineering opportunities.',
  tagline: 'I build full-stack software that turns real workflows into reliable, usable products.',
  about: [
    'My work spans product interfaces, REST APIs, relational data, automated testing, and cloud delivery.',
    'Before computer science, I trained and worked as a mechanical engineer—a background that still shapes how I break down systems and build for reliability.',
  ],
  resumeUrl: '/resume/Jacky_Resume.pdf',
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/jackyliang1128' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jackyyliang/' },
    { label: 'Resume', href: '/resume/Jacky_Resume.pdf' },
  ],
}

export const projects: Project[] = [
  {
    id: 'loyalty-rewards',
    name: 'Loyalty Rewards Platform',
    tier: 'featured',
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS'],
    summary:
      'A loyalty platform used by a Vancouver salon to manage customer points, staff check-ins, and reward redemption.',
    details: [
      'Designed relational data models and REST APIs for customers, point transactions, rewards, and business operations.',
      'Implemented JWT authentication and role-based workflows for administrators, employees, and customers.',
      'Deployed the application on AWS with an automated delivery workflow.',
    ],
    demoUrl: 'https://app.sparklenailsvancouver.com/demo',
    demoLabel: 'Try Demo',
    primaryImage: {
      src: '/projects/loyalty-dashboard.webp',
      alt: 'Loyalty Rewards demo dashboard showing sample customer and points activity',
      width: 1440,
      height: 1000,
      caption: 'Admin dashboard · demo data',
    },
    gallery: [
      {
        src: '/projects/loyalty-checkin.webp',
        alt: 'Employee check-in screen with a sample phone number keypad',
        width: 1440,
        height: 1000,
        caption: 'Employee check-in · demo data',
      },
      {
        src: '/projects/loyalty-rewards.webp',
        alt: 'Customer rewards screen showing sample rewards and point costs',
        width: 1440,
        height: 1000,
        caption: 'Customer rewards · demo data',
      },
    ],
  },
  {
    id: 'return-to-office',
    name: 'Return to the Office',
    tier: 'featured',
    stack: ['JavaScript', 'Phaser 3', 'Vite', 'Vercel'],
    summary:
      'A browser survival game where players battle office-themed enemies, collect upgrades, and survive escalating waves.',
    details: [
      'Organized gameplay into modular scenes and reusable player, enemy, boss, and pickup entities.',
      'Built reusable combat and upgrade systems for targeting, projectiles, and stacked effects.',
      'Implemented XP progression and configurable difficulty that escalates throughout a run.',
    ],
    sourceUrl: 'https://github.com/jackyliang1128/office-survival-game',
    demoUrl: 'https://return-to-the-office.vercel.app/',
    demoLabel: 'Play Game',
    primaryImage: {
      src: '/projects/office-gameplay.webp',
      alt: 'Return to the Office gameplay with the player surrounded by office-themed enemies',
      width: 1280,
      height: 680,
      caption: 'Active browser gameplay',
    },
    gallery: [
      {
        src: '/projects/office-upgrade.webp',
        alt: 'Return to the Office level-up screen with three upgrade choices',
        width: 1280,
        height: 680,
        caption: 'Upgrade selection during a run',
      },
    ],
  },
  {
    id: 'outdoor-activity',
    name: 'Outdoor Activity Management System',
    tier: 'supporting',
    stack: ['Java', 'SQL', 'Oracle'],
    summary:
      'A Java and Oracle application for organizing hiking trails, campsites, weather records, and outdoor trips.',
    details: [
      'Modeled relationships across users, trails, campsites, weather records, reviews, and photos.',
      'Connected interactive Java UI panels to database CRUD operations.',
      'Enforced input validation and database constraints to keep records consistent.',
    ],
    sourceUrl: 'https://github.com/jackyliang1128/Outdoor-Activity-Management-System',
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    tier: 'supporting',
    stack: ['Java', 'Swing', 'JUnit', 'JSON'],
    summary:
      'A desktop fitness tracker for building workout plans, recording exercises, and saving workout history.',
    details: [
      'Designed object-oriented models for exercises and personalized workout plans.',
      'Implemented JSON persistence to save and restore workout data.',
      'Tested core logic, edge cases, and exception handling with JUnit.',
    ],
    sourceUrl: 'https://github.com/jackyliang1128/Fitness-Tracker',
  },
]

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    organization: 'BC Liquor Distribution Branch',
    period: 'Jan. 2026 – Aug. 2026',
    contribution:
      'Built Drupal features and reusable CI/CD workflows across enterprise applications, reducing expected production deployment downtime from four hours to 30 minutes.',
  },
  {
    role: 'Software Development Engineer in Test',
    organization: 'OnTraccr Technologies',
    period: 'Sep. 2025 – Dec. 2025',
    contribution:
      'Built Jest and Playwright regression suites and integrated them into Bitbucket CI/CD for automated checks on every build.',
  },
  {
    role: 'Undergraduate Teaching Assistant',
    organization: 'University of British Columbia',
    period: 'Jul. 2025 – Present',
    contribution:
      'Guide students through Java, object-oriented design, testing, and debugging in labs and office hours.',
  },
  {
    role: 'Design Engineer',
    organization: 'FPS Food Process Solutions',
    period: 'Nov. 2023 – Sep. 2024',
    contribution:
      'Led industrial equipment design work while coordinating requirements and manufacturability across international teams and suppliers.',
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of British Columbia',
    period: 'Sept. 2024 – May 2028',
  },
  {
    degree: 'Bachelor of Applied Science in Mechanical Engineering',
    institution: 'University of British Columbia',
    period: 'Graduated 2023',
  },
]
