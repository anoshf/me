import React, { useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/content/profile";
import { Button } from "@/components/Button";
import { Copy, LinkedinIcon, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-ring">
      <div>
        <div className="text-sm font-semibold text-slate-600">{label}</div>
        <div className="mt-1 text-sm text-slate-900">{value}</div>
      </div>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1100);
        }}
        className="inline-flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        <Copy size={16} /> {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (status === "sending") return;

    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });

      setName("");
      setFromEmail("");
      setMessage("");
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      const messageWithMeta =
        `${message}\n\n` +
        `------------------------------\n` +
        `Name: ${name}\n` +
        `Email: ${fromEmail}`;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: fromEmail,
          message: messageWithMeta,
        },
        { publicKey }
      );

      setName("");
      setFromEmail("");
      setMessage("");
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="py-12 md:py-16">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Contact me"
          desc="Use the form below to send a message directly, or reach out directly. I’m responsive and happy to share availability."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="font-display text-xl font-bold text-slate-900">Send me a Message</div>

            <form ref={formRef} className="mt-4 grid gap-3" onSubmit={onSubmit}>
              <label className="text-sm font-semibold text-slate-600">
                Name
                <input
                  required
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Your name"
                />
              </label>

              <label className="text-sm font-semibold text-slate-600">
                Email
                <input
                  required
                  name="reply_to"
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="you@company.com"
                />
              </label>

              <label className="text-sm font-semibold text-slate-600">
                Message
                <textarea
                  required
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                  className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="What role are you hiring for? Team? Stack? Interview process/timeline?"
                />
              </label>

              <Button className="w-full" type="submit">
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>

              {status === "sent" && <div className="text-xs text-slate-500">Message sent successfully.</div>}
              {status === "error" && (
                <div className="text-xs text-slate-500">Failed to send. Please try again, or email me directly.</div>
              )}

              <div className="text-xs text-slate-500">
                Prefer direct email? Copy/paste my contact details on the right.
              </div>
            </form>
          </Card>

          <Card>
            <div className="font-display text-xl font-bold text-slate-900">Direct contact</div>
            <div className="mt-4 grid gap-3">
              <CopyRow label="Email" value={profile.email} />
              <CopyRow label="Phone" value={profile.phone} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}?subject=Interview%20opportunity%20for%20${encodeURIComponent(profile.name)}`}>
                <Button>
                  <Mail size={16} /> Email
                </Button>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost">
                  <LinkedinIcon size={16} /> LinkedIn
                </Button>
              </a>
              <a href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}>
                <Button variant="ghost">
                  <Phone size={16} /> Call
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
