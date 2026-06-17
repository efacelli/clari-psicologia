import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

const BASE = 'https://efacelli.github.io/PsychoProyect/img/'

const photos = [
  { src: `${BASE}clari1.jpg`,         alt: 'Lic. Clarisa Neme — retrato profesional' },
  { src: `${BASE}clari2.jpg`,         alt: 'Clarisa Neme en sesión de trabajo' },
  { src: `${BASE}clari3.jpg`,         alt: 'Acompañamiento psicológico deportivo' },
  { src: `${BASE}clari4.jpg`,         alt: 'Clarisa Neme con deportistas' },
  { src: `${BASE}clari5.jpg`,         alt: 'Trabajo en equipo — psicología deportiva' },
  { src: `${BASE}clari6.jpg`,         alt: 'Sesión grupal con equipo' },
]

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.gallery__header',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.gallery__header', start: 'top 85%', toggleActions: 'play none none reverse' } }
    )

    section.querySelectorAll('.gallery__item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: item, start: 'top 92%', toggleActions: 'play none none reverse' } }
      )
    })
  }, [])

  return (
    <section id="galeria" className="gallery" ref={sectionRef} aria-label="Galería de fotos">
      <div className="container">
        <div className="gallery__header">
          <div>
            <p className="t-overline">Galería</p>
            <h2 className="gallery__title">Imágenes de<br />la práctica.</h2>
          </div>
          <a href="https://www.instagram.com/psicoclari2024/" target="_blank" rel="noopener noreferrer"
            className="gallery__instagram" aria-label="Ver perfil de Instagram @psicoclari2024">
            <InstagramIcon />
            @psicoclari2024
          </a>
        </div>
        <div className="gallery__masonry" role="list">
          {photos.map(({ src, alt }, i) => (
            <div key={i} className="gallery__item" role="listitem">
              <img src={src} alt={alt}
                loading={i < 3 ? 'eager' : 'lazy'}
                decoding="async" width="400" height={i % 2 === 0 ? '500' : '350'}/>
              <div className="gallery__item-overlay" aria-hidden="true"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
