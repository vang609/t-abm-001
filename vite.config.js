import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_ASSET_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
  // base: '/project-name/',
  // base: process.env.VITE_ASSET_PATH, 
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
