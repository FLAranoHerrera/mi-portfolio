import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from '@/components/Skills'

describe('Skills Component', () => {
  it('renders the main heading', () => {
    render(<Skills />)
    
    expect(screen.getByText('🚀 Stack Tecnológico')).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<Skills />)
    
    expect(screen.getByText(/Tecnologías y herramientas que domino para crear aplicaciones web modernas/)).toBeInTheDocument()
  })

  it('renders skill categories', () => {
    render(<Skills />)
    
    expect(screen.getByText('Programming Languages')).toBeInTheDocument()
    expect(screen.getByText('Backend Development')).toBeInTheDocument()
    expect(screen.getByText('Frontend Development')).toBeInTheDocument()
    expect(screen.getByText('Database & Storage')).toBeInTheDocument()
    expect(screen.getByText('Tools & Technologies')).toBeInTheDocument()
    expect(screen.getByText('Soft Skills')).toBeInTheDocument()
  })

  it('renders programming languages', () => {
    render(<Skills />)
    
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders backend technologies', () => {
    render(<Skills />)
    
    expect(screen.getByText('NestJS')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Express')).toBeInTheDocument()
    expect(screen.getByText('REST API')).toBeInTheDocument()
  })

  it('renders frontend technologies', () => {
    render(<Skills />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
    expect(screen.getByText('TailwindCSS')).toBeInTheDocument()
  })

  it('renders skill levels', () => {
    render(<Skills />)
    
    expect(screen.getAllByText('Expert')).toHaveLength(11) // Updated count
    expect(screen.getAllByText('Advanced')).toHaveLength(11) // Updated count
    expect(screen.getAllByText('Intermediate')).toHaveLength(5) // Updated count
  })

  it('renders specializations section', () => {
    render(<Skills />)
    
    expect(screen.getByText('🎯 Especializaciones')).toBeInTheDocument()
    expect(screen.getByText('Arquitectura')).toBeInTheDocument()
    expect(screen.getByText('Seguridad')).toBeInTheDocument()
    expect(screen.getByText('Performance')).toBeInTheDocument()
    expect(screen.getByText('Testing')).toBeInTheDocument()
  })

  it('renders certifications section', () => {
    render(<Skills />)
    
    expect(screen.getByText('🏆 Certificaciones & Logros')).toBeInTheDocument()
    expect(screen.getByText('Henry Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Proyectos en Producción')).toBeInTheDocument()
    expect(screen.getByText('Colaboraciones')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Skills />)
    
    const section = screen.getByRole('region', { name: /Habilidades técnicas/i })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'skills')
  })
})
