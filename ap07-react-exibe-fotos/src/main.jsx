import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'


import 'primereact/resources/themes/lara-light-indigo/theme.css'  //theme
import 'primeflex/primeflex.min.css'  // core css     
import 'primeicons/primeicons.css'   // icons
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
