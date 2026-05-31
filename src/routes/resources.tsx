import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck, Calculator, FileCheck2, LayoutTemplate, ListChecks, SearchCheck } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources - Clasp Tech" },
      {
        name: "description",
        content:
          "Use Clasp Tech resources for project planning, CRM requirements, website launch checklists, AI automation ideas, and dashboard strategy.",
      },
    ],
  }),
});

function ResourcesPage() {
  return (
    <SeoContentPage
      eyebrow="Resources"
      title="Plan smarter before you"
      highlight="start building"
      description="Helpful checklists and planning frameworks for founders, operators, and teams preparing a digital project."
      cards={[
        {
          icon: ListChecks,
          title: "Project checklist",
          description: "Clarify goals, users, roles, integrations, timelines, and launch constraints before development.",
        },
        {
          icon: FileCheck2,
          title: "CRM requirement guide",
          description: "Define stages, fields, automations, reports, and permissions for a useful CRM build.",
        },
        {
          icon: LayoutTemplate,
          title: "Website launch planner",
          description: "Map pages, CTAs, trust signals, content, SEO basics, forms, and performance goals.",
        },
        {
          icon: Calculator,
          title: "Budget planning",
          description: "Understand what affects project cost and where a phased rollout can save budget.",
        },
        {
          icon: SearchCheck,
          title: "SEO foundations",
          description: "Structure pages, titles, descriptions, internal links, and sitemap coverage for discoverability.",
        },
        {
          icon: BookOpenCheck,
          title: "Automation ideas",
          description: "Find repetitive sales, support, and operations tasks that can become reliable workflows.",
        },
      ]}
      band={{
        label: "Planning library",
        title: "Use these topics to prepare a clearer project brief",
        items: [
          "Website sitemap",
          "CRM fields and stages",
          "AI call script",
          "Dashboard metrics",
          "Integration list",
          "Launch checklist",
        ],
      }}
      cta="Get planning help"
    />
  );
}
