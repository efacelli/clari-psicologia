import React, { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

const links = [
  { label: 'Inicio',     href: '#inicio' },
  { label: 'Sobre mí',  href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería',   href: '#galeria' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close menu on resize
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header role="banner">
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="navbar__logo" aria-label="Inicio — Lic. Clarisa Neme">
          <span className="navbar__logo-name">Lic. Clarisa Neme</span>
          <span className="navbar__logo-title">Psicóloga Deportiva · M.P.352</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar__link">{label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/54385155823519"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
          aria-label="Agendar turno por WhatsApp"
        >
          Agendar turno
        </a>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menú de navegación"
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="navbar__link"
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
        <a
          href="https://wa.me/54385155823519"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
          onClick={handleLinkClick}
          tabIndex={menuOpen ? 0 : -1}
        >
          Agendar turno
        </a>
      </div>
    </header>
  )
}
