// Configuración de seguridad para el portfolio
export const SECURITY_CONFIG = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Necesario para Vite en desarrollo
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Necesario para TailwindCSS
      'https://fonts.googleapis.com'
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com'
    ],
    'img-src': [
      "'self'",
      'data:',
      'https:',
      'blob:'
    ],
    'connect-src': [
      "'self'",
      'https://www.google-analytics.com',
      'https://analytics.google.com'
    ],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'upgrade-insecure-requests': true
  },
  
  // Headers de seguridad adicionales
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  },
  
  // Configuración de CORS
  cors: {
    origin: ['https://flaranoherrera.github.io'],
    methods: ['GET', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
  },
  
  // Rate limiting (para implementar en el servidor)
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // máximo 100 requests por ventana
    message: 'Demasiadas solicitudes desde esta IP, intenta de nuevo más tarde.'
  }
};

// Función para generar CSP header
export const generateCSPHeader = () => {
  const directives = Object.entries(SECURITY_CONFIG.csp)
    .map(([directive, sources]) => {
      if (sources === true) return directive;
      return `${directive} ${sources.join(' ')}`;
    })
    .join('; ');
  
  return directives;
};

// Función para validar URLs externas
export const isValidExternalUrl = (url) => {
  const allowedDomains = [
    'github.com',
    'linkedin.com',
    'google-analytics.com',
    'googletagmanager.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
  ];
  
  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
};

// Función para sanitizar contenido HTML
export const sanitizeHTML = (html) => {
  // Lista de tags permitidos
  const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'span', 'div'];
  
  // Crear un parser simple para remover tags no permitidos
  return html.replace(/<(?![\/]?(?:p|br|strong|em|u|span|div)(?:\s|>))/gi, '&lt;')
            .replace(/\/(?![\/]?(?:p|br|strong|em|u|span|div)(?:\s|>))/gi, '&lt;/');
};
