export type Lang = 'no' | 'en';

export interface LocalizedText {
  no: string;
  en: string;
}

export const SITE_CONFIG = {
  brand: 'NordicCraft',
  domain: 'nordiccraft.io',
  email: 'hello@nordiccraft.io',
  githubUrl: 'https://github.com/nordiccraft',
  location: {
    no: 'Norge',
    en: 'Norway',
  },
  nav: {
    projects: { no: 'Prosjekter', en: 'Projects' },
    capabilities: { no: 'Hva vi bygger', en: 'Capabilities' },
    philosophy: { no: 'Håndverk', en: 'Craft' },
    contact: { no: 'Kontakt', en: 'Contact' },
  },
  hero: {
    badge: {
      no: 'NORDISK PROGRAMVARE- & PRODUKTSTUDIO',
      en: 'NORDIC SOFTWARE & PRODUCT STUDIO',
    },
    titleLine1: {
      no: 'Presisjonsbygde løsninger',
      en: 'Precision-crafted solutions',
    },
    titleHighlight: {
      no: 'fra kjerne til skjerm.',
      en: 'from kernel to screen.',
    },
    subtitle: {
      no: 'NordicCraft designer og utvikler lynraske native apper, skalerbare webplattformer, digital skilting, kioskløsninger og selvhelbredende maskinvaresystemer.',
      en: 'NordicCraft designs and engineers blazing-fast native apps, scalable web platforms, digital signage, kiosk ecosystems, and self-healing embedded hardware.',
    },
    ctaPrimary: {
      no: 'Utforsk prosjekter',
      en: 'Explore projects',
    },
    ctaSecondary: {
      no: 'Start en prat',
      en: 'Start a conversation',
    },
  },
  stats: [
    {
      value: '7+',
      label: { no: 'Egenutviklede systemer', en: 'Production systems' },
    },
    {
      value: '50+',
      label: { no: 'Lokasjoner i drift', en: 'Active venues' },
    },
    {
      value: '0',
      label: { no: 'Unødvendige avhengigheter', en: 'Unnecessary bloat' },
    },
    {
      value: '24/7',
      label: { no: 'Selvhelbredende drift', en: 'Self-healing uptime' },
    },
  ],
  projectsSection: {
    eyebrow: { no: 'UTVALGTE PROSJEKTER', en: 'SELECTED WORK' },
    title: {
      no: 'Bygget for ekte drift og krevende brukere',
      en: 'Built for real operations and demanding users',
    },
    subtitle: {
      no: 'Fra åpen kildekode på macOS til enterprise-plattformer, digital skilting, Microsoft 365-signaturer og interaktive spillskjermer.',
      en: 'From open-source macOS utilities to enterprise platforms, digital signage, Microsoft 365 email signatures, and interactive touchscreen games.',
    },
    filters: {
      all: { no: 'Alle', en: 'All' },
      product: { no: 'Produkter', en: 'Products' },
      platform: { no: 'Plattformer', en: 'Platforms' },
      hardware: { no: 'Skjerm, Spill & IoT', en: 'Screens, Games & IoT' },
    },
    viewDetails: { no: 'Se detaljer', en: 'View details' },
  },
  capabilitiesSection: {
    eyebrow: { no: 'KOMPETANSE', en: 'CAPABILITIES' },
    title: {
      no: 'Full stack – bokstavelig talt',
      en: 'Full stack — literally',
    },
    subtitle: {
      no: 'Vi kobler sammen design, skyarkitektur, native desktop og fysisk maskinvare til løsninger som bare virker.',
      en: 'We bridge design, cloud architecture, native desktop, and physical hardware into systems that simply work.',
    },
    items: [
      {
        icon: 'layers',
        title: { no: 'Webplattformer & SaaS', en: 'Web Platforms & SaaS' },
        description: {
          no: 'Moderne applikasjoner i Next.js, React og TypeScript med sanntidsdata, SSO (Entra ID) og sømløs brukeropplevelse.',
          en: 'Modern applications in Next.js, React, and TypeScript with real-time state, SSO (Entra ID), and seamless UX.',
        },
        tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
      },
      {
        icon: 'cpu',
        title: { no: 'Native macOS & Verktøy', en: 'Native macOS & Utilities' },
        description: {
          no: 'Kompromissløse desktop-apper i ren Swift (SwiftUI & AppKit) med null bloat, høy ytelse og dyp OS-integrasjon.',
          en: 'Uncompromising desktop apps in pure Swift (SwiftUI & AppKit) with zero bloat, native speed, and deep OS integration.',
        },
        tags: ['Swift', 'SwiftUI', 'AppKit', 'Homebrew', 'GitHub Actions'],
      },
      {
        icon: 'monitor',
        title: { no: 'Digital Signage & Kiosk MDM', en: 'Digital Signage & Kiosk MDM' },
        description: {
          no: 'Egenutviklede skjermnettverk, QR-paring, sanntids WebSocket-styring og låste Android/iPad-kiosker i storskala.',
          en: 'Custom display networks, QR pairing, real-time WebSocket control, and locked-down Android/iPad kiosks at scale.',
        },
        tags: ['WebSockets', 'Android MDM', 'iPad Kiosk', 'Smart-QR'],
      },
      {
        icon: 'sparkles',
        title: { no: 'Embedded, IoT & Interaktive spill', en: 'Embedded, IoT & Interactive Games' },
        description: {
          no: 'Selvhelbredende Raspberry Pi-noder med Read-Only OverlayFS, samt skreddersydde berøringsspill for kiosk og læring.',
          en: 'Self-healing Raspberry Pi nodes with Read-Only OverlayFS, plus custom touchscreen arcade & learning games.',
        },
        tags: ['Raspberry Pi', 'systemd', 'OverlayFS', 'HTML5 / Android'],
      },
    ],
  },
  philosophySection: {
    eyebrow: { no: 'VÅRT HÅNDVERK', en: 'OUR CRAFT' },
    title: {
      no: 'Nordisk ingeniørkunst i hver detalj',
      en: 'Nordic engineering in every detail',
    },
    pillars: [
      {
        number: '01',
        title: { no: 'Bygget for å vare', en: 'Built to endure' },
        description: {
          no: 'Enten det er et skrivebordsverktøy eller en skjerm som står på 16 timer i døgnet: stabilitet, sikkerhet og selvhelbredelse kommer først.',
          en: 'Whether a desktop utility or a screen running 16 hours a day: reliability, security, and self-healing come first.',
        },
      },
      {
        number: '02',
        title: { no: 'Fokus på brukeropplevelsen', en: 'Obsessed with UX' },
        description: {
          no: 'Kompleks teknologi skal føles enkel. Tydelig typografi, raske tastatursnarveier og gjennomtenkte mikrointeraksjoner gjør jobben til en lek.',
          en: 'Complex technology should feel effortless. Crisp typography, instant shortcuts, and thoughtful micro-interactions make work a joy.',
        },
      },
      {
        number: '03',
        title: { no: 'Rask vei fra idé til drift', en: 'Fast from idea to production' },
        description: {
          no: 'Korte sløyfer, automatisert testing og ren arkitektur gjør at nye funksjoner går trygt ut i produksjon uten flaskehalser.',
          en: 'Tight feedback loops, automated verification, and clean architecture take ideas safely into production without bottlenecks.',
        },
      },
    ],
  },
  contactSection: {
    eyebrow: { no: 'TA KONTAKT', en: 'GET IN TOUCH' },
    title: {
      no: 'Har du et spennende prosjekt eller en idé?',
      en: 'Have an ambitious project or product idea?',
    },
    subtitle: {
      no: 'Enten du trenger en skreddersydd plattform, et produkt fra bunnen av eller teknisk sparring – la oss snakke sammen.',
      en: 'Whether you need a custom platform, a product built from scratch, or technical sparring — let’s talk.',
    },
    copyEmail: { no: 'Kopier e-post', en: 'Copy email' },
    copied: { no: 'Kopiert!', en: 'Copied!' },
    sendEmail: { no: 'Send e-post', en: 'Send email' },
    githubLabel: { no: 'Se koden på GitHub', en: 'View code on GitHub' },
  },
  footer: {
    tagline: {
      no: 'Skreddersydd programvare med nordisk presisjon.',
      en: 'Custom software engineered with Nordic precision.',
    },
    rights: {
      no: 'Alle rettigheter forbeholdt.',
      en: 'All rights reserved.',
    },
  },
} as const;
