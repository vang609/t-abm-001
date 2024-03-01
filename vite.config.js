import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/t-abm-001/', 
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
