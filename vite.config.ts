
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      // Ensure WebSocket connection works properly
      clientPort: 443,
      protocol: 'wss',
    },
    allowedHosts: [
      "8fed0b4d-b496-4d51-a428-d29ca82cccd0.lovableproject.com"
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Fix the WebSocket token syntax by properly defining it as a simple string
    '__WS_TOKEN__': JSON.stringify("dev-token"),
    // Add fallback global definition for older Vite versions
    'global': 'globalThis',
  },
}));
