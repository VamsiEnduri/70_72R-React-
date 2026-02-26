import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextComponent from './ContextComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextComponent d={ <App />} />  
                       
   {/* <ContextComponent>
    <App />              
   </ContextComponent>  */}
  </StrictMode>,
)
