import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
 {/*Use to authenticate from the loading state*/}
 import {login, logout} from './Store/authSlice'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {
   const [loading, setLoading] = useState(true)
   const dispatch = useDispatch()

   useEffect(() => {
    {/* here we verify that validate that the current user is login or not */}
   authService.getCurrentUser()
   .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
         }else
         {
          dispatch(logout())  
         }
   })

   .finally(() => setLoading(false))
     }, [])
   
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between text-center  bg-gray-400'>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
       <Footer />
        </div> 
      </div>
  ) : null
}

export default App
