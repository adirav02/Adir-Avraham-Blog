import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://adiravraham.com",
  integrations: [
    tailwind(),
    react(),
    db(),
    mdx(),
    sitemap({
      filter: (page) => page !== "https://adiravraham.com/subscription/",
    }),
  ],
  output: "hybrid",
  adapter: netlify(),
});
