import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: '/project-name/',
  base: process.env.VITE_ASSET_PATH, 
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
