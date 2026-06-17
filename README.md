# Lic. Clarisa Neme — Sitio Web Profesional
## React + Vite · Psicología Deportiva

---

## Estructura del proyecto

```
clarisa/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx
        │   └── Navbar.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── About/
        │   ├── About.jsx
        │   └── About.css
        ├── Experience/
        │   ├── Experience.jsx
        │   └── Experience.css
        ├── Services/
        │   ├── Services.jsx
        │   └── Services.css
        ├── Benefits/
        │   ├── Benefits.jsx
        │   └── Benefits.css
        ├── Gallery/
        │   ├── Gallery.jsx
        │   └── Gallery.css
        ├── Contact/
        │   ├── Contact.jsx
        │   └── Contact.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

---

## Instalación y uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Desarrollo local
```bash
npm run dev
```
Abre http://localhost:5173

### 3. Build para producción
```bash
npm run build
```
Los archivos quedan en `/dist`

### 4. Preview del build
```bash
npm run preview
```

---

## Deploy en GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar al package.json:
"homepage": "https://TU_USUARIO.github.io/REPO",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## Stack

- **React 18** + **Vite 5**
- **GSAP 3.12** + ScrollTrigger
- **CSS puro** (sin frameworks)
- Tipografías: Cormorant Garamond + Inter (Google Fonts)
- Fuentes de imágenes: https://efacelli.github.io/PsychoProyect/img/

---

## Secciones

| # | Componente | Descripción |
|---|-----------|-------------|
| 1 | `Navbar` | Navegación fija con menú mobile |
| 2 | `Hero` | Split-screen con parallax en imagen |
| 3 | `About` | Sobre mí con retrato y valores |
| 4 | `Experience` | Timeline de trayectoria |
| 5 | `Services` | Grid de 4 servicios en dark |
| 6 | `Benefits` | Lista de beneficios numerada |
| 7 | `Gallery` | Masonry con 9 fotos + lazy loading |
| 8 | `Contact` | Datos + mapa + consultorios |
| 9 | `Footer` | Links + créditos |

---

## SEO implementado

- Meta title y description
- Open Graph (Facebook/WhatsApp)
- Twitter Card
- Schema.org `Psychologist` (JSON-LD)
- Canonical URL

## Accesibilidad

- Skip link
- `aria-label` en todos los elementos interactivos
- `alt` en todas las imágenes
- Navegación por teclado
- `focus-visible` estilizado
- `prefers-reduced-motion` respetado

---

Desarrollado por [Enzo Facelli](https://efacelli.github.io/portfolio/)
