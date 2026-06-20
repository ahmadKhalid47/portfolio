import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import cappadociaImg from "@/assets/project-cappadocia.jpg";
import vetquarkImg from "@/assets/project-vetquark.jpg";
import opportunitreeImg from "@/assets/project-opportunitree.jpg";
import ohanadocImg from "@/assets/project-ohanadoc.jpg";
import truedropImg from "@/assets/project-truedrop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Raza — Full-Stack Developer / MERN & Next.js" },
      {
        name: "description",
        content:
          "Full-Stack Developer with 2+ years building production MERN & Next.js platforms across telemedicine, travel, veterinary AI and EdTech. Available for engagements.",
      },
      { property: "og:title", content: "Ahmad Raza — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Senior full-stack engineer specializing in Next.js, real-time systems, AI integrations and secure payments.",
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PROJECTS = [
  {
    id: "001",
    name: "Cappadocia",
    domain: "Travel · Fintech",
    url: "cappadociaplatform.com",
    image: cappadociaImg,
    role: "Full-Stack Developer @ ML Bench",
    contribution:
      "Built Ziraat 3DS payment flow, vendor/admin portals and the Pusher real-time layer.",
    tags: ["NEXT.JS", "ZIRAAT_3DS", "PUSHER", "REDUX_TK"],
    summary:
      "End-to-end multi-language travel platform with real-time seat availability and HMAC-verified Ziraat Bank 3D Secure payments.",
    bullets: [
      "Role-gated portals for travelers, vendors and admins with payout tracking & commission config.",
      "Real-time notifications and currency / onboarding state via Pusher + Redux Toolkit slices.",
      "Deployed on Hostinger VPS — TypeScript, Mongoose, Cloudinary, Zod, RHF.",
    ],
  },
  {
    id: "002",
    name: "VetQuark",
    domain: "Health · AI",
    url: "vetquark.vercel.app",
    image: vetquarkImg,
    role: "Full-Stack Developer @ ML Bench",
    contribution:
      "Implemented the AI diagnostic workflow, Pagar.me payments + webhooks and i18n localization.",
    tags: ["GEN_AI", "PAGAR.ME", "NEXT_16", "i18next"],
    summary:
      "AI-powered veterinary diagnostic platform — guided workflow from timed camera capture to signed PDF report delivery.",
    bullets: [
      "Pagar.me Pix / Boleto / credit card with webhook signature validation and vet wallet credit.",
      "Multi-language localization (i18next) and real-time reading status via Pusher.",
      "React 19, Tailwind v4, MongoDB — shipped on Google Cloud Run.",
    ],
  },
  {
    id: "003",
    name: "Opportunitree",
    domain: "EdTech · AI",
    url: "opportunitree.vercel.app",
    image: opportunitreeImg,
    role: "Full-Stack Developer @ ML Bench",
    contribution:
      "Built the Google GenAI roadmap engine, Socket.io alerts and cron-based deadline verification.",
    tags: ["GOOGLE_GENAI", "SOCKET.IO", "NODE-CRON", "OAUTH"],
    summary:
      "AI-guided student success platform generating personalised milestone roadmaps and curated opportunities.",
    bullets: [
      "Google Generative AI for dynamic opportunity & roadmap generation tied to student goals.",
      "Real-time alerts via Socket.io with cron-based deadline verification and Resend email.",
      "JWT + Google OAuth, Cloudinary media — deployed on Vercel.",
    ],
  },
  {
    id: "004",
    name: "OhanaDoc",
    domain: "Telemedicine",
    url: "ohanadoc.com",
    image: ohanadocImg,
    role: "MERN Developer @ WebWrite Inc.",
    contribution:
      "Led the Lab Services module end-to-end and integrated Twilio Video + WebSocket messaging.",
    tags: ["MERN", "TWILIO_VIDEO", "WEBSOCKETS", "AYUMETRIX"],
    summary:
      "Hawaii-based telemedicine platform serving patients, providers and admins across weight-loss, mental-health and primary-care lines.",
    bullets: [
      "Led the Lab Services module end-to-end with Ayumetrix third-party integration.",
      "Twilio Video for encrypted consultations and WebSocket-powered in-app messaging.",
      "Role-specific dashboards and clinical workflow tooling for all three user types.",
    ],
  },
  {
    id: "005",
    name: "TrueDrop",
    domain: "Mobile Backend",
    url: "Sobriety support · backend",
    image: truedropImg,
    role: "Backend Developer @ ML Bench",
    contribution:
      "Designed the Express REST API, PayFast subscription webhooks and FCM notification engine.",
    tags: ["EXPRESS", "PAYFAST", "FCM", "REST"],
    summary:
      "RESTful Node/Express backend for a sobriety support app — milestone tracking, journaling and proximity-sorted peer pods.",
    bullets: [
      "PayFast subscriptions with webhook activation, grace periods and ZAR→USD conversion.",
      "Firebase Cloud Messaging for milestone, check-in and billing reminders.",
      "Goal-based milestone engine: sober days, money saved, coping strategies.",
    ],
  },
];

const EXPERIENCE = [
  {
    period: "Sep 2025 — Present",
    role: "Full-Stack Developer",
    company: "ML Bench",
    note: "Lead engineer on Cappadocia, VetQuark, Opportunitree, TrueDrop and multiple admin panels / marketing sites.",
  },
  {
    period: "Feb 2025 — Aug 2025",
    role: "MERN Stack Developer",
    company: "WebWrite Inc.",
    note: "OhanaDoc telemedicine platform — led Lab Services module and Twilio video / WebSocket messaging.",
  },
  {
    period: "Mar 2024 — Jan 2025",
    role: "MERN Stack Developer",
    company: "Soft Enterprise",
    note: "Car Rental CRM, HR document management, proposal & workflow tools across enterprise SaaS clients.",
  },
];

const STACK = {
  Languages: ["TypeScript", "JavaScript (ES2022+)"],
  Frontend: [
    "Next.js (App Router)",
    "React 19",
    "Redux Toolkit",
    "Tailwind CSS",
    "Shadcn/Radix",
  ],
  Backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "Socket.io",
    "Pusher",
    "WebSockets",
  ],
  Data: ["MongoDB / Mongoose", "Prisma", "SQL"],
  Payments: ["Ziraat 3D Secure", "Pagar.me", "PayFast", "HMAC Webhooks"],
  "AI & Cloud": [
    "Google Generative AI",
    "GCP Cloud Run",
    "Vercel",
    "Firebase FCM",
    "Cloudinary",
  ],
};

/* ------------------------------------------------------------------ */
/* Components                                                           */
/* ------------------------------------------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8 min-w-0">
          <a
            href="#top"
            className="font-bold tracking-tighter text-base sm:text-lg truncate"
          >
            AHMAD RAZA <span className="text-accent">/</span> FULL-STACK
          </a>
          <div className="hidden lg:flex gap-6 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <span>Loc: Lahore, PK</span>
            <span className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-blink" />
              Available
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 text-[11px] font-mono uppercase tracking-widest">
          <a
            href="#work"
            className="hidden sm:inline hover:text-accent transition-colors"
          >
            Work
          </a>
          <a
            href="#stack"
            className="hidden sm:inline hover:text-accent transition-colors"
          >
            Stack
          </a>
          <a
            href="#about"
            className="hidden sm:inline hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-foreground text-background px-3 py-2 hover:bg-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-36 pb-24 sm:pb-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 animate-reveal">
          <span className="font-mono text-[11px] uppercase text-accent mb-6 block tracking-[0.25em]">
            [ 001 — Profile Specification ]
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-balance mb-8">
            Architecting <br />
            <span className="text-muted-foreground">high-concurrency</span>{" "}
            <br />
            MERN systems.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-pretty max-w-[36ch] font-medium leading-relaxed text-foreground/85">
            Full-stack engineer specializing in Next.js, AI integrations and
            real-time payment infrastructure — shipped to production across five
            industries.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              View selected work
              <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:ahmadrazakhalid9.0@gmail.com"
              className="inline-flex items-center gap-3 border border-border px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Start a conversation
            </a>
          </div>
        </div>
        <aside className="col-span-12 md:col-span-4 flex flex-col justify-end animate-reveal [animation-delay:200ms]">
          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Operating Profile
            </p>
            <p className="text-sm text-foreground/80 mb-5 leading-relaxed">
              2+ years architecting end-to-end platforms — from clinical
              telemedicine to AI veterinary diagnostics — with a focus on
              performance, security and scale.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js 16",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Google GenAI",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-1 border border-border font-mono uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* metrics bar */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-border">
        {[
          ["02+", "Years shipping production"],
          ["05", "Industries delivered"],
          ["09+", "Platforms architected"],
          ["03", "Payment gateways integrated"],
        ].map(([n, l]) => (
          <div
            key={l}
            className="border-r border-border last:border-r-0 py-6 px-4"
          >
            <div className="text-3xl sm:text-4xl font-bold tracking-tighter">
              {n}
            </div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mt-2">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  id,
  label,
  title,
}: {
  id: string;
  label: string;
  title: string;
}) {
  return (
    <div id={id} className="flex items-end justify-between mb-12 scroll-mt-24">
      <div>
        <p className="font-mono text-[11px] uppercase text-accent tracking-[0.25em] mb-3">
          {label}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase">
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 bg-border mx-6 mb-3 hidden md:block" />
    </div>
  );
}

function Work() {
  return (
    <section className="mb-32">
      <SectionHeader
        id="work"
        label="[ 002 — Production Ledger ]"
        title="Selected Production Work"
      />
      <div>
        {PROJECTS.map((p, i) => (
          <article
            key={p.id}
            className="group border-t border-border last:border-b py-10 sm:py-12 grid grid-cols-12 gap-x-6 gap-y-6"
          >
            <div className="col-span-12 md:col-span-1 font-mono text-xs text-muted-foreground">
              {p.id}
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                {p.domain}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                {p.name}
              </h3>
              <a
                href={
                  p.url.startsWith("http") || p.url.includes(".")
                    ? `https://${p.url.replace(/^https?:\/\//, "")}`
                    : "#"
                }
                className="font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors break-all"
              >
                ↗ {p.url}
              </a>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono text-accent border border-accent/30 px-1.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 text-sm text-foreground/80 leading-relaxed">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">
                {p.role}
              </p>
              <p className="mb-4 font-medium">{p.summary}</p>
              <div className="mb-4 border-l-2 border-accent/40 pl-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                  My Contribution
                </p>
                <p className="text-sm text-foreground/85">{p.contribution}</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent mt-1.5 size-1 bg-accent shrink-0 rounded-full" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="w-full aspect-[16/10] border border-border overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.domain}`}
                  width={1280}
                  height={800}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                SYSTEM_VIEW_{p.id}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="mb-32">
      <SectionHeader
        id="stack"
        label="[ 003 — Engineering Stack ]"
        title="Core Technologies"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <ul className="space-y-3 sm:space-y-4 font-bold text-2xl sm:text-3xl tracking-tighter">
            <li>REACT / NEXT.JS</li>
            <li>NODE / EXPRESS</li>
            <li>MONGODB / SQL</li>
            <li className="text-accent">TYPESCRIPT</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
          {Object.entries(STACK).map(([group, items]) => (
            <div key={group}>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4 border-b border-border pb-2">
                {group}
              </p>
              <ul className="text-sm space-y-1.5">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mb-32">
      <SectionHeader
        id="experience"
        label="[ 004 — Career Log ]"
        title="Experience"
      />
      <div className="grid grid-cols-12 gap-6">
        {EXPERIENCE.map((e, i) => (
          <div
            key={e.period}
            className="col-span-12 md:col-span-4 border-t border-border pt-6 relative"
          >
            <span className="absolute -top-px left-0 w-12 h-px bg-accent" />
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              {String(i + 1).padStart(2, "0")} · {e.period}
            </div>
            <h3 className="text-xl font-bold tracking-tight">{e.role}</h3>
            <p className="text-accent text-sm font-mono mt-1 mb-4">
              @ {e.company}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {e.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mb-32">
      <SectionHeader
        id="about"
        label="[ 005 — Operator Notes ]"
        title="About"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Ahmad — a full-stack developer based in Lahore, Pakistan. I
            spend my time architecting end-to-end web platforms where
            correctness matters: payment flows that have to settle, clinical
            workflows that can't drop data, real-time systems that have to stay
            consistent.
          </p>
          <p>
            Over the last two years I've shipped production work across
            telemedicine, travel, veterinary diagnostics, EdTech and mobile
            backends — usually owning the full stack from Mongo schema to
            Next.js App Router UI to the Cloud Run / VPS deployment.
          </p>
          <p>
            Currently studying Computer Science at Virtual University of
            Pakistan (6th semester) while continuing to build at ML Bench.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 md:pl-12">
          <div className="border-l-2 border-accent pl-6 space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Education
              </p>
              <p className="font-bold">Bachelor of Computer Science</p>
              <p className="text-sm text-muted-foreground">
                Virtual University of Pakistan · 2023 — Present
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Domains Delivered
              </p>
              <p className="text-sm">
                Telemedicine · Travel · Veterinary AI · EdTech · Mobile · SaaS /
                CRM
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Currently
              </p>
              <p className="text-sm">
                Open to senior full-stack engagements — remote, contract or
                full-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-24">
      <SectionHeader
        id="contact-h"
        label="[ 006 — Contact Endpoint ]"
        title="Let's Build"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-balance mb-8">
            Have a system that needs{" "}
            <span className="text-accent">architecting?</span>
          </h3>
          <a
            href="mailto:ahmadrazakhalid9.0@gmail.com"
            className="group inline-flex items-baseline gap-3 text-xl sm:text-2xl font-bold tracking-tight hover:text-accent transition-colors break-all"
          >
            ahmadrazakhalid9.0@gmail.com
            <span
              aria-hidden
              className="text-accent group-hover:translate-x-1 transition-transform inline-block"
            >
              →
            </span>
          </a>
          <div className="mt-10 flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-widest">
            <a
              href="https://github.com/ahmadKhalid47"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors border-b border-border hover:border-accent pb-1"
            >
              Github ↗
            </a>
            <a
              href="https://linkedin.com/in/ahmadraza47"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors border-b border-border hover:border-accent pb-1"
            >
              LinkedIn ↗
            </a>
            <a
              href="tel:+923253590984"
              className="hover:text-accent transition-colors border-b border-border hover:border-accent pb-1"
            >
              +92 325 3590984
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="border border-border p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
              Quick Brief
            </p>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget as HTMLFormElement);
                const subject = encodeURIComponent(
                  `Project inquiry — ${data.get("name")}`,
                );
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("brief")}`,
                );
                window.location.href = `mailto:ahmadrazakhalid9.0@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="border-b border-border pb-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/60"
                  placeholder="Your full name"
                />
              </div>
              <div className="border-b border-border pb-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/60"
                  placeholder="you@company.com"
                />
              </div>
              <div className="border-b border-border pb-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                  Brief
                </label>
                <textarea
                  required
                  name="brief"
                  rows={4}
                  className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/60 resize-none"
                  placeholder="What are we building?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background py-3 font-mono text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
              >
                Transmit →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Ahmad Raza · Engineered in Lahore
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-center">
          31.4707° N · 74.3109° E
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-right flex md:justify-end items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-blink" />
          System online · v.2.5.0
        </p>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="font-mono text-[10px] leading-relaxed text-muted-foreground/80 max-w-4xl">
            <span className="uppercase tracking-widest text-foreground/70">
              Disclaimer —
            </span>{" "}
            All projects featured on this site were built during employment at
            the respective companies (ML Bench, WebWrite Inc., Soft Enterprise)
            and their clients. All intellectual property, trademarks and source
            code remain the property of the original owners. Work is shown here
            solely to document my individual engineering contribution and
            professional experience.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <Nav />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Work />
        <Stack />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
