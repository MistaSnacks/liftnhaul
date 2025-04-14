
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
    // Properly define all environment variables as string literals
    '__WS_TOKEN__': "'dev-token'",
    // Define any other potential environment variables as string literals
    '_hnRgeqybKIB': "'undefined'",
    // Use globalThis for global definition
    'global': 'globalThis',
  },
}));
