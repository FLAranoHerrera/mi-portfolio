import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    
    expect(screen.getByText('¡Hola! Soy')).toBeInTheDocument()
    expect(screen.getByText('Francisco Arano')).toBeInTheDocument()
  })

  it('renders the professional focus', () => {
    render(<Hero />)
    
    const typingElement = screen.getByText(/Full Stack Developer · Enfoque en backend/)
    expect(typingElement).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<Hero />)
    
    const ctaButton = screen.getByRole('link', { name: /Ver mis proyectos destacados/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '#projects')
  })

  it('renders the scroll indicator', () => {
    render(<Hero />)
    
    const scrollIndicator = screen.getByRole('banner')
    expect(scrollIndicator).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Hero />)
    
    const section = screen.getByRole('banner')
    expect(section).toHaveAttribute('aria-label', 'Presentación principal')
  })

  it('renders all descriptive text', () => {
    render(<Hero />)
    
    expect(screen.getByText(/Desarrollo de software, APIs e integraciones SaaS/)).toBeInTheDocument()
    expect(screen.getByText(/Construyendo aplicaciones web modernas/)).toBeInTheDocument()
    expect(screen.getByText(/Código limpio • 🎮 Gaming enthusiast • 🏋️ Fitness lover/)).toBeInTheDocument()
  })
})
