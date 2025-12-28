import React from "react";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
