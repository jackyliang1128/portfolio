export type NavigationLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export type TechnicalSkill = {
  name: string
  icons: string[]
}

export type SkillGroup = {
  label: string
  description: string
  skills: TechnicalSkill[]
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
  about: string[]
  skillGroups: SkillGroup[]
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
  about: [
    'I am a Computer Science student at the University of British Columbia with a background in Mechanical Engineering. My path into software started with a curiosity about how things work and evolved into a passion for turning ideas into projects that are useful to the people around me.',
    'I believe software development, at its core, is about problem solving. I enjoy the process of taking something complex, breaking it down, and continuously iterating on the design until I arrive at an innovative and effective solution that is simple and useful.',
    'Outside of software, I enjoy snowboarding, playing ultimate frisbee and volleyball, working out, and spending time outdoors. I am always up for trying something new, especially if it gets me outside.',
  ],
  skillGroups: [
    {
      label: 'Languages',
      description: 'The languages I use to turn ideas into interfaces, APIs, and data-driven applications.',
      skills: [
        { name: 'Java', icons: ['/skills/java.svg'] },
        { name: 'JavaScript', icons: ['/skills/javascript.svg'] },
        { name: 'HTML', icons: ['/skills/html5.svg'] },
        { name: 'CSS', icons: ['/skills/css3.svg'] },
        { name: 'Python', icons: ['/skills/python.svg'] },
        { name: 'PHP', icons: ['/skills/php.svg'] },
        { name: 'SQL', icons: ['/skills/sql.svg'] },
      ],
    },
    {
      label: 'Frameworks',
      description: 'My go-to tools for building full-stack products and interactive browser experiences.',
      skills: [
        { name: 'React', icons: ['/skills/react.svg'] },
        { name: 'Node.js', icons: ['/skills/nodejs.svg'] },
        { name: 'Express', icons: ['/skills/express.svg'] },
        { name: 'Prisma', icons: ['/skills/prisma.svg'] },
        { name: 'Phaser', icons: ['/skills/phaser.png'] },
      ],
    },
    {
      label: 'Testing',
      description: 'Tools I use to catch regressions early and keep important workflows reliable.',
      skills: [
        { name: 'JUnit', icons: ['/skills/junit.svg'] },
        { name: 'Jest', icons: ['/skills/jest.svg'] },
        { name: 'Playwright', icons: ['/skills/playwright.svg'] },
      ],
    },
    {
      label: 'Data, Cloud & Tools',
      description: 'The platforms behind the databases, deployments, and team workflows in my projects.',
      skills: [
        { name: 'PostgreSQL', icons: ['/skills/postgresql.svg'] },
        { name: 'Oracle', icons: ['/skills/oracle.svg'] },
        { name: 'AWS', icons: ['/skills/aws.svg'] },
        { name: 'Azure', icons: ['/skills/azure.svg'] },
        { name: 'Docker', icons: ['/skills/docker.svg'] },
        { name: 'Git', icons: ['/skills/git.svg'] },
        { name: 'Bitbucket', icons: ['/skills/bitbucket.svg'] },
      ],
    },
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
    demoUrl: 'https://app.sparklenailsvancouver.com/demo',
    demoLabel: 'Try Demo',
    primaryImage: {
      src: '/projects/loyalty-dashboard.webp',
      alt: 'Loyalty Rewards demo dashboard showing sample customer and points activity',
      width: 1440,
      height: 1000,
      caption: 'Admin dashboard',
    },
    gallery: [
      {
        src: '/projects/loyalty-checkin.webp',
        alt: 'Employee check-in screen with a sample phone number keypad',
        width: 1440,
        height: 1000,
        caption: 'Employee check-in kiosk',
      },
      {
        src: '/projects/loyalty-rewards.webp',
        alt: 'Customer rewards screen showing sample rewards and point costs',
        width: 1440,
        height: 1000,
        caption: 'Customer rewards page',
      },
      {
        src: '/projects/loyalty-customers.webp',
        alt: 'Loyalty Rewards demo customer management screen with sample customer records',
        width: 1440,
        height: 1000,
        caption: 'Customer management · demo data',
      },
      {
        src: '/projects/loyalty-employees.webp',
        alt: 'Loyalty Rewards demo employee management screen with sample staff accounts',
        width: 1440,
        height: 1000,
        caption: 'Employee access management · demo data',
      },
      {
        src: '/projects/loyalty-business.webp',
        alt: 'Loyalty Rewards demo business screen showing sample services and workers',
        width: 1440,
        height: 1000,
        caption: 'Business services and workers · demo data',
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
    sourceUrl: 'https://github.com/jackyliang1128/office-survival-game',
    demoUrl: 'https://return-to-the-office.vercel.app/',
    demoLabel: 'Play Game',
    primaryImage: {
      src: '/projects/office-titlescreen.webp',
      alt: 'Return to the Office start screen with the game title and Start Game button',
      width: 1727,
      height: 907,
      caption: 'Game start screen',
    },
    gallery: [
      {
        src: '/projects/office-gameplay.webp',
        alt: 'Return to the Office gameplay with the player surrounded by office-themed enemies',
        width: 1280,
        height: 680,
        caption: 'Active browser gameplay',
      },
      {
        src: '/projects/office-upgrade.webp',
        alt: 'Return to the Office level-up screen with three upgrade choices',
        width: 1280,
        height: 680,
        caption: 'Upgrade selection during a run',
      },
      {
        src: '/projects/office-boss.webp',
        alt: 'Return to the Office gameplay showing a boss incoming warning for the Striker',
        width: 1733,
        height: 919,
        caption: 'Boss encounter warning',
      },
      {
        src: '/projects/office-gameover.webp',
        alt: 'Return to the Office game over screen showing the final score and run statistics',
        width: 1735,
        height: 920,
        caption: 'End-of-run results',
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
    sourceUrl: 'https://github.com/jackyliang1128/Outdoor-Activity-Management-System',
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    tier: 'supporting',
    stack: ['Java', 'Swing', 'JUnit', 'JSON'],
    summary:
      'A desktop fitness tracker for building workout plans, recording exercises, and saving workout history.',
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
