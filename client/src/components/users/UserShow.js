import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import CourseList from "../courses/CourseList";

const UserShow = ({}) => {
  const { id } = useParams()
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', password: '', img: '' })
  const [courses, setCourses] = useState([])

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then(res => setUser({...res.data}))
      .catch( err => console.log(err))

    axios.get(`/api/${id}/usercourses`)
      .then(res => setCourses(res.data))
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
      <br />
      <br />
      <br />
      <h1>All Courses Taking</h1>
      { courses.length > 0 ?
        <CourseList courses={courses} />
        : <p>Not taking any courses</p>
      }
    </>
  )
}

export default UserShow;