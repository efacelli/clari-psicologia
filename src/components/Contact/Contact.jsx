import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const ArrowIcon = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.48-.5-.67-.51-.17 0-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34z"/>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.58 0-3.06-.43-4.33-1.18L4 20l1.23-3.56A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M3 2h3l1.5 3.5-1.5 1a7 7 0 003.5 3.5l1-1.5L14 10v3a1 1 0 01-1 1C6.5 14 2 9.5 2 3a1 1 0 011-1z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <rect x="1" y="3" width="14" height="10" rx="1"/>
    <path d="M1 4l7 5 7-5"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    section.querySelectorAll('.gsap-reveal').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }
      )
    })
  }, [])

  return (
    <section id="contacto" className="contact" ref={sectionRef} aria-label="Contacto">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <p className="t-overline gsap-reveal">Contacto</p>
            <h2 className="contact__title gsap-reveal">Empecemos<br />a <em>trabajar juntos.</em></h2>
            <p className="contact__lead gsap-reveal">Para consultas, turnos o información sobre servicios. Respondo a la brevedad por WhatsApp o correo electrónico.</p>
            <div className="contact__items gsap-reveal" role="list">
              <a href="https://wa.me/54385155823519" target="_blank" rel="noopener noreferrer"
                className="contact__item" role="listitem" aria-label="Contactar por WhatsApp">
                <div className="contact__item-icon"><WhatsAppIcon /></div>
                <div><span className="contact__item-label">WhatsApp</span><span className="contact__item-value">(385) 582-3519</span></div>
              </a>
              
              <a href="mailto:clarineme29@gmail.com" className="contact__item" role="listitem" aria-label="Enviar correo">
                <div className="contact__item-icon"><MailIcon /></div>
                <div><span className="contact__item-label">Email</span><span className="contact__item-value">clarineme29@gmail.com</span></div>
              </a>
            </div>
            <div className="contact__social gsap-reveal" aria-label="Redes sociales">
              <a href="https://www.instagram.com/psicoclari2024/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <InstagramIcon /> Instagram
              </a>
              <a href="https://www.facebook.com/clarineme/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FacebookIcon /> Facebook
              </a>
            </div>
            <div className="contact__cta gsap-reveal">
              <a href="https://wa.me/54385155823519" target="_blank" rel="noopener noreferrer"
                className="btn btn-primary" aria-label="Agendar turno por WhatsApp">
                Agendar turno <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="contact__right gsap-reveal">
            <div className="contact__map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.6424276637576!2d-64.25939342511448!3d-27.789989830427867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b521031e29aa1%3A0x623eb22a434dfc32!2sIndependencia%20341%2C%20G4200%20Santiago%20del%20Estero!5e0!3m2!1ses-419!2sar!4v1736295939087!5m2!1ses-419!2sar"
                title="Ubicación del consultorio de Lic. Clarisa Neme"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa con la ubicación del consultorio en Santiago del Estero"
              />
            </div>
            <div className="contact__offices" role="list" aria-label="Consultorios">
              <address className="contact__office" role="listitem">
                <span className="contact__office-city">Santiago del Estero</span>
                <p className="contact__office-address">Independencia 341<br />Barrio Centro</p>
              </address>
              <address className="contact__office" role="listitem">
                <span className="contact__office-city">Frías</span>
                <p className="contact__office-address">Juan Felipe Ibarra 231<br />Espacio Bienestar</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
