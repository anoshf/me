import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="font-display text-lg font-bold text-slate-900">Anosh Fallah</div>
          <div className="mt-1 text-sm text-slate-600">Senior Full-Stack AI Engineer & Architect • San Diego, CA</div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a className="link" href="https://linkedin.com/in/anoshf" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <NavLink to="/contact" className={({ isActive }) => cn(linkBase, isActive && "text-slate-900")}>
            Contact
          </NavLink>
        </div>
      </Container>
    </footer>
  );
}
