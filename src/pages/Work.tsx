import React, { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/content/profile";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Layout, Lock, Server } from "lucide-react";

const themeIcon: Record<string, React.ReactNode> = {
  platform: <Server className="text-slate-700" />,
  data: <Database className="text-slate-700" />,
  ai: <BrainCircuit className="text-slate-700" />,
  frontend: <Layout className="text-slate-700" />,
  security: <Lock className="text-slate-700" />
};

const themeLabel: Record<string, string> = {
  platform: "Platform",
  data: "Data",
  ai: "AI",
  frontend: "Frontend",
  security: "Security"
};

export default function Work() {
  const [filter, setFilter] = useState<"all" | "platform" | "data" | "ai" | "frontend" | "security">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return achievements;
    return achievements.filter((p) => p.theme === filter);
  }, [filter]);

  return (
    <div className="py-12 md:py-16">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected achievements and systems I’m proud of"
          desc="These are real outcomes from production environments: performance, reliability, and secure delivery at scale."
        />

        <div className="flex flex-wrap gap-2">
          {(["all", "platform", "data", "ai", "frontend", "security"] as const).map((k) => (
            <button
              key={k}
              className={cn(
                "rounded-full border px-3 py-1 text-sm font-semibold transition-colors",
                filter === k ? "border-slate-900/20 bg-slate-900 text-white" : "border-slate-900/10 bg-white text-slate-700 hover:bg-slate-50"
              )}
              onClick={() => setFilter(k)}
            >
              {k === "all" ? "All" : themeLabel[k]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.2) }}
            >
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <span className="grid h-8 w-8 place-items-center rounded-2xl border border-slate-900/10 bg-white shadow-ring">
                        {themeIcon[p.theme]}
                      </span>
                      {themeLabel[p.theme]}
                    </div>
                    <div className="mt-2 font-display text-xl font-bold text-slate-900">{p.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-600">Impact</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {p.impact.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-600">Stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Portfolio"
            title="Want a tailored walkthrough?"
            desc="If you send a job description, I can map these systems to what you’re hiring for: architecture choices, tradeoffs, and where I delivered the biggest wins."
          />
          <Card>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <div className="font-display text-lg font-bold text-slate-900">Architecture</div>
                <p className="mt-2 text-sm text-slate-600">
                  Service boundaries, eventing strategies, multi-region patterns, and safe migrations.
                </p>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-slate-900">Security & compliance</div>
                <p className="mt-2 text-sm text-slate-600">
                  Least privilege, auditability, secrets hygiene, and controls aligned to regulated environments.
                </p>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-slate-900">Performance</div>
                <p className="mt-2 text-sm text-slate-600">
                  Latency budgets, caching, GraphQL optimization, and cost/perf tradeoffs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
