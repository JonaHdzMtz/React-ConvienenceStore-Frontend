import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Navigation} from "./pages/navigation/Navigation.jsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navigation/>
  </StrictMode>,
)
