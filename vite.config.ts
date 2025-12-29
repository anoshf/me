import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  // GitHub Pages serves project sites from: https://<user>.github.io/<repo>/
  // Vite needs a matching `base` so assets load correctly.
  const viteBase = process.env.VITE_BASE;
  const repo = process.env.GH_PAGES_REPO || process.env.npm_package_name || "";
  const base = viteBase ?? (mode === "local" && repo ? `/${repo}/` : "/");

  return {
    base,
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    build: { sourcemap: true }
  };
});
