import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import User from './components/user/User.jsx'
import Login from './components/user/Login.jsx'
import Register from './components/user/Register.jsx'

import AuthContext from './providers/AuthContext.jsx'
import Review from './components/Booking/Review.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'tour/:id', element: <Review /> }
    ]
  },
  {
    path: '/user',
    element: <User />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
