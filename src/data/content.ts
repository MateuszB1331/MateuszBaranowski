import type { LocalizedText } from "../types/project";

export const nav = {
  projects: { pl: "Projekty", en: "Projects" } satisfies LocalizedText,
  about: { pl: "O mnie", en: "About" } satisfies LocalizedText,
  stack: { pl: "Stack", en: "Stack" } satisfies LocalizedText,
  contact: { pl: "Kontakt", en: "Contact" } satisfies LocalizedText,
};

export const hero = {
  eyebrow: { pl: "GTM Engineer", en: "GTM Engineer" } satisfies LocalizedText,
  headline: {
    pl: "Buduję systemy, które same generują leady.",
    en: "I build systems that generate leads on their own.",
  } satisfies LocalizedText,
  subhead: {
    pl: "Nie mówię o automatyzacji — wysyłam linki do tego, co działa.",
    en: "I don't talk about automation — I send links to what actually works.",
  } satisfies LocalizedText,
  diagram: {
    problem: { pl: "PROBLEM", en: "PROBLEM" } satisfies LocalizedText,
    me: { pl: "JA", en: "ME" } satisfies LocalizedText,
    result: { pl: "DZIAŁAJĄCY SYSTEM", en: "WORKING SYSTEM" } satisfies LocalizedText,
  },
  ctaPrimary: { pl: "Zobacz projekty", en: "See projects" } satisfies LocalizedText,
  ctaSecondary: { pl: "Napisz do mnie", en: "Get in touch" } satisfies LocalizedText,
};

export const about = {
  title: { pl: "O mnie", en: "About" } satisfies LocalizedText,
  paragraphs: [
    {
      pl: "Zaczynałem od pisania — dziennikarstwo i copywriting nauczyły mnie, że jeśli nie umiesz czegoś jasno wytłumaczyć, nie rozumiesz tego wystarczająco dobrze.",
      en: "I started with writing — journalism and copywriting taught me that if you can't explain something clearly, you don't understand it well enough.",
    },
    {
      pl: "Dziś tę samą precyzję stosuję do budowania systemów: n8n, Claude API, Python. Nie projektuję automatyzacji na slajdach — siadam i buduję, dopóki nie zadziała.",
      en: "Today I apply that same precision to building systems: n8n, Claude API, Python. I don't design automation on slides — I sit down and build until it works.",
    },
  ] satisfies LocalizedText[],
  note: {
    pl: "od słów do systemów",
    en: "from words to systems",
  } satisfies LocalizedText,
};

export const stackSection = {
  title: { pl: "Stack", en: "Stack" } satisfies LocalizedText,
  groups: [
    {
      label: { pl: "Automatyzacja & AI", en: "Automation & AI" } satisfies LocalizedText,
      items: ["n8n", "Claude API", "Python"],
    },
    {
      label: { pl: "Produkt & Frontend", en: "Product & Frontend" } satisfies LocalizedText,
      items: ["React", "Vite", "TypeScript"],
    },
    {
      label: { pl: "Dane & Backend", en: "Data & Backend" } satisfies LocalizedText,
      items: ["Supabase", "PostgreSQL"],
    },
    {
      label: { pl: "Sprzedaż & Marketing Ops", en: "Sales & Marketing Ops" } satisfies LocalizedText,
      items: ["HubSpot", "Stripe", "Resend"],
    },
    {
      label: { pl: "Infrastruktura", en: "Infrastructure" } satisfies LocalizedText,
      items: ["Vercel", "GitHub"],
    },
  ],
};

export const projectsSection = {
  title: { pl: "Projekty", en: "Projects" } satisfies LocalizedText,
  subtitle: {
    pl: "Dowody, nie deklaracje.",
    en: "Proof, not claims.",
  } satisfies LocalizedText,
  labels: {
    problem: { pl: "Problem", en: "Problem" } satisfies LocalizedText,
    build: { pl: "Build", en: "Build" } satisfies LocalizedText,
    result: { pl: "Efekt", en: "Result" } satisfies LocalizedText,
  },
};

export const contact = {
  title: { pl: "Kontakt", en: "Contact" } satisfies LocalizedText,
  headline: {
    pl: "Masz problem, który powinien rozwiązywać się sam?",
    en: "Got a problem that should just solve itself?",
  } satisfies LocalizedText,
  cta: { pl: "Napisz", en: "Write to me" } satisfies LocalizedText,
  email: "mateusz.arpado@gmail.com",
  linkedin: "https://www.linkedin.com/in/mateusz-baranowski-444293179/",
  github: null as string | null,
};

export const footer = {
  rights: { pl: "Wszystkie prawa zastrzeżone.", en: "All rights reserved." } satisfies LocalizedText,
};
