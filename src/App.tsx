import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageShell } from "@/components/PageShell";

import Home from "@/pages/Home";
import Story from "@/pages/Story";
import Work from "@/pages/Work";
import Community from "@/pages/Community";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/work" element={<Work />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageShell>
  );
}
