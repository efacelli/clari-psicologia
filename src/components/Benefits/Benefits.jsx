import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Benefits.css'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { num: '01', title: 'Establecimiento de metas', desc: 'Técnicas de fijación de objetivos a corto y largo plazo que estructuran el proceso y mantienen la motivación alta durante toda la temporada.' },
  { num: '02', title: 'Confianza y diálogo interno', desc: 'Uso del diálogo interno positivo y rutinas mentales para construir una confianza deportiva sólida y estable bajo presión.' },
  { num: '03', title: 'Gestión emocional', desc: 'Herramientas para manejar la ira, la ansiedad competitiva y las emociones negativas de manera adaptativa en entrenamiento y competencia.' },
  { num: '04', title: 'Motivación sostenida', desc: 'Estrategias para mantener el compromiso y la energía a lo largo de temporadas largas, previniendo el burnout deportivo.' },
  { num: '05', title: 'Liderazgo y dinámica grupal', desc: 'Desarrollo de habilidades de liderazgo, comunicación efectiva y cohesión grupal para equipos que quieren rendir juntos.' },
]

export default function Benefits() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.benefits__left',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.benefits__left', start: 'top 82%', toggleActions: 'play none none reverse' } }
    )

    section.querySelectorAll('.benefit-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.07,
          scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' } }
      )
    })
  }, [])

  return (
    <section id="beneficios" className="benefits" ref={sectionRef} aria-label="Beneficios">
      <div className="container">
        <div className="benefits__inner">
          <div className="benefits__left">
            <p className="t-overline">Beneficios</p>
            <h2 className="benefits__title">Trabajar la mente<br />transforma el juego.</h2>
            <p className="benefits__lead">La psicología deportiva no es solo para deportistas de élite. Es para cualquier persona que quiera rendir mejor, disfrutar más y crecer como competidor.</p>
            <div className="benefits__image-wrap">
              <img className="benefits__img"
                src="https://efacelli.github.io/PsychoProyect/img/tenis.avif"
                alt="Deportista concentrado durante la competencia"
                loading="lazy" width="600" height="450"/>
            </div>
          </div>
          <ol className="benefits__list" aria-label="Lista de beneficios">
            {benefits.map(({ num, title, desc }) => (
              <li key={num} className="benefit-item">
                <span className="benefit-item__num" aria-hidden="true">{num}</span>
                <div className="benefit-item__text">
                  <h3 className="benefit-item__title">{title}</h3>
                  <p className="benefit-item__desc">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
