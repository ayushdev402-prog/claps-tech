import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, ShieldCheck, Zap, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading, GlowBlobs, EyebrowBadge } from "@/components/site/Primitives";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Clasp Tech" },
      {
        name: "description",
        content:
          "Meet Clasp Tech — a senior team building premium software, AI, and growth systems for modern companies.",
      },
    ],
  }),
});

const values = [
  { icon: ShieldCheck, t: "Trust", d: "Honest scope. Clear contracts. Receipts for everything." },
  { icon: Zap, t: "Velocity", d: "We move fast — without breaking the things that matter." },
  { icon: Heart, t: "Craft", d: "We obsess over the details others ship and forget." },
  { icon: Users, t: "Partnership", d: "We treat your product like it's our own." },
];

const timeline = [
  { y: "2019", t: "Founded as a 3-person engineering studio." },
  { y: "2021", t: "Launched our enterprise CRM practice across EU + APAC." },
  { y: "2023", t: "Shipped the first AI calling platform for B2B sales." },
  { y: "2025", t: "200+ projects delivered across 32 countries." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <GlowBlobs />
        <Section className="text-center pt-10">
          <SectionHeading
            eyebrow="About Clasp Tech"
            title={
              <>
                A team of builders for the <span className="gradient-text">AI-native era</span>
              </>
            }
            description="We blend senior engineering, design taste, and AI fluency to ship software that's measurably better — faster, leaner, and more useful."
          />
        </Section>
      </section>

      <Section className="pt-4">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Target,
              t: "Our mission",
              d: "Make world-class software accessible to ambitious teams, regardless of size.",
            },
            {
              icon: Eye,
              t: "Our vision",
              d: "A future where every business runs on intelligent, beautifully-built systems.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-white p-8 soft-shadow">
              <div className="h-11 w-11 rounded-2xl gradient-brand text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What we believe — and act on" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-3xl border border-border bg-white p-6 hover:-translate-y-1 transition"
            >
              <Icon className="h-5 w-5 text-primary" />
              <h4 className="mt-4 font-semibold">{t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] gradient-brand-soft border border-border p-10 md:p-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: 220, s: "+", l: "Clients shipped" },
              { v: 14, s: "", l: "Avg. team experience (yrs)" },
              { v: 99, s: ".99%", l: "Uptime SLA" },
              { v: 32, s: "", l: "Countries" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold tracking-tight">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our journey" title="A short timeline" />
        <ol className="mt-12 relative border-l border-border max-w-2xl mx-auto pl-8 space-y-8">
          {timeline.map((t) => (
            <li key={t.y} className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full gradient-brand" />
              <EyebrowBadge>{t.y}</EyebrowBadge>
              <p className="mt-2 text-foreground">{t.t}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Team" title="Senior by default" />
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "Ayush Srivastava", r: "Founder" },
            { n: "Animesh Srivastava", r: "Co-Founder & CTO" },
          ].map((p) => (
            <div key={p.n} className="rounded-3xl border border-border bg-white p-6 text-center">
              <div className="mx-auto h-20 w-20 rounded-full gradient-brand text-white grid place-items-center text-2xl font-bold">
                {p.n
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div className="mt-4 font-semibold">{p.n}</div>
              <div className="text-xs text-muted-foreground">{p.r}</div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
