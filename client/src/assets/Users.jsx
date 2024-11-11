import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState ([])

    useEffect(() => {
        axios.get("http://localhost:3001/")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err)) 
    }

  return (
    <div className='container'>
      <div className='mt-5'>
        <Link to="/create" className='btn btn-info w-100 p-4 mb-5 '>Add +</Link>
        <table className='table table-striped table-hover table-borderless table-responsive'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>

                </tr>
            </thead>

            <tbody>
                {
                    users.map((user) => {
                        return(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td className='d-flex justify-content-around'>
                                <Link to={`/update/${user._id}`} className='btn btn-primary'>Update</Link>
                                <button 
                                className='btn btn-danger'
                                onClick={(e) => handleDelete(user._id)}
                                >Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
