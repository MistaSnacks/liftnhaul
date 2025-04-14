
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

// Handle any other potential environment variables
if (typeof window !== 'undefined') {
  // Define default values for any other environment variables
  const defaultEnvVars = {
    '_hnRgeqybKIB': undefined,
    'BMD32f6Zh9U2': undefined // Add the new environment variable
  };
  
  // Apply defaults for any undefined variables
  Object.entries(defaultEnvVars).forEach(([key, value]) => {
    if (typeof window[key] === 'undefined') {
      window[key] = value;
    }
  });
}

// Mount the React application
createRoot(document.getElementById("root")!).render(<App />);
