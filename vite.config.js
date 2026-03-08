import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // All /api/* and /video_feed requests are forwarded to Flask
      "/api": {
        target: "http://localhost:5002",
        changeOrigin: true,
      },
      "/video_feed": {
        target: "http://localhost:5002",
        changeOrigin: true,
      },
    },
  },
});