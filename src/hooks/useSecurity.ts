import { useCallback } from 'react';
import { isValidExternalUrl, sanitizeHTML } from '@/config/security';

export const useSecurity = () => {
  const validateUrl = useCallback((url: string): boolean => {
    return isValidExternalUrl(url);
  }, []);

  const sanitizeContent = useCallback((content: string): string => {
    return sanitizeHTML(content);
  }, []);

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const validatePhone = useCallback((phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }, []);

  const escapeHtml = useCallback((text: string): string => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }, []);

  const generateNonce = useCallback((): string => {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }, []);

  return {
    validateUrl,
    sanitizeContent,
    validateEmail,
    validatePhone,
    escapeHtml,
    generateNonce
  };
};
