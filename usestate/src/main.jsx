import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Destructure from './Destructure.jsx'
import ArrayDestructure from './ArrayDestructure.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Destructure /> */}
    <ArrayDestructure />
  </StrictMode>,
)
