import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const linkBase = "text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 py-10">
      <Container className="flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left Section */}
        <div>
          <div className="font-display text-lg font-bold text-slate-900">Anosh Fallah</div>
          <div className="mt-1 text-sm text-slate-600">Senior Full-Stack AI Engineer & Architect</div>
        </div>

        {/* Right Section (Menu) */}
        <div className="flex flex-wrap gap-4 text-sm ml-auto md:ml-0">
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
        </div>
      </Container>

    </footer>
  );
}
