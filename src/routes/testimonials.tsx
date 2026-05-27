import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, Plus, Minus } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading, GlowBlobs } from "@/components/site/Primitives";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Reviews & FAQ — Clasp Tech" },
      {
        name: "description",
        content: "What our clients say, and answers to the questions we're asked most.",
      },
    ],
  }),
});

const reviews = [
  {
    q: "Clasp Tech rebuilt our CRM in 9 weeks. Sales adopted it on day one.",
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
    q: "Dashboards finally made our metrics legible to the whole company.",
    a: "Arjun Mehta",
    r: "Head of Ops, Helio",
  },
  {
    q: "Pixel-perfect, performant, and shipped early. A rare combination.",
    a: "Liam Becker",
    r: "Product, Pulse",
  },
  {
    q: "Strategic, not just executional. They challenged us in the best way.",
    a: "Noor Hadi",
    r: "COO, Aurora",
  },
];

const faqs = [
  {
    q: "How are projects priced?",
    a: "We use fixed-scope with milestone payments by default. Retainers and T&M available for ongoing work.",
  },
  {
    q: "What's a typical project timeline?",
    a: "Discovery 1–2 weeks. MVP 6–10 weeks. Enterprise programs scoped collaboratively.",
  },
  {
    q: "What support do you provide after launch?",
    a: "Every project includes a 30-day support window. Optional retainers cover SLAs, observability, and continuous delivery.",
  },
  {
    q: "Can you customize a CRM to our workflow?",
    a: "Yes — pipelines, roles, automations, and data models are tailored to your team.",
  },
  {
    q: "How does AI integration actually work?",
    a: "We start with an opportunity audit, then ship purpose-built agents, copilots, or voice systems with guardrails and analytics.",
  },
  {
    q: "Do you sign NDAs and DPAs?",
    a: "Yes. We routinely sign NDAs, DPAs, and security questionnaires. SOC2-friendly practices throughout.",
  },
];

function TestimonialsPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <GlowBlobs />
        <Section className="text-center pt-10">
          <SectionHeading
            eyebrow="Reviews & FAQ"
            title={
              <>
                Words from <span className="gradient-text">teams we've built with</span>
              </>
            }
          />
        </Section>
      </section>

      <Section className="pt-4">
        <Carousel reviews={reviews} />
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((t) => (
            <figure key={t.a} className="rounded-3xl border border-border bg-white p-6 soft-shadow">
              <div className="flex gap-0.5 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <FAQList />
      </Section>
    </SiteLayout>
  );
}

function Carousel({ reviews }: { reviews: { q: string; a: string; r: string }[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, [reviews.length]);
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative h-56 sm:h-44 overflow-hidden">
        {reviews.map((t, idx) => (
          <figure
            key={idx}
            className={`absolute inset-0 rounded-3xl border border-border bg-white p-8 soft-shadow transition-all duration-700 ${
              idx === i
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex gap-0.5 text-yellow-500">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-2 text-lg leading-relaxed">"{t.q}"</blockquote>
            <figcaption className="mt-3 text-sm">
              <span className="font-semibold">{t.a}</span>{" "}
              <span className="text-muted-foreground">· {t.r}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-1.5">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 gradient-brand" : "w-1.5 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
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
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
            >
              <p className="overflow-hidden text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
