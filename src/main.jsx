import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// O Bootstrap vem primeiro e o nosso CSS depois.
// Assim, quando os dois mexem na mesma coisa, o nosso ganha.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
