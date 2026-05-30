import { createFileRoute } from "@tanstack/react-router";
import { Cookie, Database, EyeOff, FileText, LockKeyhole, MailCheck } from "lucide-react";
import { SeoContentPage } from "@/components/site/SeoContentPage";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy - Clasp Tech" },
      {
        name: "description",
        content:
          "Read the Clasp Tech privacy policy covering contact forms, communication, cookies, project data, and user information.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <SeoContentPage
      eyebrow="Privacy Policy"
      title="Clear handling of"
      highlight="your information"
      description="This page explains how Clasp Tech treats information shared through forms, calls, messages, project discussions, and website visits."
      cards={[
        {
          icon: FileText,
          title: "Information you share",
          description: "We may receive your name, email, phone number, company, project needs, and message details.",
        },
        {
          icon: MailCheck,
          title: "How we use it",
          description: "We use submitted details to respond, prepare proposals, deliver services, and support active projects.",
        },
        {
          icon: LockKeyhole,
          title: "Data protection",
          description: "We limit access to project and contact data to the team members who need it for delivery.",
        },
        {
          icon: Cookie,
          title: "Website basics",
          description: "The site may use standard technical data for performance, security, analytics, and improvement.",
        },
        {
          icon: Database,
          title: "Project data",
          description: "Client data shared during delivery is used only for agreed project work and support.",
        },
        {
          icon: EyeOff,
          title: "No unnecessary selling",
          description: "We do not sell personal contact information. You can contact us to request updates or deletion.",
        },
      ]}
      band={{
        label: "Privacy basics",
        title: "Simple principles behind how we handle client information",
        items: [
          "Purpose-limited use",
          "Need-based access",
          "Secure communication",
          "Project confidentiality",
          "Reasonable retention",
          "User deletion requests",
        ],
      }}
      cta="Contact our team"
    />
  );
}
