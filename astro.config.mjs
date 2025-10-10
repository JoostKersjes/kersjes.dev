// @ts-check
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://kersjes.dev/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue()],
});
