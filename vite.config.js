import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: "brotli" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});