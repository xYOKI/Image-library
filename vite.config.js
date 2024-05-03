import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const SITE_PATH = "album";

// https://vitejs.dev/config/
export default defineConfig({
  base: SITE_PATH,
  build: {
    outDir: SITE_PATH,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
