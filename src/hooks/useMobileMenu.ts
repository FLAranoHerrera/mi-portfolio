import { useState, useCallback } from 'react';

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeMobileMenu();
    }
  }, [closeMobileMenu]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    handleOverlayClick
  };
};
