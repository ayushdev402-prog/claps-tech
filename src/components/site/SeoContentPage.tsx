import { ArrowRight, type LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading, GlowBlobs, GradientButton } from "@/components/site/Primitives";

type SeoCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type SeoBand = {
  label: string;
  title: string;
  items: string[];
};

export function SeoContentPage({
  eyebrow,
  title,
  highlight,
  description,
  cards,
  band,
  cta = "Start a project",
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  cards: SeoCard[];
  band: SeoBand;
  cta?: string;
}) {
  return (
    <SiteLayout>
      <section className="relative">
        <GlowBlobs />
        <Section className="text-center pt-10">
          <SectionHeading
            eyebrow={eyebrow}
            title={
              <>
                {title} <span className="gradient-text">{highlight}</span>
              </>
            }
            description={description}
          />
        </Section>
      </section>

      <Section className="pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title: cardTitle, description: cardDescription }) => (
            <article
              key={cardTitle}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full gradient-brand-soft opacity-0 transition group-hover:opacity-100" />
              <div className="relative h-12 w-12 rounded-2xl gradient-brand-soft grid place-items-center text-primary transition group-hover:gradient-brand group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{cardTitle}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {cardDescription}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 rounded-[2rem] border border-border bg-white p-8 soft-shadow md:grid-cols-[0.85fr_1.15fr] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {band.label}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">{band.title}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {band.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm font-medium text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] gradient-brand-soft border border-border p-10 text-center md:p-14">
          <h3 className="text-2xl font-bold tracking-tight md:text-4xl">
            Ready to turn this into a working system?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Share your goals and we will map the shortest path from idea to launch.
          </p>
          <div className="mt-6 flex justify-center">
            <GradientButton href="/contact">
              {cta} <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
