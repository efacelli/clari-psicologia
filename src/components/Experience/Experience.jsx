import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: '2011 — Presente', role: 'Licenciada en Psicología', org: 'Santiago del Estero · 13 años de práctica clínica', desc: 'Ejercicio continuo de la psicología con abordaje individual y grupal, acompañando procesos terapéuticos en diversas poblaciones.' },
  { year: 'Maestría', role: 'Psicología Social', org: 'Universidad — Tucumán', desc: 'Maestría Profesional en Psicología Social. El trabajo final de investigación abrió las puertas al mundo del básquet profesional desde una mirada psicosocial.' },
  { year: '2020 — Presente', role: 'Psicóloga Deportiva — Básquet', org: 'Equipos profesionales y juveniles, masculinos y femeninos', desc: 'Acompañamiento psicológico grupal e individual. Trabajo en dinámica de equipo, liderazgo, cohesión grupal y rendimiento individual bajo presión competitiva.' },
  { year: 'Actualidad', role: 'Consulta individual — Múltiples disciplinas', org: 'Patinadoras/es · Futbolistas · Bailarines · Automovilistas · Atletas', desc: 'Trabajo individualizado con deportistas y artistas. Desarrollo de habilidades mentales, manejo del estrés competitivo y construcción de confianza deportiva.' },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.exp-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-header', start: 'top 85%', toggleActions: 'play none none reverse' } }
    )

    section.querySelectorAll('.experience__item').forEach((item) => {
      gsap.fromTo(item,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none reverse' } }
      )
    })
  }, [])

  return (
    <section id="trayectoria" className="experience" ref={sectionRef} aria-label="Trayectoria profesional">
      <div className="container">
        <div className="exp-header">
          <p className="t-overline">Trayectoria</p>
          <h2 className="experience__title">Una carrera construida<br />con dedicación y pasión.</h2>
          <p className="experience__lead">Más de una década acompañando personas a través del deporte y la psicología, con formación continua y experiencia en alta competencia.</p>
        </div>
        <div className="experience__timeline" role="list">
          {milestones.map(({ year, role, org, desc }) => (
            <article key={role} className="experience__item" role="listitem">
              <p className="experience__year">{year}</p>
              <h3 className="experience__role">{role}</h3>
              <p className="experience__org">{org}</p>
              <p className="experience__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
