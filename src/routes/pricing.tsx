import { createFileRoute } from "@tanstack/react-router";
import { BadgeIndianRupee, Boxes, CalendarClock, CheckCircle2, Gauge, HandCoins } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing - Clasp Tech" },
      {
        name: "description",
        content:
          "Understand Clasp Tech pricing for websites, software, CRM development, AI calling systems, dashboards, and support plans.",
      },
    ],
  }),
});

function PricingPage() {
  return (
    <SeoContentPage
      eyebrow="Pricing"
      title="Transparent planning for"
      highlight="serious builds"
      description="Every project is scoped around outcomes, complexity, integrations, and support needs so you know what you are paying for."
      cards={[
        {
          icon: BadgeIndianRupee,
          title: "Website packages",
          description: "Business websites, landing pages, SEO foundations, forms, and performance-focused frontend builds.",
        },
        {
          icon: Boxes,
          title: "Custom software",
          description: "Role-based apps, portals, admin panels, integrations, databases, and secure deployment.",
        },
        {
          icon: HandCoins,
          title: "CRM development",
          description: "Sales pipelines, team roles, lead scoring, reminders, automation, and reporting.",
        },
        {
          icon: Gauge,
          title: "Analytics dashboards",
          description: "Data models, charts, executive reports, filters, and decision-ready metric views.",
        },
        {
          icon: CalendarClock,
          title: "Monthly support",
          description: "Maintenance, bug fixes, monitoring, improvements, and ongoing feature delivery.",
        },
        {
          icon: CheckCircle2,
          title: "Discovery first",
          description: "We confirm scope before quoting so budget, timeline, and deliverables stay aligned.",
        },
      ]}
      band={{
        label: "Quote factors",
        title: "What shapes the final project cost",
        items: [
          "Number of screens",
          "User roles and permissions",
          "Backend complexity",
          "Third-party integrations",
          "AI or automation logic",
          "Launch and support plan",
        ],
      }}
      cta="Request a quote"
    />
  );
}
