/**
 * Portfolio projects — add new entries here.
 *
 * Fields:
 * - id: unique slug
 * - title: project name
 * - description: short summary
 * - tech: string[] tags
 * - liveUrl: optional live demo / site
 * - demoUrl: optional demo video
 * - githubUrl: optional repository
 * - accent: hex used for placeholder thumbnail gradient
 */
export const projects = [
  {
    id: 'ai-study',
    title: 'AI Study',
    description:
      'An intelligent educational platform for students: upload PDFs, chat with document content, auto-generate adapted exercises (MCQ and open-ended), and learn through a modern multi-device interface.',
    tech: ['React', 'AI / LLM', 'PDF Processing', 'Chatbot'],
    liveUrl: null,
    demoUrl: 'https://drive.google.com/file/d/1w38OOk1IlhXDO9ZFqbdB-t8tLMs3NPB1/view',
    githubUrl: null,
    accent: '#2B7FFF',
  },
  {
    id: 'mobistack',
    title: 'Mobistack',
    description:
      'Internal web app for Mobelite teams to report technical issues, propose and approve solutions, and help admins spot the most active contributors helping their colleagues.',
    tech: ['React', 'Node.js', 'Team Collaboration'],
    liveUrl: null,
    demoUrl: 'https://drive.google.com/file/d/1I0-mZfzzYXOjslzuwoObaE3H9OpOtGcI/view',
    githubUrl: null,
    accent: '#38BDF8',
  },
  {
    id: 'smarthire',
    title: 'SmartHire',
    description:
      'AI-assisted recruitment platform for companies: upload resumes and job posts, smart candidate-job matching, personalized interview questions, and efficient application evaluation.',
    tech: ['React', 'AI Matching', 'NLP'],
    liveUrl: 'https://www.smarthireapp.me/',
    demoUrl: 'https://drive.google.com/file/d/1uFhPrd7hOX6Lnr72Q-eSzLEGeJ8EFrvz/view',
    githubUrl: null,
    accent: '#6366F1',
  },
  {
    id: 'next-you',
    title: 'Next You',
    description:
      'AI-powered fitness platform for mobile and web. Connects smart mirrors and wearables for personalized coaching, tailored training/nutrition plans, and live form feedback via pose estimation.',
    tech: ['React Native', 'Node.js', 'FastAPI', 'MongoDB', 'Redis', 'AWS'],
    liveUrl: null,
    demoUrl: 'https://drive.google.com/file/d/1xOqFddSUv7-3Bd1rv4qyDhEkGXjiy42f/view',
    githubUrl: null,
    accent: '#22D3EE',
  },
  {
    id: 'brightpath',
    title: 'BrightPath',
    description:
      'Online learning app with interactive courses, live streaming classes, progress tracking, Flouci payment integration, and automatic notifications for payments and class reminders.',
    tech: ['Flutter', 'React', 'Node.js', 'MongoDB', 'Flouci'],
    liveUrl: null,
    demoUrl: 'https://drive.google.com/file/d/1KLncOhmi5oOvcZq77kB4SFZv9ruAtpDH/view',
    githubUrl: null,
    accent: '#F59E0B',
  },
  {
    id: 'jci-attendance',
    title: 'Attendance & Events Platform',
    description:
      'Mobile and backend platform for JCI Bembla: member attendance, events, and task tracking with role-based auth (admin/member) and clear participation dashboards.',
    tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
    liveUrl: null,
    demoUrl: null,
    githubUrl: null,
    accent: '#34D399',
  },
  {
    id: 'skilllink',
    title: 'SkillLink',
    description:
      'Intelligent recruitment platform: companies post jobs, candidates apply, NLP scores resume–job fit, and a dynamic MCQ system tests matching candidates’ skills.',
    tech: ['React', 'Flutter', 'Node.js', 'Express', 'MongoDB', 'NLP'],
    liveUrl: null,
    demoUrl: 'https://drive.google.com/file/d/1ikccSnBTbcxGyia-mmRJD0ierQh9YaAL/view',
    githubUrl: null,
    accent: '#A78BFA',
  },
  {
    id: 'agile-ai-pm',
    title: 'AI-Powered Agile PM Platform',
    description:
      'Agile project management with AI automation and full DevOps: architecture recommendations via NLP/RAG/LLM, sprint & task generation with Gemini, real-time Socket.IO collaboration, Docker, AWS, and GitHub Actions CI/CD.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
    liveUrl: 'https://dualityagency.me/',
    demoUrl: null,
    githubUrl: null,
    accent: '#2B7FFF',
  },
]
