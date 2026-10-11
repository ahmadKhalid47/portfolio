export const PROJECTS = [
  {
    id: "001", name: "Cappadocia", domain: "Travel · Booking", url: "https://cappadociaplatform.com", secondaryUrl: "https://cappabench.com", company: "ML Bench", role: "Full-Stack Developer", status: "Delivered",
    tags: ["Next.js", "MongoDB", "Redis", "Pusher"], flow: ["Booking", "3D Secure", "Invoice"],
    summary: "Multi-vendor tourism marketplace connecting travelers with local providers for tours, balloon rides and transfers.",
    contribution: "Built traveler, vendor and super-admin portals, booking workflows and NestPay / Ziraat 3D Secure payments.",
    bullets: ["Multi-currency support, PDF invoicing, vendor commissions and HMAC-verified webhooks.", "Pusher chat, WhatsApp / Web Push notifications, multilingual support and Redis caching."],
  },
  {
    id: "002", name: "VetQuark", domain: "Veterinary · AI", url: "https://vetquark.vercel.app", company: "ML Bench", role: "Full-Stack Developer", status: "Delivered",
    tags: ["Next.js", "AI workflows", "Pagar.me", "MongoDB"], flow: ["Reading", "Vet review", "PDF report"],
    summary: "AI-assisted urine-strip diagnostics with veterinary review, localized workflows and real-time updates.",
    contribution: "Delivered diagnostic and vet-review workflows, PDF reports, localization and Pagar.me payments with verified webhooks.",
    bullets: ["Designed MongoDB schemas for patients, readings, payments and wallets."],
  },
  {
    id: "003", name: "OpportuniTree", domain: "EdTech · AI", url: "https://opportunitree.vercel.app", company: "ML Bench", role: "Full-Stack Developer", status: "Delivered",
    tags: ["Google GenAI", "Socket.IO", "Cron jobs", "OAuth"], flow: ["Goals", "Roadmap", "Opportunities"],
    summary: "AI student-success platform with personalized milestone roadmaps and curated opportunities.",
    contribution: "Built roadmaps, dashboards and deadline calendars using Google Generative AI, Socket.IO and scheduled jobs.",
    bullets: ["Integrated JWT authentication, Google OAuth and Cloudinary media handling."],
  },
  {
    id: "004", name: "SkyZone", domain: "3D · Interactive Registry", url: "https://sky-mark-eta.vercel.app", company: "ML Bench", role: "Full-Stack Developer", status: "In development",
    tags: ["WebGL", "Real-time 3D", "Certificates"], flow: ["Coordinates", "Dedication", "Keepsake"],
    summary: "Interactive commemorative registry for dedicating atmospheric parcels at custom coordinates.",
    contribution: "Developing a real-time 3D WebGL registry with personalized keepsake certificates and shareable dedication timelines.",
    bullets: [],
  },
  {
    id: "005", name: "Belleria", domain: "Commercial · IoT", company: "ML Bench", role: "Backend Developer", status: "Backend work",
    tags: ["Node.js", "TypeScript", "MQTT / EMQX", "Gemini"], flow: ["Telemetry", "Command queue", "Device"],
    summary: "Commercial IoT platform connecting device telemetry, asynchronous commands and AI-assisted troubleshooting.",
    contribution: "Designed the Node.js, TypeScript and MongoDB backend with EMQX / MQTT telemetry and asynchronous command queues for sleep / wake devices.",
    bullets: ["Integrated a Gemini-powered troubleshooting assistant."],
  },
  {
    id: "006", name: "Pet Hero (iDeePet)", domain: "Pet Identity · Management", company: "ML Bench", role: "Backend Developer", status: "In development",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Docker"], flow: ["Registration", "Identity", "Care records"],
    summary: "Pet identity and management platform spanning registration, nose-print biometrics and lost-pet alerts.",
    contribution: "Building NestJS / Prisma APIs with PostgreSQL for registration, biometrics, lost-pet alerts and medical records.",
    bullets: ["Deployed Dockerized services to Google Cloud Run with Cloud Build and Secret Manager."],
  },
  {
    id: "007", name: "TrueDrop", domain: "Mobile · Sobriety Support", company: "ML Bench", role: "Backend Developer", status: "Delivered",
    tags: ["Express", "REST APIs", "PayFast", "Firebase FCM"], flow: ["Check-in", "Milestones", "Peer support"],
    summary: "Sobriety-support mobile backend for milestones, journaling and peer support.",
    contribution: "Built Express REST APIs and integrated PayFast subscriptions with webhook-driven lifecycle handling.",
    bullets: ["Integrated Firebase Cloud Messaging for mobile notifications."],
  },
  {
    id: "008", name: "OhanaDoc", domain: "Healthcare · Telemedicine", url: "https://ohanadoc.com", company: "WebWrite Inc", role: "MERN Stack Developer", status: "Delivered",
    tags: ["MERN", "Twilio Video", "WebSockets", "Ayumetrix"], flow: ["Consultation", "Lab order", "Care workflow"],
    summary: "Virtual care platform covering primary care, mental health and weight-management services.",
    contribution: "Developed patient, provider and admin workflows, Twilio Video consultations and WebSocket messaging.",
    bullets: ["Implemented lab-test ordering integrated with the Ayumetrix API."],
  },
];

export const EXPERIENCE = [
  { period: "Sep 2025 — Present", role: "Full-Stack Developer", company: "ML Bench", note: "Travel, veterinary AI, EdTech, 3D registries, IoT and mobile-app backends. Improved HRM / CRM products and admin panels for performance, scalability, reporting and operational workflows. Delivered REST APIs and client sites; deployed on Coolify / VPS, AWS, Google Cloud and Vercel.", links: [{name: "ML Bench", url: "https://ml-bench.com"}, {name: "Oriza Foods", url: "https://orizafoods.com"}, {name: "Kena", url: "https://kenaapp.vercel.app"}, {name: "PetMap Globe", url: "https://petmap-globe-app.netlify.app"}] },
  { period: "Feb 2025 — Aug 2025", role: "MERN Stack Developer", company: "WebWrite Inc", note: "Developed OhanaDoc patient, provider and admin workflows. Integrated Twilio Video consultations, WebSocket messaging and Ayumetrix lab-test ordering.", links: [] },
  { period: "Mar 2024 — Jan 2025", role: "Full-Stack Developer", company: "Soft Enterprise", note: "Delivered Next.js SaaS tools: multi-user car-rental CRM with role-based access and fleet management, HR document generation with version control, and proposal / workflow automation. Improved performance, data security and business workflows.", links: [] },
];

export const STACK = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5 / CSS3"],
  Frontend: ["React.js", "Next.js · App Router, SSR / SSG", "Responsive Web Design", "Tailwind CSS", "Shadcn/UI · Radix UI · Material UI", "React Query · Redux Toolkit", "Internationalization (i18n)"],
  Backend: ["Node.js · Express.js · NestJS", "RESTful APIs · Microservices", "JWT · OAuth 2.0 · RBAC", "WebSockets · Socket.IO · Pusher", "MQTT / EMQX · Cron jobs"],
  Databases: ["MongoDB · Mongoose", "PostgreSQL · Prisma · SQL", "Schema design", "Query optimization"],
  "Integrations & AI": ["Third-party APIs", "Payment gateways · Verified webhooks", "Google Gemini API", "Cloudinary · Firebase FCM", "Twilio Video · PDF generation"],
  "Cloud & DevOps": ["AWS · Google Cloud", "Cloud Run · Cloud Build", "Secret Manager", "Docker · CI/CD", "VPS · Coolify · Vercel", "Git · GitHub · Agile / Scrum"],
  "Security & Performance": ["Authentication & authorization", "Secure payment processing", "Redis caching", "Application performance optimization", "Scalable web applications"],
};