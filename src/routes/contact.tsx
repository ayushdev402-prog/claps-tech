import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import {
  Mail,
  MapPin,
  MessageSquare,
  CalendarDays,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading, GlowBlobs } from "@/components/site/Primitives";

const contactEmails = ["Officialclasptech@gmail.com"];
const contactPhones = ["+91-6390129813", "+91-6386063411"];
const primaryEmail = "Officialclasptech@gmail.com";
const primaryPhone = "+91-6390129813";

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

type ChatOption = {
  label: string;
  value: string;
};

type ChatStep = "service" | "business" | "details" | "timeline" | "contact" | "done";

type ChatLead = {
  name?: string;
  service?: string;
  businessType?: string;
  projectDetails?: string;
  timeline?: string;
  contact?: string;
};

const chatOptions: ChatOption[] = [
  {
    label: "CRM tool",
    value: "I want to build a CRM tool",
  },
  {
    label: "Business website",
    value: "I need a business website",
  },
  {
    label: "AI calling system",
    value: "I want an AI calling system",
  },
  {
    label: "Dashboard / analytics",
    value: "I need a dashboard or analytics tool",
  },
];

const chatWhatsAppNumber = "916390129813";
const chatLeadStorageKey = "clasp-tech-chatbot-lead";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={0}
      className={className}
    >
      <path
        fill="#10B981"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.86.5 3.6 1.36 5.12L2 22l4.98-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
      />
      <path
        fill="#fff"
        d="M17.2 14.2c-.3-.2-1.8-.9-2-.9-.2 0-.3-.2-.5-.4-.1-.2-.6-.6-.9-.9-.2-.2-.4-.3-.6-.3-.2 0-.4 0-.6 0-.2 0-.5.1-.8.5-.3.4-.9 1.1-1 1.3-.1.2-.2.3-.1.5.1.2.7.9 1.6 1.4 1 .5 1.8.5 2.1.6.3.1.6.1.9 0 .3-.1 1-.4 1.2-.7.2-.3.2-.6.1-.8 0-.1-.1-.2-.4-.4z"
        transform="translate(-1 -1) scale(1.1)"
      />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Clasp Tech" },
      {
        name: "description",
        content: "Tell us about your project. We'll reply within one business day.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSaved, setBookingSaved] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [pendingForm, setPendingForm] = useState<{
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    details?: string;
  } | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatStep, setChatStep] = useState<ChatStep>("service");
  const [chatLead, setChatLead] = useState<ChatLead>({});
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi, I am Clasp Tech AI. What would you like to build today? Choose an option below or type your requirement.",
    },
  ]);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const replyEmail = form.email.value;
    const company = form.company.value;
    const service = form.service.value;
    const details = form.details.value;

    setPendingForm({ name, email: replyEmail, company, service, details });
    setShowSendModal(true);
  };

  const inferService = (text: string) => {
    const normalized = text.toLowerCase();

    if (/\b(crm|lead|pipeline|sales tool|customer)\b/i.test(normalized)) {
      return chatOptions[0].value;
    }

    if (/\b(website|web site|landing page|seo|business site)\b/i.test(normalized)) {
      return chatOptions[1].value;
    }

    if (/\b(ai|calling|call|voice|bot|automation)\b/i.test(normalized)) {
      return chatOptions[2].value;
    }

    if (/\b(dashboard|analytics|report|data|chart)\b/i.test(normalized)) {
      return chatOptions[3].value;
    }

    return "";
  };

  const notifySupportOnWhatsApp = (leadInput: ChatLead | string) => {
    const lead = typeof leadInput === "string" ? { projectDetails: leadInput } : leadInput;
    const notification = encodeURIComponent(
      `New chatbot lead from Clasp Tech website:\n\nName: ${lead.name || "Not shared"}\nService: ${lead.service || "Not shared"}\nBusiness / industry: ${lead.businessType || "Not shared"}\nProject details: ${lead.projectDetails || "Not shared"}\nTimeline / budget: ${lead.timeline || "Not shared"}\nContact details: ${lead.contact || "Not shared"}\n\nPlease connect with them soon.`,
    );
    const waLink = `https://wa.me/${chatWhatsAppNumber}?text=${notification}`;
    if (typeof window !== "undefined") {
      window.open(waLink, "_blank");
    }
  };

  const saveChatLead = (lead: ChatLead) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(chatLeadStorageKey, JSON.stringify(lead));
  };

  const finishChatLead = (lead: ChatLead, messages: ChatMessage[]) => {
    saveChatLead(lead);
    notifySupportOnWhatsApp(lead);
    setChatLead(lead);
    setChatStep("done");
    setChatMessages([
      ...messages,
      {
        sender: "bot",
        text: "Thank you. I have saved your details and sent them to our team on WhatsApp. We will get back to you soon. Stay in touch.",
      },
    ]);
  };

  const getChatPlaceholder = () => {
    if (chatStep === "service") return "Type your requirement...";
    if (chatStep === "business") return "Business type / industry...";
    if (chatStep === "details") return "Project details...";
    if (chatStep === "timeline") return "Timeline or budget...";
    if (chatStep === "contact") return "Name, phone, email...";
    return "Your details are saved.";
  };

  const handleChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = chatInput.trim();
    if (!text || chatStep === "done") return;

    const nextMessages: ChatMessage[] = [...chatMessages, { sender: "user", text }];
    setChatInput("");

    if (chatStep === "service") {
      const service = inferService(text) || text;
      const updatedLead = { ...chatLead, service };
      setChatLead(updatedLead);
      setChatStep("business");
      setChatMessages([
        ...nextMessages,
        { sender: "bot", text: "Great. Please tell me your business type or industry." },
      ]);
      return;
    }

    if (chatStep === "business") {
      const updatedLead = { ...chatLead, businessType: text };
      setChatLead(updatedLead);
      setChatStep("details");
      setChatMessages([
        ...nextMessages,
        {
          sender: "bot",
          text: "Got it. Please share the full requirement: features, pages, automation, or any problem you want solved.",
        },
      ]);
      return;
    }

    if (chatStep === "details") {
      const updatedLead = { ...chatLead, projectDetails: text };
      setChatLead(updatedLead);
      setChatStep("timeline");
      setChatMessages([
        ...nextMessages,
        { sender: "bot", text: "Thanks. What is your timeline or budget range for this project?" },
      ]);
      return;
    }

    if (chatStep === "timeline") {
      const updatedLead = { ...chatLead, timeline: text };
      setChatLead(updatedLead);
      setChatStep("contact");
      setChatMessages([
        ...nextMessages,
        {
          sender: "bot",
          text: "Last step. Please share your name, phone number, and email so our team can contact you.",
        },
      ]);
      return;
    }

    const nameMatch = text.match(/^[^,\n-]+/);
    const updatedLead = { ...chatLead, name: nameMatch?.[0]?.trim(), contact: text };
    finishChatLead(updatedLead, nextMessages);
    /*
    if (isGreeting(text)) {
      setChatMessages([
        ...nextMessages,
        { sender: "bot", text: "Hi, I am Clasp Tech AI. How may I help you?" },
      ]);
    } else {
      setChatMessages([
        ...nextMessages,
        {
          sender: "bot",
          text: "Thanks for sharing that. I’m redirecting you to WhatsApp for instant help. Animesh sir is available and will connect with you shortly.",
        },
      ]);
      notifySupportOnWhatsApp(text);
    }

    setChatInput("");
    */
  };

  const handleChatOption = (option: ChatOption) => {
    if (chatStep !== "service") return;
    const updatedLead = { ...chatLead, service: option.value };
    setChatLead(updatedLead);
    setChatStep("business");
    setChatMessages((messages) => [
      ...messages,
      { sender: "user", text: option.value },
      { sender: "bot", text: "Great choice. Please tell me your business type or industry." },
    ]);
  };

  const sendViaEmail = (
    data: {
      name?: string;
      email?: string;
      company?: string;
      service?: string;
      details?: string;
    } | null,
  ) => {
    if (!data) return;
    const subject = encodeURIComponent("New contact request from website");
    const body = encodeURIComponent(
      `New website inquiry:\n\nName: ${data.name || ""}\nEmail: ${data.email || ""}\nCompany: ${data.company || ""}\nService: ${data.service || ""}\nDetails: ${data.details || ""}`,
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      primaryEmail,
    )}&su=${subject}&body=${body}`;
    if (typeof window !== "undefined") {
      window.open(gmailUrl, "_blank");
    }
    setShowSendModal(false);
    setSent(true);
  };

  const sendViaWhatsApp = (
    data: {
      name?: string;
      email?: string;
      company?: string;
      service?: string;
      details?: string;
    } | null,
  ) => {
    if (!data) return;
    const waText = `New website inquiry:%0A%0AName: ${encodeURIComponent(data.name || "")}%0AEmail: ${encodeURIComponent(data.email || "")}%0ACompany: ${encodeURIComponent(data.company || "")}%0AService: ${encodeURIComponent(data.service || "")}%0ADetails: ${encodeURIComponent(data.details || "")}`;
    const number = primaryPhone.replace(/\D/g, "");
    const waLink = `https://wa.me/${number}?text=${waText}`;
    if (typeof window !== "undefined") window.open(waLink, "_blank");
    setShowSendModal(false);
    setSent(true);
  };

  const handleBookingSave = () => {
    if (!bookingDate) return;
    const number = primaryPhone.replace(/\D/g, "");
    const message = encodeURIComponent(
      `Hello Clasp Tech, I would like to book a 30-minute walkthrough on ${bookingDate}. Please confirm the schedule.`,
    );
    const whatsappLink = `https://wa.me/${number}?text=${message}`;

    if (typeof window !== "undefined") {
      window.open(whatsappLink, "_blank");
    }

    setBookingSaved(true);
  };

  return (
    <SiteLayout>
      <section className="relative">
        <GlowBlobs />
        <Section className="text-center pt-10">
          <SectionHeading
            eyebrow="Let's talk"
            title={
              <>
                Start a conversation. <span className="gradient-text">Build something great.</span>
              </>
            }
            description="Share a few details and our team will reply within one business day."
          />
        </Section>
      </section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl border border-border bg-white p-8 soft-shadow">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-14 w-14 rounded-2xl gradient-brand text-white grid place-items-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-muted-foreground">
                  A team member will reply within one business day.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  A compose window was opened for both email addresses. You can also message either
                  number on WhatsApp below.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" id="name" placeholder="Jane Cooper" />
                  <Field
                    label="Work email"
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Company" id="company" placeholder="Acme Inc." />
                  <div>
                    <Label>Service</Label>
                    <select
                      className="mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      name="service"
                    >
                      <option>Custom Software</option>
                      <option>CRM Development</option>
                      <option>AI Calling Systems</option>
                      <option>Analytical Dashboards</option>
                      <option>Digital Marketing</option>
                      <option>Business Website</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label>Project details</Label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="Tell us about your goals, timelines, and any constraints…"
                    className="mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full gradient-brand text-white px-6 py-3 text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 grid gap-4 content-start">
            <div className="rounded-[32px] border border-white/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-xl shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/5 text-slate-900 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</div>
                  <p className="mt-1 text-sm text-slate-600">Fast replies from our core team.</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {contactEmails.map((email) => {
                  const subject = encodeURIComponent("Clasp Tech inquiry");
                  const body = encodeURIComponent(
                    "Hello Clasp Tech,\n\nI would like to discuss a project.\n\nThanks,\n",
                  );
                  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    email,
                  )}&su=${subject}&body=${body}`;
                  return (
                    <a
                      key={email}
                      href={gmailHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-primary hover:bg-primary/5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span>{email}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-xl shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700 shadow-sm">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">WhatsApp</div>
                  <p className="mt-1 text-sm text-slate-600">Reach us instantly on WhatsApp.</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactPhones.map((phone) => {
                  const number = phone.replace(/\D/g, "");
                  return (
                    <a
                      key={phone}
                      href={`https://wa.me/${number}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-emerald-500 hover:bg-emerald-50/80"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <WhatsAppIcon className="h-4 w-4" />
                      </div>
                      <span>{phone}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-xl shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/5 text-slate-900 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</div>
                  <p className="mt-1 text-sm font-medium text-slate-900">Noida Sec15, UP</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl gradient-brand text-white p-6 relative overflow-hidden">
              <CalendarDays className="h-5 w-5" />
              <h4 className="mt-2 text-lg font-semibold">Prefer a live demo?</h4>
              <p className="mt-1 text-sm text-white/85">
                Book a 30-minute walkthrough with our team.
              </p>
              {!bookingOpen ? (
                <button
                  onClick={() => setBookingOpen(true)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-4 py-2 text-sm font-medium hover:bg-white/90"
                >
                  Book a slot <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="mt-4 space-y-3">
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(event) => setBookingDate(event.target.value)}
                    className="w-full rounded-xl border border-white/40 bg-white/10 px-4 py-2 text-sm text-white outline-none focus:border-white"
                  />
                  <button
                    onClick={handleBookingSave}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-foreground px-4 py-2 text-sm font-medium hover:bg-white/90"
                  >
                    Confirm date
                  </button>
                  {bookingSaved && (
                    <p className="text-sm text-white/90">
                      Saved! A booking request has been opened on WhatsApp.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {showSendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowSendModal(false)} />
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Send inquiry</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose how you want to send this inquiry
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => sendViaEmail(pendingForm)}
                className="flex-1 rounded-full border border-border px-4 py-2 text-sm hover:bg-gray-50"
              >
                Send via Email
              </button>
              <button
                onClick={() => sendViaWhatsApp(pendingForm)}
                className="flex-1 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm hover:opacity-95"
              >
                Send via WhatsApp
              </button>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowSendModal(false)}
                className="text-sm text-muted-foreground"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Section>
        <div className="rounded-3xl overflow-hidden border border-border soft-shadow">
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.3285%2C28.5835%2C77.3355%2C28.5885&amp;layer=mapnik&marker=28.5860%2C77.3320"
            className="w-full h-[360px] border-0"
            loading="lazy"
          />
        </div>
      </Section>

      {/* Floating chat widget */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
          <div className="flex items-center justify-between rounded-t-3xl bg-slate-950 px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Clasp Tech AI</p>
                <p className="text-[11px] text-slate-300">Instant help with Animesh</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-slate-300 hover:text-white"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="max-h-[320px] overflow-y-auto px-4 py-4 space-y-3">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "bot"
                    ? "rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-900"
                    : "ml-auto rounded-3xl bg-gradient-to-r from-primary to-cyan-500 px-4 py-3 text-sm text-white"
                }
              >
                {message.text}
              </div>
            ))}
            {chatStep === "service" && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                {chatOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleChatOption(option)}
                    className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-left text-xs font-medium text-slate-700 transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={handleChatSubmit} className="border-t border-slate-200 px-4 py-3">
            <label htmlFor="chatInput" className="sr-only">
              Chat message
            </label>
            <div className="flex gap-2">
              <input
                id="chatInput"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder={getChatPlaceholder()}
                disabled={chatStep === "done"}
                className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={chatStep === "done"}
                className="inline-flex items-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        aria-label="Chat with us"
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full gradient-brand text-white pl-3 pr-4 py-3 shadow-xl shadow-primary/30 hover:scale-105 transition"
      >
        <span className="h-7 w-7 rounded-full bg-white/20 grid place-items-center">
          <MessageSquare className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium">Chat with us</span>
      </button>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium text-muted-foreground">{children}</label>;
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
