import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";
import { LinkedinIcon, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

const linkBase = "text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-soft">
            <Sparkles size={18} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-slate-900">Anosh Fallah</div>
            <div className="text-xs text-slate-600">Staff Full-Stack Engineer</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/story" className={({ isActive }) => cn(linkBase, isActive && "text-slate-900")}>
            Story
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => cn(linkBase, isActive && "text-slate-900")}>
            Work
          </NavLink>
          <NavLink to="/community" className={({ isActive }) => cn(linkBase, isActive && "text-slate-900")}>
            Community
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => cn(linkBase, isActive && "text-slate-900")}>
            Contact
          </NavLink>
        </nav>

        <div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <LinkedinIcon size={16} />
            </Button>
          </a>
          <a
            href="mailto:anosh7@gmail.com?subject=Interview%20opportunity%20for%20Anosh%20Fallah"
            className="inline-flex items-center gap-2 rounded-2xlbg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:shadow-soft"
          >
            <Mail size={16} /> Reach out
          </a>
        </div>
      </Container>
    </header>
  );
}
