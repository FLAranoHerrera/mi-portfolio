// Tipos para proyectos
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Backend' | 'Frontend' | 'Fullstack';
  link?: string;
  github: string;
  image: string;
  status: 'Production' | 'Development' | 'Completed';
  metrics: string;
  achievements: string[];
}

export interface ProjectsData {
  featured: Project[];
  other: Project[];
}

// Tipos para habilidades
export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: Skill[];
}

export interface SkillsData {
  [key: string]: SkillCategory;
}

// Tipos para información personal
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  languages: string;
  specialization: string;
  focus: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  description: string;
}

// Tipos para componentes
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavigationProps extends ComponentProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

// Tipos para animaciones
export type AnimationType = 'fade-in' | 'slide-up' | 'glow' | 'float' | 'pulse-neon';

export interface AnimationProps {
  type: AnimationType;
  delay?: number;
  duration?: number;
}
