import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from '@/components/Projects'

describe('Projects Component', () => {
  it('renders the main heading', () => {
    render(<Projects />)
    
    expect(screen.getByText('🚀 Proyectos Destacados')).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<Projects />)
    
    expect(screen.getByText(/Aplicaciones web modernas construidas con las mejores tecnologías del mercado/)).toBeInTheDocument()
  })

  it('renders featured projects', () => {
    render(<Projects />)
    
    expect(screen.getByText('Ecommerce API - NestJS')).toBeInTheDocument()
    expect(screen.getByText('Lienzo Culinario - Fullstack')).toBeInTheDocument()
    expect(screen.getByText('Sistema de Turnos Médicos')).toBeInTheDocument()
    expect(screen.getByText('Sushi POS - Daruma Ramen House')).toBeInTheDocument()
  })

  it('renders project categories', () => {
    render(<Projects />)
    
    expect(screen.getAllByText('Backend')).toHaveLength(1)
    expect(screen.getAllByText('Fullstack')).toHaveLength(4) // Updated count
  })

  it('renders project status badges', () => {
    render(<Projects />)
    
    expect(screen.getAllByText('Production')).toHaveLength(4) // Updated count
    expect(screen.getAllByText('Completed')).toHaveLength(4) // Updated count - includes both featured and other projects
  })

  it('renders other projects section', () => {
    render(<Projects />)
    
    expect(screen.getByText('💻 Otros Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Cinema Explorer')).toBeInTheDocument()
    expect(screen.getByText('Página Web de Presentación')).toBeInTheDocument()
    expect(screen.getByText('Sistema de Seguridad')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Profesional Avanzado')).toBeInTheDocument()
  })

  it('renders project links', () => {
    render(<Projects />)
    
    const demoLinks = screen.getAllByText('🌐 Ver Demo')
    const codeLinks = screen.getAllByText('📁 Código')
    
    expect(demoLinks.length).toBeGreaterThan(0)
    expect(codeLinks.length).toBeGreaterThan(0)
  })

  it('has proper accessibility attributes', () => {
    render(<Projects />)
    
    const section = screen.getByRole('region', { name: /Proyectos destacados/i })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'projects')
  })
})
