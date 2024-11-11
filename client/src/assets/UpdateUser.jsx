import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
  const {id} = useParams()
  const[name, setName] = useState()
  const[email, setEamil] = useState()
  const[age, setAge] = useState()
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
    .then(result => {console.log(result)
    setName(result.data.name)
    setEamil(result.data.email)
    setAge(result.data.age)
  })
    .catch(err => console.log(err))
}, [])

const Update = (e) => {
  e.preventDefault()
  axios.put(`http://localhost:3001/updateUser/${id}`, {name, email, age})
  .then(result => {
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
}
  
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='h-50 w-50 '>
        <form onSubmit={Update} className='ro'>
          <h1 className='text-center mb-4'>Update user</h1>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name'  className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>


          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email'  className='form-control' value={email} onChange={(e) => setEamil(e.target.value)}/>
          </div>


          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="number" placeholder='Enter Age'  className='form-control' value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>

          <button className='btn btn-primary w-100 mt-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
