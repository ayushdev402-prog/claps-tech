import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading, GlowBlobs } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";
import dashboard1 from "../assets/projects/ai.jpg";
import dashboard2 from "../assets/projects/aicla.jpg";

import crm1 from "../assets/projects/analytical.jpg";
import crm2 from "../assets/projects/crm.jpg";

import ai1 from "../assets/projects/togood.png";
import ai2 from "../assets/projects/product.png";

import marketing1 from "../assets/projects/crm.jpg";
import marketing2 from "../assets/projects/ai.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Clasp Tech" },
      {
        name: "description",
        content: "Selected work from Clasp Tech — dashboards, CRMs, AI systems, and websites.",
      },
    ],
  }),
});

type Cat = "All" | "Dashboards" | "CRM" | "AI" | "Marketing";
const projects = [
  {
    title: "Helio Analytics",
    sub: "Realtime KPI dashboard for fintech ops",
    cat: "Dashboards",
    image: dashboard1,
  },
  {
    title: "Quanta Insights",
    sub: "Predictive analytics for supply chain",
    cat: "Dashboards",
    image: dashboard2,
  },
  {
    title: "NorthBeam CRM",
    sub: "Sales workspace with AI lead scoring",
    cat: "CRM",
    image: crm1,
  },
  {
    title: "Aurora Pipeline",
    sub: "Unified CRM + marketing automation",
    cat: "CRM",
    image: crm2,
  },
  {
    title: "LoopOps Voice",
    sub: "AI calling agent for inbound qualification",
    cat: "AI",
    image: ai1,
  },
  {
    title: "Pulse Search",
    sub: "AI knowledge assistant for enterprises",
    cat: "AI",
    image: ai2,
  },
  {
    title: "Forge Funnels",
    sub: "Performance marketing growth program",
    cat: "Marketing",
    image: marketing1,
  },
  {
    title: "Cobalt Brand",
    sub: "Premium website + SEO transformation",
    cat: "Marketing",
    image: marketing2,
  },
] as const;
const cats: Cat[] = ["All", "Dashboards", "CRM", "AI", "Marketing"];

function PortfolioPage() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <SiteLayout>
      <section className="relative">
        <GlowBlobs />
        <Section className="text-center pt-10">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Products our clients <span className="gradient-text">run their business on</span>
              </>
            }
            description="A peek at recent engagements across software, AI, and growth."
          />
          <div className="mt-8 inline-flex flex-wrap justify-center gap-1 p-1 rounded-full border border-border bg-white">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "px-4 py-1.5 text-sm rounded-full transition",
                  cat === c
                    ? "gradient-brand text-white"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Section>
      </section>

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl border border-border bg-white overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

                {/* <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-[10px] text-muted-foreground border border-white/50">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>{p.cat.toLowerCase()}.clasptech.app</span>
                </div> */}
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">{p.cat}</div>
                  <h3 className="mt-1 font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.sub}</p>
                </div>
                <span className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground group-hover:gradient-brand group-hover:text-white group-hover:border-transparent transition">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
