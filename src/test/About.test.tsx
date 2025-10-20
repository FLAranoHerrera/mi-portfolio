import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '@/components/About'

describe('About Component', () => {
  it('renders the main heading', () => {
    render(<About />)
    
    expect(screen.getByText('👨‍💻 Sobre Mí')).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<About />)
    
    expect(screen.getByText(/Desarrollador Fullstack apasionado por crear soluciones tecnológicas innovadoras/)).toBeInTheDocument()
  })

  it('renders personal information', () => {
    render(<About />)
    
    expect(screen.getByText('Francisco Leonardo Arano Herrera')).toBeInTheDocument()
    expect(screen.getByText('Veracruz, México')).toBeInTheDocument()
    // Email is not directly visible in About component, it's in Contact
  })

  it('renders hobby sections', () => {
    render(<About />)
    
    expect(screen.getByText('🏋️‍♂️')).toBeInTheDocument()
    expect(screen.getByText('Fitness Enthusiast')).toBeInTheDocument()
    expect(screen.getByText('🎮')).toBeInTheDocument()
    expect(screen.getByText('Gaming Lover')).toBeInTheDocument()
  })

  it('renders technical information', () => {
    render(<About />)
    
    expect(screen.getByText('Backend Development, API Design')).toBeInTheDocument()
    expect(screen.getByText('Performance, Scalability, Clean Code')).toBeInTheDocument()
  })

  it('renders values section', () => {
    render(<About />)
    
    expect(screen.getByText('💎 Mis Valores')).toBeInTheDocument()
    expect(screen.getByText('Calidad de Código')).toBeInTheDocument()
    expect(screen.getByText('Innovación')).toBeInTheDocument()
    expect(screen.getByText('Colaboración')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<About />)
    
    const section = screen.getByRole('region', { name: /Información sobre Francisco Arano/i })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'about')
  })
})
