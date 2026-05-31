import { createFileRoute } from "@tanstack/react-router";
import { Brain, Code2, HeartHandshake, Laptop, Rocket, Users } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers - Clasp Tech" },
      {
        name: "description",
        content:
          "Explore careers at Clasp Tech for developers, designers, AI builders, analysts, and growth specialists.",
      },
    ],
  }),
});

function CareersPage() {
  return (
    <SeoContentPage
      eyebrow="Careers"
      title="Build meaningful systems with"
      highlight="Clasp Tech"
      description="Join a practical, senior-minded team working across software, AI automation, CRM, analytics, and growth."
      cards={[
        {
          icon: Code2,
          title: "Frontend engineers",
          description: "Build polished, fast, responsive product interfaces for real business workflows.",
        },
        {
          icon: Laptop,
          title: "Full-stack developers",
          description: "Design APIs, databases, integrations, and customer-facing tools that scale cleanly.",
        },
        {
          icon: Brain,
          title: "AI automation builders",
          description: "Create calling, chat, and workflow systems that reduce manual work for teams.",
        },
        {
          icon: Users,
          title: "CRM specialists",
          description: "Shape sales, support, and operations platforms around how teams actually work.",
        },
        {
          icon: Rocket,
          title: "Growth marketers",
          description: "Plan campaigns, funnels, content, and landing pages for measurable demand.",
        },
        {
          icon: HeartHandshake,
          title: "Client partners",
          description: "Translate business goals into delivery plans, demos, timelines, and outcomes.",
        },
      ]}
      band={{
        label: "How we work",
        title: "Small teams, sharp ownership, and weekly visible progress",
        items: [
          "Remote-friendly collaboration",
          "Portfolio-led hiring",
          "Real client problems",
          "Mentorship from senior builders",
          "Clear delivery rituals",
          "Modern AI-first toolkit",
        ],
      }}
      cta="Apply through contact"
    />
  );
}
