import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  experimental: {
    viewTransitions: true,
  },
});