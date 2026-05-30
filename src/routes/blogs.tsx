import { createFileRoute } from "@tanstack/react-router";
import { Bot, ChartNoAxesCombined, Code2, Megaphone, ShieldCheck, Workflow } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blogs - Clasp Tech" },
      {
        name: "description",
        content:
          "Read Clasp Tech insights on AI automation, CRM development, dashboards, software delivery, and digital growth.",
      },
    ],
  }),
});

function BlogsPage() {
  return (
    <SeoContentPage
      eyebrow="Blogs"
      title="Practical insights for"
      highlight="digital growth"
      description="Guides, playbooks, and engineering notes for teams planning software, AI, CRM, analytics, and marketing systems."
      cards={[
        {
          icon: Bot,
          title: "AI automation guides",
          description: "How to use AI calling, lead routing, and support workflows without losing the human touch.",
        },
        {
          icon: Code2,
          title: "Software delivery notes",
          description: "Clear advice on scoping, shipping, and maintaining production-ready web applications.",
        },
        {
          icon: Workflow,
          title: "CRM process design",
          description: "Ways to structure sales pipelines, dashboards, follow-ups, and team accountability.",
        },
        {
          icon: ChartNoAxesCombined,
          title: "Analytics thinking",
          description: "Reports and metrics that help founders see what is working and what needs attention.",
        },
        {
          icon: Megaphone,
          title: "Growth systems",
          description: "Digital marketing and landing page ideas built for conversion, not just traffic.",
        },
        {
          icon: ShieldCheck,
          title: "Reliable operations",
          description: "Security, support, and maintenance practices that keep business-critical tools stable.",
        },
      ]}
      band={{
        label: "Editorial focus",
        title: "Topics your buyers search before they contact a technology partner",
        items: [
          "AI calling system for business",
          "Custom CRM development company",
          "Business dashboard development",
          "Website and software maintenance",
          "Lead automation workflows",
          "Digital marketing strategy",
        ],
      }}
      cta="Discuss your idea"
    />
  );
}
