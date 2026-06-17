import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 13C7 13 2 9.5 2 5.5C2 3 4.5 1 7 1C9.5 1 12 3 12 5.5C12 9.5 7 13 7 13Z" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M7 13V7M7 7C7 7 5 5 4 3M7 7C7 7 9 5 10 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
  </svg>
)

const ArrowIcon = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Hero() {
  const imageRef = useRef(null)

  useEffect(() => {
    // Safety: make everything visible immediately, THEN animate
    const allEls = document.querySelectorAll(
      '.hero__overline, .hero__title, .hero__subtitle, .hero__divider, .hero__body, .hero__actions, .hero__credential, .hero__quote, .hero__scroll, .hero__h1 .line'
    )
    allEls.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none' })

    // Now run the proper animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.hero__overline',
      { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.1 })
    .fromTo('.hero__h1 .line',
      { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.13 }, '-=0.3')
    .fromTo('.hero__subtitle',
      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo('.hero__divider',
      { scaleX: 0 }, { scaleX: 1, duration: 0.85, transformOrigin: 'left' }, '-=0.45')
    .fromTo('.hero__body',
      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.75 }, '-=0.5')
    .fromTo('.hero__actions',
      { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.65 }, '-=0.4')
    .fromTo('.hero__credential',
      { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.65 }, '-=0.3')
    .fromTo('.hero__quote',
      { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
    .fromTo('.hero__scroll',
      { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')

    // Subtle parallax on scroll
    const onScroll = () => {
      if (!imageRef.current) return
      gsap.set(imageRef.current, { y: window.scrollY * 0.18 })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      tl.kill()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section id="inicio" className="hero" aria-label="Presentación">
      <div className="hero__text">
        <div className="hero__overline">
          <span className="t-overline"><LeafIcon /> Psicología Deportiva</span>
        </div>

        <h1 className="hero__title hero__h1">
          <span className="line">Lic. Clarisa</span>
          <span className="line"><em>Neme</em></span>
        </h1>

        <p className="hero__subtitle">Psicóloga del Deporte</p>
        <div className="hero__divider" aria-hidden="true" />

        <p className="hero__body">
          Acompañamiento psicológico especializado para deportistas, equipos y artistas.
          Trabajamos la mente como el atleta trabaja el cuerpo: con método, compromiso y resultados.
        </p>

        <div className="hero__actions">
          <a href="https://wa.me/54385155823519" target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" aria-label="Agendar consulta por WhatsApp">
            Agendar consulta <ArrowIcon />
          </a>
          <a href="#servicios" className="btn btn-outline">Ver servicios</a>
        </div>

        <div className="hero__credential" aria-label="Credenciales">
          <div className="hero__cred-item">
            <span className="hero__cred-num">15</span>
            <span className="hero__cred-label">Años de experiencia</span>
          </div>
          <div className="hero__cred-item">
            <span className="hero__cred-num">M.P.352</span>
            <span className="hero__cred-label">Matrícula profesional</span>
          </div>
          <div className="hero__cred-item">
            <span className="hero__cred-num">6+</span>
            <span className="hero__cred-label">Años en psic. deportiva</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <img ref={imageRef} className="hero__image"
          src="https://efacelli.github.io/PsychoProyect/img/clari1.jpg"
          alt="Lic. Clarisa Neme, Psicóloga Deportiva"
          loading="eager" fetchPriority="high" width="800" height="1000"/>
        <div className="hero__image-overlay" aria-hidden="true" />
      </div>

      <blockquote className="hero__quote">
        <p>"El camino hacia el bienestar comienza con un primer paso."</p>
        <cite>Lic. Clarisa Neme</cite>
      </blockquote>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  )
}
