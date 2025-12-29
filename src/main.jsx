import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastProvider } from './contexts/ToastContext.jsx';
import { NotificationProvider } from './contexts/NotificationContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      
    <ToastProvider>
    <App />
    </ToastProvider>
    </NotificationProvider>
  </StrictMode>,
)
