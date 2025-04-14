
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure global is properly defined
if (typeof window !== 'undefined' && !window.global) {
  window.global = window;
}

// Make sure __WS_TOKEN__ is properly defined
if (typeof window !== 'undefined' && typeof window.__WS_TOKEN__ === 'undefined') {
  window.__WS_TOKEN__ = 'dev-token';
}

// Mount the React application
createRoot(document.getElementById("root")!).render(<App />);
