import { Route, Routes } from 'react-router-dom'
import React,{useState} from 'react'
import List from './Pages/Jobs'
import Signin from './Pages/signin'
import Signup from './Pages/signup'
import Navbar from './Components/Navbar'

export const Context = React.createContext();

function App() {
  
  const [isSignIn, setIsSignIn] = useState(false)
  // useEffect(() => {
  //   sessionStorage.getItem("currentUser")?? setIsSignIn(true)
  // }, [isSignIn]);

  

  return (
  
    <Context.Provider value={[isSignIn, setIsSignIn]}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='jobs' element={<List/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
      </Routes>
    </Context.Provider>

  )
}

export default App
