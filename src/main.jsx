import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'
import './assets/css/tailwind.css'
import routes from "./routes/index"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {routes}/>
 
  
)
