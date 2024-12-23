import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
//import Login from './pages/Login.jsx'
import AddPost from './pages/AddPost.jsx'
import Signup from './pages/Singup.jsx'
import { AuthLayout, Login } from './components/index.js'

import AllPost from './pages/AllPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

const router =createBrowserRouter([
    {
  path:'/',
  element:<App />,
  children : [
    {
      path: '/',
      element: <Home />,
    },
    {
        path : "/login",
        element: (
            <AuthLayout authentication ={ false}>
                <Login />
            </AuthLayout>
        ) ,

        
    },
    {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
  {
      path: "/All-post",
      element: (
        <AuthLayout authentication>
            {" "}
            <AllPost  />
        </AuthLayout>
    ),
  },
  {
      path: "/Add-post",
      element: (
        <AuthLayout authentication>
            {" "}
            <AddPost />
        </AuthLayout>
    ),
  },
  {
      path: "/Edit-post/:slug",
      element: (
        <AuthLayout authentication>
            {" "}
            <EditPost />
        </AuthLayout>
    ),
  },
  {
      path: "/post/:slug",
      element: <Post />,
  },
], 
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider  router={router}/>

    </Provider>
  </StrictMode>,

)
