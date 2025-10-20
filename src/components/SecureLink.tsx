import React from 'react';
import { isValidExternalUrl } from '@/config/security';

interface SecureLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  'aria-label'?: string;
}

const SecureLink: React.FC<SecureLinkProps> = React.memo(({
  href,
  children,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
  'aria-label': ariaLabel
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Validar URL antes de navegar
    if (!isValidExternalUrl(href)) {
      e.preventDefault();
      console.warn('Enlace bloqueado por seguridad:', href);
      return;
    }
    
    onClick?.(e);
  };

  const secureRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={secureRel}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
});

SecureLink.displayName = 'SecureLink';

export default SecureLink;
