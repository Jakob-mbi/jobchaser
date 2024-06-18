import { Route, Routes } from 'react-router-dom'
import List from './Pages/Jobs'
import Signin from './Pages/signin'
import Signup from './Pages/signup'


function App() {
  

  return (

    <Routes>
      <Route path='/' element={<List/>}/>
      <Route path='jobs' element={<List/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='signin' element={<Signin/>}/>
    </Routes>

  )
}

export default App
