import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

const UserShow = ({}) => {
  const { id } = useParams()
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', password: '', img: '' })

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then(res => setUser({...res.data}))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name, email, password, img } = user
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      <h4>Email: {email}</h4>
      <input disabled type='password' value={password} />
      <Image src={img} width='100px' alt='user' />
      <Button>Edit</Button>
      <Button>Delete</Button>
    </>
  )
}

export default UserShow;