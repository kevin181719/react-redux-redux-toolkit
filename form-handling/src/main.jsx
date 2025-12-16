import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TwoWayBinding from './TwoWayBinding.jsx'
import FinalForm from './FinalForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TwoWayBinding/> */}
    <FinalForm/>
  </StrictMode>,
)
