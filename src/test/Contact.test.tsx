import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '@/components/Contact'

describe('Contact Component', () => {
  it('renders the main heading', () => {
    render(<Contact />)
    
    expect(screen.getByText('📞 ¡Trabajemos Juntos!')).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<Contact />)
    
    expect(screen.getByText(/¿Tienes un proyecto en mente\? Me encantaría escuchar sobre tu idea/)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    
    expect(screen.getByText('aranoherrera92@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('Veracruz, México')).toBeInTheDocument()
    expect(screen.getByText('Abierto a nuevas oportunidades')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Contact />)
    
    const linkedinLink = screen.getByRole('link', { name: /Ver perfil de LinkedIn de Francisco Arano/i })
    const githubLink = screen.getByRole('link', { name: /Ver repositorios de GitHub de Francisco Arano/i })
    
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169')
    
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/FLAranoHerrera')
  })

  it('renders action buttons', () => {
    render(<Contact />)
    
    expect(screen.getByRole('link', { name: /Enviar propuesta de proyecto por email/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Enviar consulta técnica por email/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Conectar para networking/i })).toBeInTheDocument()
  })

  it('renders response time information', () => {
    render(<Contact />)
    
    expect(screen.getByText('⚡ Respuesta Rápida')).toBeInTheDocument()
    expect(screen.getByText('Respuesta en menos de 24 horas')).toBeInTheDocument()
    expect(screen.getByText('Consulta inicial gratuita')).toBeInTheDocument()
    expect(screen.getByText('Disponible para proyectos remotos')).toBeInTheDocument()
    expect(screen.getByText('Comunicación en español e inglés')).toBeInTheDocument()
  })

  it('renders footer information', () => {
    render(<Contact />)
    
    expect(screen.getByText('Desarrollado con ❤️ por')).toBeInTheDocument()
    expect(screen.getByText('Francisco Arano')).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Francisco Leonardo Arano Herrera`))).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Contact />)
    
    const section = screen.getByRole('region', { name: /Información de contacto/i })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'contact')
  })

  it('has proper email links with subject and body', () => {
    render(<Contact />)
    
    const projectLink = screen.getByRole('link', { name: /Enviar propuesta de proyecto por email/i })
    const techLink = screen.getByRole('link', { name: /Enviar consulta técnica por email/i })
    const connectLink = screen.getByRole('link', { name: /Conectar para networking/i })
    
    expect(projectLink).toHaveAttribute('href', expect.stringContaining('mailto:aranoherrera92@gmail.com'))
    expect(techLink).toHaveAttribute('href', expect.stringContaining('mailto:aranoherrera92@gmail.com'))
    expect(connectLink).toHaveAttribute('href', expect.stringContaining('mailto:aranoherrera92@gmail.com'))
  })
})
