
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
    // Define the WebSocket token explicitly to prevent the error
    __WS_TOKEN__: JSON.stringify(process.env.VITE_WS_TOKEN || 'dev-token'),
    // Add fallback global definition for older Vite versions
    global: 'window',
  },
}));
