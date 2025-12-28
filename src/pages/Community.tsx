import React from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { community, profile } from "@/content/profile";
import { Badge } from "@/components/Badge";
import { Dumbbell, MapPin, Users } from "lucide-react";

export default function Community() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <SectionHeading
          eyebrow="Community"
          title="Sharing what I learn — and staying human outside the keyboard"
          desc="I like teams that invest in learning and community: inside the company and in the local ecosystem."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-900/10 bg-white shadow-ring">
                  <Users className="text-slate-700" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-slate-900">{community.ticketmaster.heading}</div>
                  <div className="text-sm text-slate-600">Internal meetups, docs, and shared playbooks</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{community.ticketmaster.body}</p>
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-900/10 bg-white shadow-ring">
                  <MapPin className="text-slate-700" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-slate-900">{community.sandiego.heading}</div>
                  <div className="text-sm text-slate-600">Local events and engineering conversations</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{community.sandiego.body}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {community.groups.map((g) => (
                  <Badge key={g}>{g}</Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Interests"
            title="Outside work: training, movement, and competition"
            desc="Staying durable and consistent shows up in how I work: disciplined, incremental progress."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {profile.interests.map((i) => (
              <Card key={i.title}>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-900/10 bg-white shadow-ring">
                    <Dumbbell className="text-slate-700" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-slate-900">{i.title}</div>
                    <div className="text-sm text-slate-600">{i.desc}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
