import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App2 from './App2.jsx'
import ContextComp from './ContextComp'
import App3 from './App3'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <ContextComp >
      <App3 />
    </ContextComp>
  </StrictMode>,
)
