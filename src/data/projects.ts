import { LocalizedText } from './siteConfig';

export type ProjectCategory = 'product' | 'platform' | 'hardware';

export type ProjectPreviewType =
  | 'flowfile'
  | 'flyt'
  | 'zcreenly'
  | 'signly'
  | 'games'
  | 'booking'
  | 'audio';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  featured?: boolean;
  /** Accent color token for glow & badges */
  accent: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'rose' | 'violet';
  preview: ProjectPreviewType;
  badge: LocalizedText;
  tagline: LocalizedText;
  summary: LocalizedText;
  highlights: {
    no: string[];
    en: string[];
  };
  tech: string[];
  githubUrl?: string;
  brewCommand?: string;
  status: LocalizedText;
}

/**
 * ENKEL OPPDATERING:
 * For å legge til et nytt prosjekt på nordiccraft.io,
 * kopier ett objekt under og fyll inn tekst på norsk og engelsk.
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'flowfile',
    title: 'FlowFile for macOS',
    category: 'product',
    year: '2026',
    featured: true,
    accent: 'cyan',
    preview: 'flowfile',
    badge: { no: 'NordicCraft · Åpen kildekode', en: 'NordicCraft · Open Source' },
    tagline: {
      no: 'En rask, native filutforsker for macOS bygget i ren Swift med Liquid Glass.',
      en: 'A fast, native macOS file explorer crafted in pure Swift with Liquid Glass.',
    },
    summary: {
      no: 'Bygget som et lynraskt og forutsigbart alternativ til Finder. Null eksterne avhengigheter – kun Apples egne rammeverk (SwiftUI + AppKit). Støtter topanelsvisning, faner, lagrede arbeidsområder, dypsøk, mappesynkronisering og direkte Homebrew-installasjon.',
      en: 'Engineered as a blazing-fast, predictable alternative to Finder. Zero third-party dependencies — pure Apple frameworks (SwiftUI + AppKit). Features dual-pane browsing, tabs, saved workspaces, deep search, folder sync, and seamless Homebrew installation.',
    },
    highlights: {
      no: [
        '100 % åpen kildekode uten tredjepartsbiblioteker eller telemetri',
        'Enkeltpanel & topanelsvisning (⌘D), faner og lagrede arbeidsområder',
        'Dypsøk i filinnhold, flat undermappe-visning og to-veis mappesynkronisering',
        'Verifiserte GitHub Actions-bygg med SHA-256 integritetskontroll og Homebrew Cask',
      ],
      en: [
        '100% open source with zero third-party dependencies or telemetry',
        'Single & dual-pane view (⌘D), tabs, and saved workspaces',
        'Deep content search, flat subfolder view, and two-way folder sync',
        'Verified GitHub Actions releases with SHA-256 integrity checks & Homebrew Cask',
      ],
    },
    tech: ['Swift', 'SwiftUI', 'AppKit', 'Liquid Glass', 'Homebrew', 'GitHub Actions'],
    githubUrl: 'https://github.com/nordiccraft/FlowFile',
    brewCommand: 'brew install --cask nordiccraft/flowfile/flowfile',
    status: { no: 'Åpen utgivelse', en: 'Public Release' },
  },
  {
    id: 'enterprise-ops-suite',
    title: 'Enterprise Operations & Service Desk Suite',
    category: 'platform',
    year: '2026',
    featured: true,
    accent: 'indigo',
    preview: 'flyt',
    badge: { no: 'Case · Drifts- & Ansattplattform', en: 'Case · Operations & Workforce' },
    tagline: {
      no: 'Modulær plattform som samler service desk, ansatt-app, vaktbørs, AI-støtte og dype skyintegrasjoner.',
      en: 'Modular platform uniting service desk, mobile employee hub, shift exchange, AI triage, and deep cloud integrations.',
    },
    summary: {
      no: 'En komplett drifts- og arbeidsplattform for store flerlokasjons-organisasjoner. Bygget med modulær arkitektur for saksbehandling/helpdesk, internkommunikasjon, vaktbørs med ansiennitetsmotor, dokument- og rapportgenerering (PDF/Excel), samt sømløse integrasjoner mot Microsoft 365, Teams-bot, telefoni/e-post og AI-modeller.',
      en: 'A comprehensive operations and workforce suite engineered for multi-site organizations. Features modular service desk & ticketing, mobile employee hub, shift exchange with a seniority rules engine, automated PDF/Excel reporting, and deep integrations with Microsoft 365, Teams bots, voice/email automation, and AI models.',
    },
    highlights: {
      no: [
        'Moduler: Service Desk/sakssystem, mobil ansattportal, vaktbørs, ansiennitetsmotor og driftsstatus',
        'Integrasjoner: Microsoft Entra ID SSO, Teams Bot, Azure Communication Services (tale & e-post), Key Vault og Blob Storage',
        'AI-assistert saksflyt og kunnskapsstøtte via Anthropic Claude & Google Vertex AI',
        'Automatiske kvalitetsportaler i CI for WCAG AA-kontrast, i18n-paritet (NO/EN) og ren PDF-eksport',
      ],
      en: [
        'Modules: Service desk & ticketing, mobile employee hub, shift exchange, seniority engine & live ops health',
        'Integrations: Microsoft Entra ID SSO, Teams Bot, Azure Communication Services (voice & email), Key Vault & Blob Storage',
        'AI-assisted triage and knowledge workflows powered by Anthropic Claude & Google Vertex AI',
        'Automated CI quality gates enforcing WCAG AA contrast, NO/EN i18n parity, and clean PDF/Excel exports',
      ],
    },
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Azure ACS', 'Teams Bot', 'AI SDK'],
    status: { no: 'Arkitektur & Drift', en: 'Production Case' },
  },
  {
    id: 'digital-signage-mdm',
    title: 'Digital Signage & Kiosk MDM',
    category: 'hardware',
    year: '2026',
    featured: true,
    accent: 'emerald',
    preview: 'zcreenly',
    badge: { no: 'Case · Skjermstyring & MDM', en: 'Case · Digital Signage & MDM' },
    tagline: {
      no: 'Egenutviklet plattform for flåtestyring av storskjermer og Android-kiosker i sanntid.',
      en: 'Self-hosted fleet management for commercial displays and Android kiosks in real time.',
    },
    summary: {
      no: 'Full kontroll over digitale informasjonsskjermer (Samsung, Sony Bravia, Hisense) og Android-kiosker fra ett samlet CMS. Par nye skjermer på sekunder med 6-tegns kode eller QR, med krasjsikker token-rotasjon og live WebSocket-telemetri.',
      en: 'Complete fleet management for commercial displays (Samsung, Sony Bravia, Hisense) and Android kiosks from one CMS. Pair new screens in seconds via 6-character code or QR, backed by crash-safe token rotation and live WebSocket telemetry.',
    },
    highlights: {
      no: [
        '6-tegns QR-paring uten passord på ubevoktede skjermer',
        'Sanntids RFC 6455 WebSocket-kanal for umiddelbar publisering og frakobling',
        'Dual-slot krasjsikker token-rotasjon og Microsoft Entra ID SSO',
        'Offline-resilient web-spiller med IndexedDB-persistens og eksponentiell reconnect',
      ],
      en: [
        '6-character QR pairing with zero passwords on unattended displays',
        'Real-time RFC 6455 WebSocket channel for instant publishing and revocation',
        'Dual-slot crash-safe token rotation & Microsoft Entra ID SSO',
        'Offline-resilient web player with IndexedDB persistence and auto-reconnect',
      ],
    },
    tech: ['TypeScript', 'WebSockets', 'PostgreSQL', 'Prisma', 'Entra ID', 'Docker'],
    status: { no: 'Arkitektur & Drift', en: 'Production Case' },
  },
  {
    id: 'm365-signature-platform',
    title: 'M365 Email Signature Platform',
    category: 'platform',
    year: '2026',
    accent: 'violet',
    preview: 'signly',
    badge: { no: 'Case · Microsoft 365', en: 'Case · Microsoft 365' },
    tagline: {
      no: 'Sentralisert plattform for administrasjon og automatisk synkronisering av e-postsignaturer i Microsoft 365.',
      en: 'Centralised platform for managing and automatically syncing email signatures across Microsoft 365.',
    },
    summary: {
      no: 'En komplett skyplattform (frontend, API og delta-sync-agent) for å designe, styre og rulle ut enhetlige e-postsignaturer til hele organisasjonen via Microsoft Graph. Bygget på Azure med Cosmos DB, Key Vault, Managed Identity og automatisk bildeoptimalisering.',
      en: 'An end-to-end cloud platform (frontend, API, and delta sync agent) for designing, targeting, and deploying unified email signatures organization-wide via Microsoft Graph. Built on Azure with Cosmos DB, Key Vault, Managed Identity, and automated image optimization.',
    },
    highlights: {
      no: [
        'Sentral malbygger med regelbaserte tildelinger per avdeling, rolle eller bruker',
        'Automatisert delta-synkronisering mot Microsoft Graph og Entra ID-brukerdata',
        'Sikker Azure-arkitektur med Cosmos DB, Blob Storage, Key Vault og Managed Identity',
        'Innebygd HTML-sanitering (DOMPurify) og automatisk bildeoptimalisering for e-postklienter',
      ],
      en: [
        'Central template designer with rule-based assignments per department, role, or user',
        'Automated delta sync against Microsoft Graph and Entra ID directory profiles',
        'Hardened Azure architecture using Cosmos DB, Blob Storage, Key Vault & Managed Identity',
        'Built-in HTML sanitization (DOMPurify) and automated image optimization for email clients',
      ],
    },
    tech: ['Next.js', 'TypeScript', 'Microsoft Graph', 'Azure Cosmos DB', 'Key Vault', 'Turborepo'],
    status: { no: 'Arkitektur & Drift', en: 'Production Case' },
  },
  {
    id: 'interactive-kiosk-games',
    title: 'Interactive Kids Arcade & Learning',
    category: 'hardware',
    year: '2026',
    accent: 'amber',
    preview: 'games',
    badge: { no: 'Case · Spill & Læring', en: 'Case · Games & Learning' },
    tagline: {
      no: 'Fargerike lærings- og arkadespill skreddersydd for fastmonterte berøringsskjermer.',
      en: 'Colorful educational and arcade games crafted for wall-mounted touchscreen kiosks.',
    },
    summary: {
      no: 'En samling interaktive, berøringsvennlige spill for barn – helt uten reklame eller eksterne lenker, og designet for å tåle ivrig flerfinger-lek i travle publikums- og familiemiljøer.',
      en: 'A suite of interactive touchscreen games for children — completely ad-free, locked down with zero external links, and engineered for joyful multi-touch play in busy family venues.',
    },
    highlights: {
      no: [
        'Skreddersydd for fastmonterte Android-berøringsskjermer i kioskdrift',
        'Pedagogiske minispill og arkadeutfordringer med umiddelbar visuell respons',
        'Kjører 100 % lokalt og stabilt i kioskmodus uten forstyrrelser',
      ],
      en: [
        'Tailored for wall-mounted Android touchscreen kiosks',
        'Educational mini-games and arcade challenges with tactile visual feedback',
        'Runs 100% locally in locked kiosk mode with rock-solid stability',
      ],
    },
    tech: ['Android Kiosk', 'HTML5 Canvas', 'TypeScript', 'Touch UI'],
    status: { no: 'Arkitektur & Drift', en: 'Production Case' },
  },
  {
    id: 'smart-qr-booking',
    title: 'Smart-QR Waitlist & Host Kiosk',
    category: 'platform',
    year: '2026',
    accent: 'rose',
    preview: 'booking',
    badge: { no: 'Case · Hospitality · 50+ steder', en: 'Case · Hospitality · 50+ Venues' },
    tagline: {
      no: 'iPad QR-kiosk, rullerende Smart-QR og sanntids hovmesterstyring med SMS-varsling.',
      en: 'iPad QR kiosk, rotating Smart-QR check-in, and live host desk with SMS alerts.',
    },
    summary: {
      no: 'Digital venteliste for storskala serveringsdrift. Gjesten skanner en dynamisk Smart-QR på iPad ved inngangen, får SMS når bordet er klart, og sjekker seg selv inn med tildelt bordnummer på både mobil og kiosk.',
      en: 'Digital waitlist engineered for high-volume hospitality. Guests scan a dynamically rotating Smart-QR on the entrance iPad, receive SMS alerts when their table is ready, and self-check-in with instant table display.',
    },
    highlights: {
      no: [
        'Dynamisk rullerende Smart-QR som forhindrer fjernpåmelding hjemmefra',
        '6-sifret iPad-paring, sanntids hovmestervisning og 1-trykks bordtildeling',
        'Integrert med SMS REST API, Microsoft Graph og Azure Key Vault',
      ],
      en: [
        'Dynamically rotating Smart-QR preventing remote queue-jumping',
        '6-digit iPad pairing, live host dashboard, and one-tap table assignment',
        'Integrated with SMS REST API, Microsoft Graph, and Azure Key Vault',
      ],
    },
    tech: ['Next.js 15', 'TypeScript', 'Prisma', 'SMS API', 'Azure Key Vault'],
    status: { no: 'Arkitektur & Drift', en: 'Production Case' },
  },
  {
    id: 'pi-audio-engine',
    title: 'Self-Healing Embedded Audio Engine',
    category: 'hardware',
    year: '2026',
    accent: 'cyan',
    preview: 'audio',
    badge: { no: 'Case · Embedded Linux', en: 'Case · Embedded Linux' },
    tagline: {
      no: 'Selvhelbredende Raspberry Pi-lydplattform med 100 % Read-Only SD-kort og watchdog.',
      en: 'Self-healing Raspberry Pi audio daemon with 100% Read-Only OverlayFS & watchdog.',
    },
    summary: {
      no: 'Industriell lydavspilling som tåler strømbrudd og ustabilt nettverk uten vedlikehold. Kjører som systemd-tjeneste med myk volum-fade mellom dag- og kveldsprofil, lokal offline-fallback og fjernoppgradering over SSH.',
      en: 'Industrial-grade venue audio engineered to survive power cuts and network drops with zero maintenance. Runs as a hardened systemd daemon with smooth day/evening volume fades, offline MP3 fallback, and remote SSH upgrades.',
    },
    highlights: {
      no: [
        '100 % Read-Only OverlayFS SD-kort + 15-sekunders Hardware Watchdog',
        'Automatisk Dag/Kveld/Natt-profil med myk volumovergang og lokal offline-fallback',
        'Fjernoppgradering av eksisterende enheter over SSH uten fysisk SD-bytte',
      ],
      en: [
        '100% Read-Only OverlayFS SD card + 15-second Hardware Watchdog',
        'Automatic Day/Evening/Night profiles with smooth volume fade & offline fallback',
        'Zero-touch fleet upgrades over SSH without physical SD card swaps',
      ],
    },
    tech: ['Linux', 'Raspberry Pi', 'systemd', 'OverlayFS', 'Bash', 'SSH Fleet'],
    status: { no: 'Arkitektur & Drift', en: 'Production Case' },
  },
];
