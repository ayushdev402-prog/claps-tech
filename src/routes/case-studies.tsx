import { createFileRoute } from "@tanstack/react-router";
import { Activity, Bot, ChartSpline, ClipboardCheck, DatabaseZap, TrendingUp } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: "Case Studies - Clasp Tech" },
      {
        name: "description",
        content:
          "Explore Clasp Tech case studies across CRM development, AI calling systems, dashboards, websites, and business automation.",
      },
    ],
  }),
});

function CaseStudiesPage() {
  return (
    <SeoContentPage
      eyebrow="Case studies"
      title="Proof of work across"
      highlight="real business needs"
      description="A focused look at the types of systems we design, build, launch, and improve for growth-minded teams."
      cards={[
        {
          icon: ClipboardCheck,
          title: "CRM modernization",
          description: "Turning scattered leads and sheets into a structured pipeline with ownership and reporting.",
        },
        {
          icon: Bot,
          title: "AI calling workflow",
          description: "Automating first response, qualification, reminders, and handoff for sales teams.",
        },
        {
          icon: ChartSpline,
          title: "Executive dashboard",
          description: "Unifying operational data into leadership views with filters and trend analysis.",
        },
        {
          icon: DatabaseZap,
          title: "Internal operations app",
          description: "Replacing manual approvals and repeated admin tasks with a secure web portal.",
        },
        {
          icon: TrendingUp,
          title: "Conversion website",
          description: "Rebuilding a service website around speed, trust, forms, and qualified enquiries.",
        },
        {
          icon: Activity,
          title: "Support improvement",
          description: "Adding maintenance, monitoring, and iteration rituals after launch to protect reliability.",
        },
      ]}
      band={{
        label: "Measured impact",
        title: "The outcomes we optimize for after launch",
        items: [
          "More qualified leads",
          "Faster response times",
          "Cleaner customer data",
          "Reduced manual work",
          "Better team visibility",
          "More reliable operations",
        ],
      }}
    />
  );
}
