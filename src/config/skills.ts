import { SkillsData } from '@/types';

export const SKILLS_DATA: SkillsData = {
  languages: {
    title: 'Programming Languages',
    icon: '💻',
    items: [
      { name: 'JavaScript', level: 'Expert', color: 'neon-yellow' },
      { name: 'TypeScript', level: 'Expert', color: 'neon-blue' },
      { name: 'Python', level: 'Intermediate', color: 'neon-green' }
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: '⚙️',
    items: [
      { name: 'NestJS', level: 'Expert', color: 'neon-red' },
      { name: 'Node.js', level: 'Expert', color: 'neon-green' },
      { name: 'Express', level: 'Advanced', color: 'neon-cyan' },
      { name: 'REST API', level: 'Expert', color: 'neon-purple' },
      { name: 'Swagger', level: 'Advanced', color: 'neon-blue' }
    ]
  },
  frontend: {
    title: 'Frontend Development',
    icon: '🎨',
    items: [
      { name: 'React', level: 'Expert', color: 'neon-cyan' },
      { name: 'Next.js', level: 'Advanced', color: 'neon-purple' },
      { name: 'Vite', level: 'Expert', color: 'neon-pink' },
      { name: 'TailwindCSS', level: 'Expert', color: 'neon-blue' },
      { name: 'Bootstrap', level: 'Advanced', color: 'neon-purple' },
      { name: 'HTML5', level: 'Expert', color: 'neon-orange' },
      { name: 'CSS3', level: 'Expert', color: 'neon-blue' }
    ]
  },
  database: {
    title: 'Database & Storage',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', level: 'Advanced', color: 'neon-blue' },
      { name: 'MongoDB', level: 'Intermediate', color: 'neon-green' }
    ]
  },
  tools: {
    title: 'Tools & Technologies',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 'Expert', color: 'neon-orange' },
      { name: 'Docker', level: 'Advanced', color: 'neon-blue' },
      { name: 'Vercel', level: 'Advanced', color: 'neon-purple' },
      { name: 'Render', level: 'Advanced', color: 'neon-cyan' },
      { name: 'GitHub Actions', level: 'Intermediate', color: 'neon-pink' }
    ]
  },
  soft: {
    title: 'Soft Skills',
    icon: '🤝',
    items: [
      { name: 'Team Leadership', level: 'Intermediate', color: 'neon-purple' },
      { name: 'Problem Solving', level: 'Advanced', color: 'neon-cyan' },
      { name: 'Code Review', level: 'Advanced', color: 'neon-blue' },
      { name: 'Mentoring', level: 'Intermediate', color: 'neon-pink' },
      { name: 'Agile/Scrum', level: 'Advanced', color: 'neon-green' }
    ]
  }
};
