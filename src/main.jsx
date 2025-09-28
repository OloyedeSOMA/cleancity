import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WastePage from './pages/WastePage.jsx'
import WasteLoggingPage from './pages/WasteLoggingPage.jsx'
import PledgePage from './pages/PledgePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/wastes",
    element:<WastePage/>
  },
  {
    path:"/recycling-tracker",
    element:<WasteLoggingPage/>
  },
  {
    path:"/pledge",
    element:<PledgePage/>
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
