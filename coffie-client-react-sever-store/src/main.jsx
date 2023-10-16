import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffie from './components/Pages/AddCoffie.jsx';
import UpdateCoffie from './components/Pages/UpdateCoffie.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:"addCoffie",
    element:<AddCoffie></AddCoffie>
  },
  {
    path:"updateCoffie/:id",
    element:<UpdateCoffie></UpdateCoffie>,
    loader:({params})=>fetch (`http://localhost:5000/coffee/${params.id}`)

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
