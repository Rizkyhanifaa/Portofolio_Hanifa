import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 800, // durasi animasi (ms)
  easing: 'ease-in-out',
  once: false,    // animasi berkali kali
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
