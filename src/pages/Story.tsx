import React from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, experience } from "@/content/profile";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";

export default function Story() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <SectionHeading
          eyebrow="Story"
          title="A builder’s arc: curiosity → systems at scale → measurable impact"
          desc="A short narrative for recruiters and hiring managers. If you want the deep dive, I’m happy to walk through architecture, tradeoffs, and metrics."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {profile.story.map((s) => (
            <Card key={s.heading} className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-transparent" />
              <div className="relative">
                <div className="font-display text-xl font-bold text-slate-900">{s.heading}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Timeline"
            title="Experience at a glance"
            desc="Roles and themes that shaped my engineering approach: platform reliability, performance, and disciplined delivery."
          />
          <div className="grid gap-4">
            {experience.map((e, idx) => (
              <motion.div
                key={e.company + e.dates}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.06, 0.25) }}
              >
                <Card>
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <div className="font-display text-2xl font-bold text-slate-900">{e.company}</div>
                      <div className="mt-1 text-slate-700">{e.role}</div>
                      <div className="mt-2 text-sm text-slate-500">{e.dates}</div>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                        {e.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:max-w-[320px]">
                      <div className="text-sm font-semibold text-slate-600">Stack highlights</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.stack?.slice(0, 9).map((s) => (
                          <Badge key={s}>{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Working style" title="What teams can expect" />
          <div className="grid gap-4 md:grid-cols-3">
            {profile.values.map((v) => (
              <Card key={v.title}>
                <div className="font-display text-xl font-bold text-slate-900">{v.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
