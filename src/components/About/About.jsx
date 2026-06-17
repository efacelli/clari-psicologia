import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const BotanicalRule = () => (
  <div className="botanical-rule" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 15C8 15 3 11 3 7C3 4.5 5.2 2 8 2C10.8 2 13 4.5 13 7C13 11 8 15 8 15Z"
        stroke="currentColor" strokeWidth="0.8" fill="none"/>
      <path d="M8 15V8M8 8C8 8 6 6.5 5 4.5M8 8C8 8 10 6.5 11 4.5"
        stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  </div>
)

const values = [
  { label: 'Enfoque individualizado', text: 'Cada deportista es único. El abordaje siempre parte de la historia, el contexto y los objetivos de cada persona.' },
  { label: 'Metodología basada en evidencia', text: 'Técnicas validadas científicamente: visualización, mindfulness, establecimiento de metas y regulación emocional.' },
  { label: 'Acompañamiento continuo', text: 'El trabajo mental se construye en el tiempo. Acompañamiento constante dentro y fuera de la competencia.' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const els = section.querySelectorAll('.gsap-reveal')
    els.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0,
          duration: 0.85, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    const lEls = section.querySelectorAll('.gsap-reveal-l')
    lEls.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="sobre-mi" className="about" ref={sectionRef} aria-label="Sobre mí">
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <div>
              <p className="t-overline about__overline gsap-reveal">Sobre mí</p>
              <h2 className="about__title gsap-reveal">Hola,<br />soy <em>Clarisa.</em></h2>
              <p className="about__mp gsap-reveal">Psicóloga · M.P. 352</p>
            </div>
            <div className="about__portrait gsap-reveal">
              <img className="about__portrait-img"
                src="https://efacelli.github.io/PsychoProyect/img/clari2.jpg"
                alt="Lic. Clarisa Neme en su consultorio"
                loading="lazy" width="400" height="533"/>
              <div className="about__portrait-badge" aria-hidden="true">
                <span className="about__badge-num">15</span>
                <span className="about__badge-text">años de<br/>trayectoria</span>
              </div>
            </div>
          </div>

          <div className="about__right">
            <BotanicalRule />
            <p className="about__body gsap-reveal">Hace <strong>13 años</strong> que ejerzo como psicóloga, me recibí en <strong>Santiago del Estero</strong>, y es una carrera que amo. Desde hace <strong>4 años</strong> me dedico exclusivamente a la <strong>Psicología Aplicada al Deporte</strong>: una rama que me apasiona, desafía y divierte cada día.</p>
            <p className="about__body gsap-reveal">Realicé mi <strong>Maestría Profesional en Psicología Social en Tucumán</strong>, que me abrió las puertas del básquet profesional. Trabajé con equipos desde una mirada psicosocial, tanto grupal como individual, y desde allí continué expandiendo mi práctica hacia <strong>deportistas de todas las disciplinas</strong>.</p>
            <p className="about__body gsap-reveal">El deporte forma parte de mi vida cotidiana: corro, hago entrenamiento de fuerza, nado y ando en bici. <strong>Entiendo el deporte desde adentro</strong>, y eso transforma la calidad del acompañamiento que puedo ofrecer.</p>
            <hr className="about__rule" aria-hidden="true" />
            <p className="about__philosophy gsap-reveal">"Un buen acompañamiento nace de entender a la persona <em>detrás del deportista.</em>"</p>
            <div className="about__values" role="list">
              {values.map(({ label, text }) => (
                <div key={label} className="about__value gsap-reveal" role="listitem">
                  <div className="about__value-dot" aria-hidden="true" />
                  <div className="about__value-text">
                    <strong>{label}</strong>{text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
