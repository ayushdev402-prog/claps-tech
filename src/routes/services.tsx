import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, ClipboardList, Code2, Rocket, LifeBuoy } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading, GlowBlobs, GradientButton } from "@/components/site/Primitives";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Clasp Tech" },
      {
        name: "description",
        content: "Custom software, AI, CRM, dashboards, and marketing services from Clasp Tech.",
      },
    ],
  }),
});

const steps = [
  { icon: Compass, t: "Discovery", d: "We map goals, constraints, and success metrics." },
  {
    icon: ClipboardList,
    t: "Planning",
    d: "Scope, architecture, and milestones — locked in writing.",
  },
  { icon: Code2, t: "Development", d: "Iterative delivery with weekly demos and live previews." },
  { icon: Rocket, t: "Launch", d: "Hardening, QA, and a confident production release." },
  { icon: LifeBuoy, t: "Support", d: "Monitoring, iteration, and SLAs that grow with you." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <GlowBlobs />
        <Section className="text-center pt-10">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                Everything you need to <span className="gradient-text">build, ship, and grow</span>
              </>
            }
            description="Eight high-impact practices, each delivered by senior specialists. Combine them for end-to-end transformation."
          />
        </Section>
      </section>

      <Section className="pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative rounded-3xl border border-border bg-white p-7 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full gradient-brand-soft opacity-0 group-hover:opacity-100 transition" />
              <div className="relative h-12 w-12 rounded-2xl gradient-brand-soft grid place-items-center text-primary group-hover:gradient-brand group-hover:text-white transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-semibold text-lg">{title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <button className="relative mt-5 inline-flex items-center text-sm font-medium text-primary">
                Learn more{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              A delivery rhythm that <span className="gradient-text">de-risks every step</span>
            </>
          }
        />
        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <li key={s.t} className="relative text-center md:text-left">
                <div className="mx-auto md:mx-0 h-12 w-12 rounded-2xl gradient-brand text-white grid place-items-center soft-shadow">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </div>
                <h4 className="mt-1 font-semibold">{s.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-border bg-white p-10 md:p-14 text-center soft-shadow">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Not sure where to start?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Book a 30-minute discovery call. We'll listen, ask sharp questions, and propose the
            smallest move that creates the biggest win.
          </p>
          <div className="mt-6 flex justify-center">
            <GradientButton href="/contact">
              Book a free call <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
