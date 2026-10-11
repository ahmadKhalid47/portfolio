import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, EXPERIENCE, STACK } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Raza — Full-Stack Developer / MERN & Next.js" },
      {
        name: "description",
        content:
          "Full-Stack Developer with 2.5+ years shipping 8+ production platforms across travel, healthcare, EdTech, SaaS and IoT. MERN, Next.js and Node.js.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Ahmad Raza — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Ahmad Raza — software engineer specializing in Next.js, real-time systems, AI workflows, secure payments and cloud deployment.",
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

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
          <a href="#top" className="font-bold tracking-normal text-base sm:text-lg truncate">
            AHMAD RAZA <span className="text-accent">/</span> FULL-STACK
          </a>
          <div className="hidden lg:flex gap-6 text-xs font-mono uppercase tracking-normal text-muted-foreground">
            <span>Loc: Lahore, PK</span>
            <span className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-status animate-blink" />
              Available
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 text-xs font-mono uppercase tracking-normal">
          <a href="#work" className="hidden sm:inline hover:text-accent transition-colors">
            Work
          </a>
          <a href="#stack" className="hidden sm:inline hover:text-accent transition-colors">
            Stack
          </a>
          <a href="#about" className="hidden sm:inline hover:text-accent transition-colors">
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
        <div className="col-span-12 lg:col-span-8 min-w-0 animate-reveal">
          <span className="font-mono text-xs uppercase text-accent mb-6 block tracking-normal">
            [ 001 — Ahmad Raza · Software Engineer ]
          </span>
          <h1 className="hero-heading font-bold mb-8">
            <span className="block">Architecting</span>
            <span className="block text-muted-foreground">high-concurrency</span>
            <span className="block">MERN systems.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-pretty max-w-[36ch] font-medium leading-relaxed text-foreground/85">
            Full-stack developer specializing in React, Next.js, Node.js and TypeScript — building secure payments, real-time systems and AI-powered workflows.
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
        <aside className="col-span-12 lg:col-span-4 min-w-0 flex flex-col justify-end animate-reveal [animation-delay:200ms]">
          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground mb-3">
              Operating Profile
            </p>
            <p className="text-sm text-foreground/80 mb-5 leading-relaxed">
              2.5+ years shipping 8+ production platforms across travel, healthcare, EdTech, SaaS and IoT. Focused on performance, security and maintainable architecture in Agile teams.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Google Gemini"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border border-border font-mono uppercase tracking-normal"
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
          ["2.5+", "Years of experience"],
          ["05", "Industries delivered"],
          ["08+", "Production platforms"],
          ["03", "Payment gateways integrated"],
        ].map(([n, l]) => (
          <div key={l} className="border-r border-border last:border-r-0 py-6 px-4">
            <div className="text-3xl sm:text-4xl font-bold tracking-normal">{n}</div>
            <div className="font-mono text-xs uppercase text-muted-foreground tracking-normal mt-2">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div id={id} className="flex items-end justify-between mb-12 scroll-mt-24">
      <div>
        <p className="font-mono text-xs uppercase text-accent tracking-normal mb-3">
          {label}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-normal uppercase">{title}</h2>
      </div>
      <div className="h-px flex-1 bg-border mx-6 mb-3 hidden md:block" />
    </div>
  );
}

function Work() {
  return (
    <section className="mb-32">
      <SectionHeader id="work" label="[ 002 — Production Ledger ]" title="Selected Production Work" />
      <div>
        {PROJECTS.map((p) => (
          <article key={p.id} className="group border-t border-border last:border-b py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-3 min-w-0">
              <p className="font-mono text-xs text-muted-foreground mb-4">{p.id} / {p.domain}</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">{p.name}</h3>
              <p className="text-sm text-accent font-medium">{p.role}</p>
              <p className="text-sm text-muted-foreground mt-1">@ {p.company}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => <span key={t} className="text-xs font-mono text-muted-foreground border border-border px-2 py-1">{t}</span>)}
              </div>
              {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium mt-5 hover:text-accent transition-colors">Visit project <ArrowUpRight className="size-4" /></a>}
              {"secondaryUrl" in p && p.secondaryUrl && <a href={p.secondaryUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm mt-2 hover:text-accent">CappaBench <ArrowUpRight className="size-4" /></a>}
            </div>
            <div className="lg:col-span-6 min-w-0 text-base leading-relaxed">
              <p className="font-medium mb-6">{p.summary}</p>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-mono text-xs uppercase text-accent mb-2">My contribution</p>
                <p className="text-foreground/85">{p.contribution}</p>
              </div>
              {p.bullets.length > 0 && <ul className="mt-5 space-y-3 text-muted-foreground">
                {p.bullets.map((b) => <li key={b} className="flex gap-3"><span className="size-1.5 bg-accent shrink-0 rounded-full mt-2.5" /><span>{b}</span></li>)}
              </ul>}
            </div>
            <div className="lg:col-span-3 min-w-0 border-l border-border pl-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground mb-6"><Layers3 className="size-4 text-accent" />Workflow</div>
              <ol className="space-y-1">
                {p.flow.map((step, i) => <li key={step}>
                  <div className="flex items-center gap-3 py-2"><span className="font-mono text-xs text-accent">0{i + 1}</span><span className="text-sm font-medium">{step}</span></div>
                  {i < p.flow.length - 1 && <ArrowDown aria-hidden className="size-4 text-muted-foreground ml-0.5 my-1" />}
                </li>)}
              </ol>
              <p className="font-mono text-xs text-muted-foreground mt-6 pt-3 border-t border-border">{p.status}</p>
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
      <SectionHeader id="stack" label="[ 003 — Engineering Stack ]" title="Core Technologies" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <ul className="space-y-3 sm:space-y-4 font-bold text-2xl sm:text-3xl tracking-normal">
            <li>REACT / NEXT.JS</li>
            <li>NODE / EXPRESS</li>
            <li>MONGODB / SQL</li>
            <li className="text-accent">TYPESCRIPT</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6">
          {Object.entries(STACK).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-normal mb-4 border-b border-border pb-2">
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
      <SectionHeader id="experience" label="[ 004 — Career Log ]" title="Experience" />
      <div className="grid grid-cols-12 gap-6">
        {EXPERIENCE.map((e, i) => (
          <div
            key={e.period}
            className="col-span-12 md:col-span-4 border-t border-border pt-6 relative"
          >
            <span className="absolute -top-px left-0 w-12 h-px bg-accent" />
            <div className="font-mono text-xs uppercase tracking-normal text-muted-foreground mb-3">
              {String(i + 1).padStart(2, "0")} · {e.period}
            </div>
            <h3 className="text-xl font-bold tracking-normal">{e.role}</h3>
            <p className="text-accent text-sm font-mono mt-1 mb-4">@ {e.company}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{e.note}</p>
            {e.links.length > 0 && <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">{e.links.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 hover:text-accent">{link.name}<ArrowUpRight className="size-3.5" /></a>)}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mb-32">
      <SectionHeader id="about" label="[ 005 — Operator Notes ]" title="About" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Ahmad — a full-stack developer based in Lahore, Pakistan. I spend my
            time architecting end-to-end web platforms where correctness matters:
            payment flows that have to settle, clinical workflows that can't drop
            data, real-time systems that have to stay consistent.
          </p>
          <p>
            With 2.5+ years of experience, I've contributed to 8+ production platforms across travel, healthcare, EdTech, SaaS and IoT — from database design and REST APIs to Next.js interfaces and cloud deployment.
          </p>
          <p>
            My background includes a Bachelor of Computer Science at Virtual University of Pakistan. I currently work as a Full-Stack Developer at ML Bench.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 md:pl-12">
          <div className="border-l-2 border-accent pl-6 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground mb-2">
                Education
              </p>
              <p className="font-bold">Bachelor of Computer Science</p>
              <p className="text-sm text-muted-foreground">
                Virtual University of Pakistan
              </p>
              <a href="/ahmad-raza-resume.html" download className="inline-flex items-center gap-2 text-sm font-medium mt-4 hover:text-accent transition-colors">
                Download updated CV <ArrowDown className="size-4" />
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground mb-2">
                Domains Delivered
              </p>
              <p className="text-sm">
                Travel · Healthcare · EdTech · SaaS · IoT
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground mb-2">
                Currently
              </p>
              <p className="text-sm">
                Open to full-stack engagements — remote, contract or full-time.
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
      <SectionHeader id="contact-h" label="[ 006 — Contact Endpoint ]" title="Let's Build" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-normal leading-[1.15] text-balance mb-8">
            Have a system that needs <span className="text-accent">architecting?</span>
          </h3>
          <a
            href="mailto:ahmadrazakhalid9.0@gmail.com"
            className="group flex w-fit max-w-full items-start gap-3 text-lg sm:text-xl font-bold hover:text-accent transition-colors"
          >
            <span className="min-w-0 break-all">ahmadrazakhalid9.0@gmail.com</span>
            <span aria-hidden className="text-accent group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </a>
          <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-normal">
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
            <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground mb-6">
              Quick Brief
            </p>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget as HTMLFormElement);
                const subject = encodeURIComponent(`Project inquiry — ${data.get("name")}`);
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("brief")}`,
                );
                window.location.href = `mailto:ahmadrazakhalid9.0@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="border-b border-border pb-2">
                <label htmlFor="brief-name" className="text-xs font-mono uppercase tracking-normal text-muted-foreground block mb-1">
                  Name
                </label>
                <input
                  required
                  id="brief-name" name="name"
                  className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/60"
                  placeholder="Your full name"
                />
              </div>
              <div className="border-b border-border pb-2">
                <label htmlFor="brief-email" className="text-xs font-mono uppercase tracking-normal text-muted-foreground block mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="brief-email" name="email"
                  className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/60"
                  placeholder="you@company.com"
                />
              </div>
              <div className="border-b border-border pb-2">
                <label htmlFor="brief-message" className="text-xs font-mono uppercase tracking-normal text-muted-foreground block mb-1">
                  Brief
                </label>
                <textarea
                  required
                  id="brief-message" name="brief"
                  rows={4}
                  className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground/60 resize-none"
                  placeholder="What are we building?"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-none bg-foreground text-background py-3 font-mono text-xs uppercase tracking-normal hover:bg-accent transition-colors"
              >
                Transmit →
              </Button>
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
        <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground">
          © {new Date().getFullYear()} Ahmad Raza · Engineered in Lahore
        </p>
        <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground md:text-center">
          31.4707° N · 74.3109° E
        </p>
        <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground md:text-right flex md:justify-end items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-status animate-blink" />
          System online · v.2.5.0
        </p>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground max-w-4xl">
            <span className="uppercase tracking-normal text-foreground/70">Disclaimer —</span>{" "}
            All projects featured on this site were built during employment at the
            respective companies (ML Bench, WebWrite Inc., Soft Enterprise) and their
            clients. All intellectual property, trademarks and source code remain the
            property of the original owners. Work is shown here solely to document my
            individual engineering contribution and professional experience.
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
