import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["alpinejs"],
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.gif"],
  base: "/ukol-porta-design/",
});
