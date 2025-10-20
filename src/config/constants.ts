import { ProjectsData, SkillsData, PersonalInfo, SocialLink } from '@/types';

// Información personal
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Francisco Leonardo Arano Herrera',
  title: 'Desarrollador Fullstack',
  location: 'Veracruz, México',
  email: 'aranoherrera92@gmail.com',
  languages: 'Español (Nativo), Inglés (Intermedio)',
  specialization: 'Backend Development, API Design',
  focus: 'Performance, Scalability, Clean Code'
};

// Enlaces de redes sociales
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169',
    icon: '💼',
    description: 'Perfil profesional'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/FLAranoHerrera',
    icon: '🐙',
    description: 'Código fuente'
  }
];

// Configuración de animaciones
export const ANIMATION_DELAYS = {
  SHORT: 200,
  MEDIUM: 400,
  LONG: 600,
  EXTRA_LONG: 800
} as const;

// Configuración de colores neón
export const NEON_COLORS = {
  PURPLE: 'neon-purple',
  CYAN: 'neon-cyan',
  BLUE: 'neon-blue',
  PINK: 'neon-pink',
  GREEN: 'neon-green',
  RED: 'neon-red',
  YELLOW: 'neon-yellow',
  ORANGE: 'neon-orange'
} as const;

// Configuración de breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
} as const;
