
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure global is properly defined
if (typeof window !== 'undefined' && !window.global) {
  window.global = window;
}

// Mount the React application
createRoot(document.getElementById("root")!).render(<App />);
