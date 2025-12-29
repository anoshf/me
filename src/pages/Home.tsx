import React from "react";
import { motion } from "framer-motion";
import AnoshPhoto from "@/assets/IMG_5499.png";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { profile, experience } from "@/content/profile";
import { ArrowRight, Layers, ShieldCheck, Timer } from "lucide-react";
import { Link } from "react-router-dom";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-ring">
      <div className="font-display text-2xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function Home() {
  const latest = experience[0];

  return (
    <div>
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
              >
                Full-stack platform engineering that ships{" "}
                <span className="bg-gradient-to-br from-blue-700 to-cyan-600 bg-clip-text text-transparent">fast</span>{" "}
                and{" "}
                <span className="bg-gradient-to-br from-cyan-600 to-blue-700 bg-clip-text text-transparent">safe</span>.
              </motion.h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {profile.heroBadges.map((b) => (
                  <Badge key={b}>{b}</Badge>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white/55 p-6">
                <div className="md:float-left md:mr-6 md:mb-4 w-full md:w-[320px] aspect-square overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--paper)] relative">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{ background: "..." }}
                  />
                  <img
                    src={AnoshPhoto}
                    alt="Anosh Fallah"
                    className="relative h-full w-full object-cover object-left-top"
                  />
                </div>

                <h2 className="font-display text-2xl font-extrabold tracking-tight text-[var(--ink)] md:text-3xl">
                  About
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  <p>
                    I’m Anosh Fallah — a Senior Software Engineer and Cloud Architect with 15+ years of experience delivering enterprise-scale, full-stack
                    and backend systems. My core strengths include Node.js, Python, React, TypeScript, GraphQL, Kafka, AWS serverless architectures, and
                    event-driven microservices.
                  </p>
                  <p>
                    Across Intuit, Medtronic, ADP, Disney ABC, and Ticketmaster, I’ve designed and shipped end-to-end applications using Spring Boot,
                    FastAPI, React, and AWS (Lambda, SQS, Fargate) — driving measurable outcomes such as 93% performance improvements, 45% throughput
                    increases, and resilient production platforms.
                  </p>
                  <p>
                    I’m drawn to high-quality platforms and continuous improvement. I thrive in collaborative teams, enjoy solving ambiguous problems, and
                    consistently deliver clean, well-tested, maintainable code.
                  </p>
                </div>

                <div className="clear-both" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/work">
                  <Button>
                    View impact <ArrowRight size={16} />
                  </Button>
                </Link>
                <a href={`mailto:${profile.email}?subject=Interview%20opportunity%20for%20${encodeURIComponent(profile.name)}`}>
                  <Button variant="ghost">Contact</Button>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {profile.stats.map((s) => (
                  <Stat key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-600">Currently</div>
                      <div className="mt-1 font-display text-2xl font-bold text-slate-900">{latest.company}</div>
                      <div className="mt-1 text-slate-700">{latest.role}</div>
                      <div className="mt-3 text-sm text-slate-500">{latest.dates}</div>
                    </div>

                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white border border-slate-900/10 shadow-ring">
                      <Layers className="text-slate-700" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/70 p-4">
                      <Timer className="text-slate-700" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Performance-first</div>
                        <div className="text-sm text-slate-600">GraphQL migrations + measurable latency wins.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/70 p-4">
                      <ShieldCheck className="text-slate-700" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Compliance-aligned</div>
                        <div className="text-sm text-slate-600">Security, auditing, SOX/PCI habits baked in.</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {latest.stack?.slice(0, 10).map((s) => (
                      <span key={s} className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900" to="/story">
                      Read the story <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Card>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Card className="p-4">
                  <div className="text-sm font-semibold text-slate-600">Focus</div>
                  <div className="mt-1 font-display text-lg font-bold text-slate-900">Distributed systems</div>
                  <div className="mt-1 text-sm text-slate-600">Event-driven architecture, resilience, observability.</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-semibold text-slate-600">Also</div>
                  <div className="mt-1 font-display text-lg font-bold text-slate-900">Modern frontend</div>
                  <div className="mt-1 text-sm text-slate-600">React + TypeScript with performance and UX polish.</div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-slate-600">How I operate</div>
              <div className="mt-2 font-display text-xl font-bold text-slate-900">Design for the pager.</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Every system needs clear ownership, predictable failure modes, and the right dashboards before launch.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-slate-600">Architecture</div>
              <div className="mt-2 font-display text-xl font-bold text-slate-900">Secure by default.</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Least privilege, encrypted data paths, auditable changes, and sane secrets handling — no heroics required.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-slate-600">Delivery</div>
              <div className="mt-2 font-display text-xl font-bold text-slate-900">Ship in slices.</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Small iterations with strong CI/CD and feedback loops beat big-bang rewrites. Always.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
