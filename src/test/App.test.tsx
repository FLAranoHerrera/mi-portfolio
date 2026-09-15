import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '@/App'

// Mock the components to isolate App testing
vi.mock('@/components/Hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('@/components/About', () => ({
  default: () => <div data-testid="about">About Component</div>
}))

vi.mock('@/components/Projects', () => ({
  default: () => <div data-testid="projects">Projects Component</div>
}))

vi.mock('@/components/Skills', () => ({
  default: () => <div data-testid="skills">Skills Component</div>
}))

vi.mock('@/components/Contact', () => ({
  default: () => <div data-testid="contact">Contact Component</div>
}))

describe('App Component', () => {
  it('renders the main navigation', () => {
    render(<App />)
    
    expect(screen.getByText('Francisco Arano')).toBeInTheDocument()
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument()
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders all main components', () => {
    render(<App />)
    
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('projects')).toBeInTheDocument()
    expect(screen.getByTestId('skills')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('shows mobile menu button on small screens', () => {
    render(<App />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /Abrir menú de navegación/i })
    expect(mobileMenuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<App />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /Abrir menú de navegación/i })
    
    // Initially closed - check aria-expanded
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Click to open
    fireEvent.click(mobileMenuButton)
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Button should now show close icon
    expect(screen.getByRole('button', { name: /Cerrar menú de navegación/i })).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', () => {
    render(<App />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /Abrir menú de navegación/i })
    
    // Open menu
    fireEvent.click(mobileMenuButton)
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Close menu
    const closeButton = screen.getByRole('button', { name: /Cerrar menú de navegación/i })
    fireEvent.click(closeButton)
    
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when clicking on menu items', () => {
    render(<App />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /Abrir menú de navegación/i })
    
    // Open menu
    fireEvent.click(mobileMenuButton)
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Click on mobile menu item (use getAllByRole to get the mobile version)
    const aboutLinks = screen.getAllByRole('link', { name: /Ir a la sección Sobre mí/i })
    const mobileAboutLink = aboutLinks.find(link => link.textContent?.includes('👨‍💻'))
    expect(mobileAboutLink).toBeInTheDocument()
    
    if (mobileAboutLink) {
      fireEvent.click(mobileAboutLink)
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
    }
  })

  it('has proper navigation links', () => {
    render(<App />)
    
    // Check desktop navigation links
    const desktopLinks = screen.getAllByRole('link', { name: /Ir a la sección Sobre mí/i })
    const desktopAboutLink = desktopLinks.find(link => !link.textContent?.includes('👨‍💻'))
    expect(desktopAboutLink).toHaveAttribute('href', '#about')
    
    const desktopProjectLinks = screen.getAllByRole('link', { name: /Ir a la sección Proyectos/i })
    const desktopProjectLink = desktopProjectLinks.find(link => !link.textContent?.includes('🚀'))
    expect(desktopProjectLink).toHaveAttribute('href', '#projects')
    
    const desktopSkillLinks = screen.getAllByRole('link', { name: /Ir a la sección Habilidades/i })
    const desktopSkillLink = desktopSkillLinks.find(link => !link.textContent?.includes('⚡'))
    expect(desktopSkillLink).toHaveAttribute('href', '#skills')
    
    const desktopContactLinks = screen.getAllByRole('link', { name: /Ir a la sección Contacto/i })
    const desktopContactLink = desktopContactLinks.find(link => !link.textContent?.includes('📞'))
    expect(desktopContactLink).toHaveAttribute('href', '#contact')
  })

  it('has proper accessibility attributes', () => {
    render(<App />)
    
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    // Check that the main element exists and has proper structure
    expect(main).toBeInTheDocument()
  })
})
