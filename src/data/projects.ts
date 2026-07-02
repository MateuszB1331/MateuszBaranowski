import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "sales-intel-engine",
    title: "Sales Intel Engine",
    status: { pl: "w budowie", en: "in progress" },
    problem: {
      pl: "Ręczny research firm przed outreachem zabierał godziny i był niespójny.",
      en: "Manual company research before outreach took hours and was inconsistent.",
    },
    build: {
      pl: "System w n8n: lista firm → scraping (Firecrawl) → scoring i icebreaker przez Claude → arkusz + digest na Slacku i mailu.",
      en: "An n8n system: company list → scraping (Firecrawl) → Claude scoring and icebreakers → spreadsheet + Slack/email digest.",
    },
    result: {
      pl: "Research jednej firmy: z ~20 minut do poniżej minuty.",
      en: "Research per company: from ~20 minutes to under a minute.",
    },
    stack: ["n8n", "Firecrawl", "Claude API", "Google Sheets", "Slack"],
  },
  {
    id: "sowfast",
    title: "SowFast",
    problem: {
      pl: "Freelancerzy i agencje tracą godziny na pisanie Scope of Work do każdego projektu.",
      en: "Freelancers and agencies lose hours writing a Scope of Work for every project.",
    },
    build: {
      pl: "Generator SOW oparty o Claude API — od briefu do gotowego dokumentu z podpisem elektronicznym i eksportem PDF.",
      en: "A SOW generator powered by Claude API — from brief to finished document with e-signature and PDF export.",
    },
    result: {
      pl: "Pełny launch na Product Hunt, płatne plany Free / Solo / Agency.",
      en: "Full Product Hunt launch, paid Free / Solo / Agency plans.",
    },
    stack: ["React", "Vite", "TypeScript", "Supabase", "Claude API", "Stripe", "Resend", "Netlify"],
    link: { label: "sowfast.com", href: "https://sowfast.com" },
  },
  {
    id: "ai-qualifier",
    title: "AI Qualifier",
    problem: {
      pl: "Leady z quizu wpadały do jednej skrzynki bez segmentacji i szybkiej reakcji.",
      en: "Quiz leads landed in one inbox with no segmentation and no fast response.",
    },
    build: {
      pl: "Agent w n8n: walidacja odpowiedzi, scoring leada, spersonalizowany e-mail i SMS przez Claude API, segmentacja Adults / Kids.",
      en: "An n8n agent: response validation, lead scoring, personalized email and SMS via Claude API, Adults / Kids segmentation.",
    },
    result: {
      pl: "Kwalifikacja i pierwszy kontakt z leadem w czasie rzeczywistym, bez ręcznej pracy.",
      en: "Real-time lead qualification and first contact, with zero manual work.",
    },
    stack: ["n8n", "Claude API", "HubSpot", "Resend"],
  },
  {
    id: "brewops",
    title: "BrewOps",
    problem: {
      pl: "Sieć 11 kawiarni zarządzała inwentaryzacją, grafikiem i raportami ręcznie, w rozjechanych arkuszach.",
      en: "An 11-café chain ran inventory, scheduling and reporting manually, in spreadsheets that never matched.",
    },
    build: {
      pl: "5 wewnętrznych aplikacji: inwentaryzacja, raportowanie, grafik pracy, dashboard operacyjny.",
      en: "5 internal apps: inventory, reporting, staff scheduling, operational dashboard.",
    },
    result: {
      pl: "Realne wdrożenie w działającym biznesie — mniej czasu na operacje, mniej błędów.",
      en: "A real rollout in a live business — less time on operations, fewer errors.",
    },
    stack: ["Base44", "Automations"],
  },
  {
    id: "competitorlens",
    title: "CompetitorLens",
    status: { pl: "koncept / build", en: "concept / build" },
    problem: {
      pl: "Śledzenie ruchów konkurencji było chaotyczne i reaktywne.",
      en: "Tracking competitor moves was chaotic and purely reactive.",
    },
    build: {
      pl: "Platforma do competitive intelligence: monitoring konkurencji i rekomendacje działań.",
      en: "A competitive intelligence platform: competitor monitoring and action recommendations.",
    },
    result: {
      pl: "Przejście z reagowania po fakcie na bieżący, ustrukturyzowany monitoring.",
      en: "A shift from reacting after the fact to ongoing, structured monitoring.",
    },
    stack: ["n8n", "Claude API", "Scraping"],
  },
  {
    id: "webinar-backend",
    title: "Backend platformy webinarowej",
    problem: {
      pl: "Webinary generowały leady, ale dane nie trafiały tam, gdzie trzeba — bez ręcznej pracy.",
      en: "Webinars generated leads, but the data never landed where it should — without manual work.",
    },
    build: {
      pl: "Pełny backend: Supabase + Bolt.new + HubSpot + n8n — triggery, tworzenie deali w HubSpot, analityka.",
      en: "A full backend: Supabase + Bolt.new + HubSpot + n8n — triggers, HubSpot deal creation, analytics.",
    },
    result: {
      pl: "Automatyczny pipeline lead → deal, bez ręcznego przepisywania danych.",
      en: "An automatic lead → deal pipeline, with zero manual data entry.",
    },
    stack: ["Supabase", "Bolt.new", "HubSpot", "n8n"],
  },
];
