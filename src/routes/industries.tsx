import { createFileRoute } from "@tanstack/react-router";
import { Building2, GraduationCap, HeartPulse, Landmark, ShoppingBag, Truck } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries - Clasp Tech" },
      {
        name: "description",
        content:
          "Clasp Tech builds software, AI, CRM, and dashboard solutions for real estate, healthcare, education, ecommerce, logistics, and finance.",
      },
    ],
  }),
});

function IndustriesPage() {
  return (
    <SeoContentPage
      eyebrow="Industries"
      title="Digital systems for"
      highlight="high-growth sectors"
      description="We adapt software, automation, and analytics to the specific workflows, customers, and compliance needs of each industry."
      cards={[
        {
          icon: Building2,
          title: "Real estate",
          description: "Lead capture, broker CRMs, listing workflows, site visits, and WhatsApp follow-up automation.",
        },
        {
          icon: HeartPulse,
          title: "Healthcare",
          description: "Appointment flows, patient communication, internal dashboards, and secure operational tooling.",
        },
        {
          icon: GraduationCap,
          title: "Education",
          description: "Admission CRMs, learning portals, student analytics, and automated enquiry systems.",
        },
        {
          icon: ShoppingBag,
          title: "Ecommerce",
          description: "Storefronts, inventory tools, campaign tracking, and customer retention dashboards.",
        },
        {
          icon: Truck,
          title: "Logistics",
          description: "Dispatch boards, route visibility, vendor portals, and automated status updates.",
        },
        {
          icon: Landmark,
          title: "Finance",
          description: "Secure dashboards, customer workflows, report automation, and internal approval systems.",
        },
      ]}
      band={{
        label: "Industry outcomes",
        title: "Solutions shaped around acquisition, operations, and reporting",
        items: [
          "Lead management",
          "Customer portals",
          "Internal dashboards",
          "AI calling workflows",
          "Workflow automation",
          "Performance reporting",
        ],
      }}
    />
  );
}
