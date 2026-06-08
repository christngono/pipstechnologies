# Pip's Technologies — Landing Page

Landing page bilingue (FR/EN) de **Pip's Technologies**, startup tech camerounaise basée à Douala, créatrice de **Pip's Eat** — l'application de livraison de repas n°1 au Cameroun.

## Stack

- **React 18** + **Vite 5**
- ES Modules natifs (zéro config Webpack)
- CSS pur (variables CSS, pas de framework)
- Fonts Google (Bricolage Grotesque, Pacifico, Plus Jakarta Sans)
- IntersectionObserver pour les animations scroll
- Pas de dépendance externe runtime

## Installation locale

```bash
# 1. Cloner / décompresser le projet
cd pips-technologies-v2-export

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application s'ouvre automatiquement sur **http://localhost:5173**.

## Build production

```bash
npm run build      # génère le dossier dist/
npm run preview    # sert le build localement pour test
```

Le dossier `dist/` peut être déployé sur **Vercel, Netlify, GitHub Pages, Cloudflare Pages, OVH, etc.**

## Structure

```
pips-technologies-v2-export/
├── index.html              # Point d'entrée HTML
├── package.json
├── vite.config.js
├── public/
│   └── assets/food/        # Images (servies en /assets/food/*)
└── src/
    ├── main.jsx            # Bootstrap React
    ├── App.jsx             # Root component
    ├── styles.css          # Tous les styles
    ├── i18n.jsx            # Traductions FR/EN + LangProvider
    ├── hooks.jsx           # useReveal, Reveal, Html helpers
    └── components/
        ├── Icons.jsx       # 40+ icônes SVG sur-mesure
        ├── Nav.jsx
        ├── Hero.jsx        # Hero avec carousel d'images animé
        ├── Bands.jsx       # TrustBand + CuisineStrip
        ├── About.jsx
        ├── Story.jsx
        ├── PipsEat.jsx     # Service phare + comment ça marche
        ├── Audiences.jsx   # Drivers + Restaurants
        ├── Download.jsx
        ├── Partners.jsx
        ├── FAQ.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── WhatsAppFloat.jsx
```

## Personnalisation

### Traductions
Toutes les chaînes de caractères sont dans `src/i18n.jsx` (objets `fr` et `en`).

### Couleurs & polices
Variables CSS en haut de `src/styles.css` :
```css
--cocoa: #2A140A;
--orange: #E97817;
--lime: #9DC74F;
--cream: #FBF6EE;
```

### Images
Remplace les fichiers dans `public/assets/food/`. Les chemins sont référencés dans :
- `src/components/Hero.jsx` (carousel)
- `src/components/About.jsx` (mission)
- `src/components/Story.jsx`
- `src/components/PipsEat.jsx` (phones)
- `src/components/Audiences.jsx` (drivers / restaurants)
- `src/components/Download.jsx` (grille app)

## Bilingue

Toggle FR/EN en haut à droite. La préférence est persistée dans `localStorage`.

## Crédits

Pips Technologies · Douala, Cameroun
