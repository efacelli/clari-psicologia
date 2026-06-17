import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const ArrowIcon = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const services = [
  { num: '01', title: 'Básquet profesional y juvenil', desc: 'Asesoramiento y acompañamiento psicológico grupal e individual a equipos masculinos y femeninos. Trabajo en dinámica de equipo, liderazgo y cohesión grupal.', tags: ['Grupal', 'Individual', 'Presencial'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2"/><path d="M10 2.5C10 2.5 7.5 6 7.5 10C7.5 14 10 17.5 10 17.5" stroke="currentColor" strokeWidth="1"/><path d="M10 2.5C10 2.5 12.5 6 12.5 10C12.5 14 10 17.5 10 17.5" stroke="currentColor" strokeWidth="1"/><path d="M2.5 10h15" stroke="currentColor" strokeWidth="1"/></svg> },
  { num: '02', title: 'Mejora de la concentración', desc: 'Entrenamiento de la atención y la concentración mediante técnicas específicas. Herramientas aplicables directamente en el entrenamiento y la competencia.', tags: ['Presencial', 'Online', 'Individual'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth=".8" strokeDasharray="2 2"/><path d="M10 1.5v2.5M10 16v2.5M1.5 10H4M16 10h2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg> },
  { num: '03', title: 'Visualización y relajación', desc: 'Desarrollo de rutinas de visualización mental y técnicas de relajación adaptadas al perfil de cada deportista. Herramientas clave para la preparación precompetitiva.', tags: ['Individual', 'Online', 'Presencial'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3C10 3 4 7 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 7 10 3 10 3Z" stroke="currentColor" strokeWidth="1.1" fill="none"/><path d="M10 8v4.5M7.5 11l2.5 2 2.5-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> },
  { num: '04', title: 'Acompañamiento individual', desc: 'Consulta individual para patinadoras/es, futbolistas, bailarines, automovilistas y atletas. Abordaje personalizado centrado en el rendimiento y el bienestar integral.', tags: ['Individual', 'Presencial', 'Online'],
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 10C11.657 10 13 8.657 13 7C13 5.343 11.657 4 10 4C8.343 4 7 5.343 7 7C7 8.657 8.343 10 10 10Z" stroke="currentColor" strokeWidth="1.1"/><path d="M4 17C4 14.2 6.7 12 10 12C13.3 12 16 14.2 16 17" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg> },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.services__header',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.services__header', start: 'top 85%', toggleActions: 'play none none reverse' } }
    )

    section.querySelectorAll('.service-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } }
      )
    })

    gsap.fromTo('.services__cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.services__cta', start: 'top 90%', toggleActions: 'play none none reverse' } }
    )
  }, [])

  return (
    <section id="servicios" className="services" ref={sectionRef} aria-label="Servicios">
      <div className="container">
        <header className="services__header">
          <p className="t-overline">Servicios</p>
          <h2 className="services__title">Lo que trabajo<br />con cada deportista.</h2>
          <p className="services__lead">Cada intervención está diseñada a medida. El deporte de alto rendimiento exige preparación mental tan rigurosa como la física.</p>
        </header>
        <div className="services__grid">
          {services.map(({ num, title, desc, tags, icon }) => (
            <article key={num} className="service-card">
              <p className="service-card__num">{num}</p>
              <div className="service-card__icon" aria-hidden="true">{icon}</div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{desc}</p>
              <div className="service-card__tags" aria-label="Modalidades">
                {tags.map(tag => <span key={tag} className="service-tag">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="services__cta">
          <a href="https://wa.me/54385155823519" target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" aria-label="Consultar disponibilidad por WhatsApp">
            Consultar disponibilidad <ArrowIcon />
          </a>
          <a href="#contacto" className="btn btn-outline">Ver contacto</a>
        </div>
      </div>
    </section>
  )
}
