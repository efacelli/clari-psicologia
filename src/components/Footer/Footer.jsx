import React from 'react'
import './Footer.css'

const navLinks = [
  { label: 'Inicio',       href: '#inicio' },
  { label: 'Sobre mí',    href: '#sobre-mi' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Beneficios',  href: '#beneficios' },
  { label: 'Galería',     href: '#galeria' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <p className="footer__name">Lic. Clarisa Neme</p>
            <p className="footer__title">Psicóloga Deportiva · M.P. 352</p>
            <p className="footer__tagline">
              Acompañamiento psicológico especializado para deportistas y equipos.
              Santiago del Estero, Argentina.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del pie de página">
            <p className="footer__col-title">Navegación</p>
            <ul className="footer__links" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={href} role="listitem">
                  <a href={href} className="footer__link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="footer__col-title">Contacto</p>
            <span className="footer__contact-item">
              <a href="https://wa.me/54385155823519" target="_blank" rel="noopener noreferrer">
                WhatsApp: (385) 582-3519
              </a>
            </span>
            <span className="footer__contact-item">
              <a href="mailto:clarineme29@gmail.com">
                clarineme29@gmail.com
              </a>
            </span>
            <span className="footer__contact-item">
              Independencia 341, Santiago del Estero
            </span>
            <span className="footer__contact-item">
              Juan Felipe Ibarra 231, Frías
            </span>
          </div>
        </div>

        <div className="footer__bar">
          <p className="footer__copy">
            &copy; {year} Lic. Clarisa Neme. Todos los derechos reservados.
          </p>
          <p className="footer__credit">
            Diseño y desarrollo por{' '}
            <a
              href="https://efacelli.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enzo Facelli
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
