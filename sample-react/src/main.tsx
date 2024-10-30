import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/index.css'
import App from './components/app/App.tsx'
import OriginalForm from './components/form/Form.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App arg1='hello' color='red'/>
    <OriginalForm />
  </StrictMode>,
)
