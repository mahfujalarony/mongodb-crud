import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const[name, setName] = useState()
  const[email, setEamil] = useState()
  const[age, setAge] = useState()
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result =>  {
      console.log(result)
      navigate('/')
    }
    )
    .catch(err => console.log(err))
  
  }


   return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='h-50 w-50 '>
        <form onSubmit={submit}>
          <h1 className='text-center mb-4'>Add User</h1>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name'  className='form-control' onChange={(e) => setName(e.target.value)}/>
          </div>


          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email'  className='form-control' onChange={(e) => setEamil(e.target.value)}/>
          </div>


          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age'  className='form-control' onChange={(e) => setAge(e.target.value)}/>
          </div>
          <button className='btn btn-primary w-100 mt-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser


//12 minite