import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './assets/Users'
import CreateUser from './assets/CreateUser'
import UpdateUser from './assets/UpdateUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Users />}></Route>
        </Routes>


        <Routes>
          <Route path='/create' element={ <CreateUser />}></Route>
        </Routes>


        <Routes>
          <Route path='/update/:id' element={ <UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
