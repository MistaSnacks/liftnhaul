
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Define WS_TOKEN in a way that prevents the syntax error
window.__WS_TOKEN__ = "dev-token";

createRoot(document.getElementById("root")!).render(<App />);
