import { Route, Routes } from 'react-router-dom'
import React,{useState,useRef, RefObject} from 'react'
import { contextType } from './Components/types'

import List from './Pages/Jobs'
import Signin from './Pages/signin'
import SignUp from './Pages/signup'
import Navbar from './Components/Navbar'

export const Context = React.createContext<contextType| null>(null);


function App() {
  
  const [isSignIn, setIsSignIn] = useState<boolean>(false)
  const isLoggedInRef = useRef<boolean>(false);
  isLoggedInRef.current = isSignIn;

  

  return (
  
    <Context.Provider value={{isLoggedInRef, setIsSignIn}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='jobs' element={<List/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<Signin/>}/>
      </Routes>
    </Context.Provider>

  )
}

export default App
