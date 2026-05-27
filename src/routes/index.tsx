import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Star,
  Plus,
  Minus,
  LineChart,
  Activity,
  Cpu,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import {
  Section,
  EyebrowBadge,
  SectionHeading,
  GradientButton,
  GlowBlobs,
} from "@/components/site/Primitives";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Counter } from "@/components/site/Counter";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Clasp Tech — Smart Digital Solutions for Modern Businesses" },
      {
        name: "description",
        content:
          "Clasp Tech builds custom software, AI calling systems, CRMs, and analytics dashboards that help modern businesses scale with confidence.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Stats />
      <ServicesPreview />
      <FeatureBento />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative">
      <GlowBlobs />
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-24 text-center">
        <EyebrowBadge>New · AI Calling Suite is live</EyebrowBadge>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          Building <span className="gradient-text">smart digital solutions</span>
          <br className="hidden sm:block" /> for modern businesses
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          We design, ship, and scale software, AI, and growth systems for ambitious teams. Premium
          engineering. Predictable delivery. Real outcomes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <GradientButton href="/contact">
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </GradientButton>
          <GradientButton variant="ghost" href="/services">
            Explore services
          </GradientButton>
        </div>

        {/* Floating widgets */}
        <div className="relative mt-16 mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] rounded-3xl border border-border bg-white soft-shadow overflow-hidden">
            <div className="absolute inset-0 gradient-brand-soft" />
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 p-6">
              <div className="col-span-7 row-span-4 rounded-2xl bg-white/80 backdrop-blur border border-border p-5 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Revenue · MRR</span>
                  <span className="text-xs font-medium text-emerald-600">+24.8%</span>
                </div>
                <div className="mt-2 text-3xl font-bold">$182,430</div>
                <div className="mt-4 flex-1 relative">
                  <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#4F46E5" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 C30,70 50,40 80,45 C110,50 130,20 160,30 C190,40 210,15 240,18 C270,21 290,8 300,5 L300,100 L0,100 Z"
                      fill="url(#g)"
                    />
                    <path
                      d="M0,80 C30,70 50,40 80,45 C110,50 130,20 160,30 C190,40 210,15 240,18 C270,21 290,8 300,5"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-5 row-span-4 rounded-2xl bg-white/80 backdrop-blur border border-border p-5">
                <div className="text-xs text-muted-foreground">AI Pipeline</div>
                <div className="mt-3 space-y-3">
                  {["Lead qualified", "Demo booked", "Quote sent", "Closed won"].map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="h-2 flex-1 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full gradient-brand"
                          style={{ width: `${[88, 72, 55, 38][i]}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-24 text-right">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 row-span-2 rounded-2xl bg-white/80 backdrop-blur border border-border p-5 flex items-center gap-6">
                {[
                  { l: "Uptime", v: "99.99%" },
                  { l: "Latency", v: "84ms" },
                  { l: "Active agents", v: "1,284" },
                  { l: "CSAT", v: "4.9/5" },
                ].map((m) => (
                  <div key={m.l} className="flex-1">
                    <div className="text-xs text-muted-foreground">{m.l}</div>
                    <div className="text-lg font-semibold">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hidden md:flex absolute -left-6 top-10 glass rounded-2xl p-3 pr-5 items-center gap-3 animate-float">
            <div className="h-9 w-9 rounded-xl gradient-brand grid place-items-center text-white">
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Deployments</div>
              <div className="text-sm font-semibold">142 this week</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-6 bottom-10 glass rounded-2xl p-3 pr-5 items-center gap-3 animate-float-slow">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/15 text-emerald-600 grid place-items-center">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">SOC2 ready</div>
              <div className="text-sm font-semibold">Enterprise-grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <Section className="py-10">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        Trusted by ambitious teams worldwide
      </p>
      <LogoMarquee />
    </Section>
  );
}

function Stats() {
  const stats = [
    { v: 220, s: "+", l: "Projects delivered" },
    { v: 48, s: "M+", l: "Records processed daily" },
    { v: 99, s: ".99%", l: "Average uptime" },
    { v: 32, s: "", l: "Countries served" },
  ];
  return (
    <Section className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-3xl border border-border bg-white p-6 soft-shadow">
            <div className="text-3xl md:text-4xl font-bold tracking-tight">
              <Counter to={s.v} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            Software, AI & growth — <span className="gradient-text">under one roof</span>
          </>
        }
        description="A full-stack partner for product, engineering, and growth. Pick a service or stitch them together for compounding impact."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.slice(0, 8).map(({ icon: Icon, title, desc }) => (
          <Link
            to="/services"
            key={title}
            className="group relative rounded-3xl border border-border bg-white p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-2xl gradient-brand-soft grid place-items-center text-primary group-hover:gradient-brand group-hover:text-white transition">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-4 inline-flex items-center text-sm text-primary font-medium">
              Learn more{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function FeatureBento() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Clasp Tech"
        title={
          <>
            An unfair advantage — <span className="gradient-text">engineered</span>
          </>
        }
      />
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 rounded-3xl border border-border bg-white p-8 relative overflow-hidden soft-shadow">
          <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <EyebrowBadge>AI-native delivery</EyebrowBadge>
          <h3 className="mt-3 text-2xl font-bold">Ship 3× faster with AI in the loop</h3>
          <p className="mt-2 text-muted-foreground max-w-md">
            From discovery to deployment, we combine senior engineers with proprietary AI tooling to
            compress timelines without compromising quality.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: Cpu, l: "AI copilots" },
              { icon: Activity, l: "Live telemetry" },
              { icon: LineChart, l: "Outcome focus" },
            ].map(({ icon: I, l }) => (
              <div key={l} className="rounded-2xl border border-border p-4">
                <I className="h-4 w-4 text-primary" />
                <div className="mt-2 text-sm font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl gradient-brand text-white p-8 relative overflow-hidden">
          <Sparkles className="h-5 w-5" />
          <h3 className="mt-3 text-2xl font-bold">Fixed scope. Honest pricing.</h3>
          <p className="mt-2 text-white/80">
            Clear deliverables, milestone payments, and no surprises. Designed for founders and ops
            leaders who hate guesswork.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-4 py-2 text-sm font-medium hover:bg-white/90"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Clasp Tech rebuilt our CRM in 9 weeks. Our sales team adopted it on day one.",
      a: "Priya Sharma",
      r: "VP Sales, NorthBeam",
    },
    {
      q: "Their AI calling system books 40% of our demos now. It's surreal.",
      a: "Daniel Okafor",
      r: "Founder, LoopOps",
    },
    {
      q: "Premium engineering, clear comms, on time. Best partner we've worked with.",
      a: "Maya Cohen",
      r: "CTO, Quanta Labs",
    },
    {
      q: "The dashboards finally made our metrics legible to the whole company.",
      a: "Arjun Mehta",
      r: "Head of Ops, Helio",
    },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="Loved by teams"
        title={
          <>
            Outcomes our clients <span className="gradient-text">talk about</span>
          </>
        }
      />
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-5 animate-marquee w-max">
          {[...items, ...items].map((t, i) => (
            <figure
              key={i}
              className="w-[360px] shrink-0 rounded-3xl border border-border bg-white p-6 soft-shadow"
            >
              <div className="flex gap-0.5 text-yellow-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold">{t.a}</div>
                <div className="text-muted-foreground text-xs">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "How do you price projects?",
    a: "Most engagements are fixed-scope with milestone payments. Retainers and time-and-materials are available for ongoing work.",
  },
  {
    q: "What's a typical timeline?",
    a: "Discovery takes 1–2 weeks. MVPs ship in 6–10 weeks. Enterprise programs are scoped collaboratively.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — every project includes a support window. Optional retainers cover SLAs, monitoring, and continuous delivery.",
  },
  {
    q: "Can you customize a CRM to our process?",
    a: "Absolutely. We design CRMs around your pipeline, roles, and data — not the other way around.",
  },
  {
    q: "How does AI integration work?",
    a: "We evaluate where AI creates real ROI, then ship purpose-built agents, copilots, or voice systems with guardrails.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-10 max-w-3xl mx-auto divide-y divide-border rounded-3xl border border-border bg-white overflow-hidden">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left px-6 py-5 hover:bg-secondary/60 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className="h-7 w-7 grid place-items-center rounded-full border border-border text-muted-foreground">
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </div>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] gradient-brand p-10 md:p-16 text-white text-center">
        <div className="absolute inset-0 opacity-30 grid-bg" />
        <h3 className="relative text-3xl md:text-5xl font-bold tracking-tight">
          Let's build what's next.
        </h3>
        <p className="relative mt-4 text-white/85 max-w-xl mx-auto">
          Tell us about your project. We'll reply within one business day with a clear path forward.
        </p>
        <div className="relative mt-8 flex justify-center gap-3 flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-5 py-3 text-sm font-semibold hover:bg-white/90"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"
          >
            See our work
          </Link>
        </div>
      </div>
    </Section>
  );
}
