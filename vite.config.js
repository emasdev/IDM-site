import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    // Copies assets/ → dist/assets/ during production build.
    // In dev mode Vite serves all root files statically, so assets/ paths
    // like "assets/img/gallery/1.png" already work without copying.
    viteStaticCopy({
      targets: [{ src: "assets", dest: "." }],
    }),
  ],
});
