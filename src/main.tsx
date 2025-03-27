
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Token is already defined in index.html and vite.config.ts
// Removing redundant definition to avoid conflicts

createRoot(document.getElementById("root")!).render(<App />);
