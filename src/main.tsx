
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure WS_TOKEN is defined globally if it's not already
if (typeof window !== 'undefined' && typeof (window as any).__WS_TOKEN__ === 'undefined') {
  (window as any).__WS_TOKEN__ = 'dev-token';
}

createRoot(document.getElementById("root")!).render(<App />);
