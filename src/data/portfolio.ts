export type Skill = {
  name: string
  level: string
  percent: number
}

export type SkillGroup = {
  title: string
  icon: string
  skills: Skill[]
}

export type Project = {
  title: string
  tag: string
  description: string
  stack: string[]
  image?: string
  icon?: string
  liveUrl?: string
  repoUrl?: string
}

export type TimelineItem = {
  period: string
  title: string
  description: string
  icon: string
  side: 'left' | 'right'
}

export type Service = {
  icon: string
  title: string
  description: string
}

export type ContactLink = {
  icon: string
  label: string
  value: string
  href: string
}

const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const site = {
  name: 'Gentil Dushime',
  firstName: 'Gentil',
  lastName: 'Dushime',
  eyebrow: 'Software Developer & Founder',
  role: 'Future Software Engineer',
  company: 'BII Technologies',
  email: 'dushimegentil0@gmail.com',
  github: 'https://github.com/gentil015',
  linkedin: 'https://linkedin.com/in/gentildushime',
  whatsapp: 'https://wa.me/250795946213',
  portrait: asset('profile.jpg'),
  typedPhrases: [
    'Building the Future with Software.',
    'Turning Ideas into Intelligent Systems.',
    'Creating Technology that Matters.',
    'Engineering Solutions for Tomorrow.',
  ],
}

export const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '1', label: 'Company Founded' },
]

export const aboutParagraphs = [
  {
    before: "I'm ",
    emphasis: 'Gentil Dushime',
    after:
      ', a software developer based in Rwanda with a deep passion for building systems that matter. My journey began with curiosity about how software shapes the world — and it never stopped.',
  },
  {
    before: 'As the ',
    emphasis: 'founder of BII Technologies',
    after:
      ", I'm laying the foundation for a company that will bridge innovation and impact across Africa and beyond. I believe technology is the most powerful tool for creating real change.",
  },
  {
    before: 'My current path is focused on ',
    emphasis: 'mastering Software Engineering',
    after:
      ', with long-term ambitions in AI, robotics, and automation. Every project I build is a step toward that future.',
  },
]

export const interests = [
  '🧠 AI Enthusiast',
  '🤖 Robotics Vision',
  '⚡ Fast Learner',
  '🌍 Africa-first',
  '🚀 Entrepreneur',
  '🔧 Builder Mindset',
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Fundamentals',
    icon: '💻',
    skills: [
      { name: 'HTML / CSS', level: '82%', percent: 82 },
      { name: 'JavaScript', level: '76%', percent: 76 },
      { name: 'TypeScript', level: '78%', percent: 78 },
      { name: 'Python', level: '70%', percent: 70 },
      { name: 'PHP', level: '68%', percent: 68 },
      { name: 'Java', level: '62%', percent: 62 },
    ],
  },
  {
    title: 'Modern Web',
    icon: '⚡',
    skills: [
      { name: 'Next.js', level: '86%', percent: 86 },
      { name: 'NestJS', level: '80%', percent: 80 },
      { name: 'React', level: '78%', percent: 78 },
      { name: 'Node.js', level: '74%', percent: 74 },
      { name: 'PostgreSQL', level: '76%', percent: 76 },
      { name: 'MySQL', level: '66%', percent: 66 },
      { name: 'MongoDB', level: '64%', percent: 64 },
    ],
  },
  {
    title: 'Mobile & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Mobile App Development', level: '70%', percent: 70 },
      { name: 'Git & GitHub', level: '78%', percent: 78 },
      { name: 'VS Code', level: '84%', percent: 84 },
      { name: 'Database Design', level: '72%', percent: 72 },
      { name: 'Windows Server', level: '68%', percent: 68 },
      { name: 'Linux', level: '62%', percent: 62 },
    ],
  },
  {
    title: 'Future Focus',
    icon: '🔮',
    skills: [
      { name: 'Artificial Intelligence', level: 'Active', percent: 45 },
      { name: 'Machine Learning', level: 'Learning', percent: 35 },
      { name: 'Robotics', level: 'Vision', percent: 20 },
      { name: 'Automation', level: 'Growing', percent: 50 },
      { name: 'Cloud Systems', level: 'Next', percent: 30 },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'BII LocalFinder',
    tag: 'First Project · Full-Stack Web App',
    description:
      'My first and current flagship project: a location-based provider discovery platform with advanced filtering, real-time search, provider comparisons, and a responsive dark-mode-first interface.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL'],
    icon: '🗺️',
    liveUrl: 'https://biilocalfinder.com/',
    repoUrl: 'https://github.com/gentil015/BII-LocalFinder/',
  },
]

export const timeline: TimelineItem[] = [
  {
    period: 'Now — 2026',
    title: 'Mastering the Fundamentals',
    description:
      'Deepening expertise in software engineering, building real-world projects, and preparing to pursue a top-tier university degree in Computer Science or Software Engineering.',
    icon: '📚',
    side: 'left',
  },
  {
    period: '2026 — 2030',
    title: 'University & Global Exposure',
    description:
      'Studying Software Engineering at a world-class institution. Networking with global innovators, contributing to research, and scaling BII Technologies into a recognized brand.',
    icon: '🎓',
    side: 'right',
  },
  {
    period: '2030 — 2033',
    title: 'AI & Robotics Research',
    description:
      'Diving deep into artificial intelligence and robotics. Building systems that can think, adapt, and automate complex tasks — bridging hardware and intelligent software.',
    icon: '🤖',
    side: 'left',
  },
  {
    period: '2033+',
    title: 'BII Technologies — Global Scale',
    description:
      'Growing BII Technologies into a full technology company delivering AI-powered products and robotic solutions that create real economic opportunity across Africa and beyond.',
    icon: '🌍',
    side: 'right',
  },
]

export const services: Service[] = [
  {
    icon: '🌐',
    title: 'Website Development',
    description:
      'Responsive, fast-loading websites built with modern HTML, CSS, and JavaScript. Designed to convert and impress.',
  },
  {
    icon: '⚡',
    title: 'Web App Development',
    description:
      'Full-featured web applications with PHP backends, MySQL databases, authentication, and dynamic interfaces.',
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    description:
      'Normalized, efficient database schemas. ERD modeling, query optimization, and clean data architecture.',
  },
  {
    icon: '🐘',
    title: 'PHP Development',
    description:
      'Custom PHP systems using PDO, OOP principles, secure session management, and RESTful logic.',
  },
  {
    icon: '🐍',
    title: 'Python Automation',
    description:
      'Scripts and automation tools that save time — file processing, web scraping, scheduled tasks, and data workflows.',
  },
  {
    icon: '🔧',
    title: 'Technical Support',
    description:
      'Server configuration, Windows Server administration, network troubleshooting, and system maintenance.',
  },
]

export const contactLinks: ContactLink[] = [
  { icon: '✉️', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: '💻', label: 'GitHub', value: 'github.com/gentil015', href: site.github },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/gentildushime', href: site.linkedin },
  { icon: '💬', label: 'WhatsApp', value: '+250 795 946 213', href: site.whatsapp },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Vision', href: '#vision' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]
