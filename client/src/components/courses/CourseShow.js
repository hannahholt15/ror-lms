import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { Button } from 'react-bootstrap';

const CourseShow = () => {
  const { id } = useParams()

  // optional if we are passing through the info through state 
  // in the link 
  const location = useLocation()
  const { title, desc, ctype, course_number } = location.state 

  // if we were grabbing infor through the axios call
  // const [course, setCourse] = useState({ title: "",  desc: '', ctype: '', course_number: 0 })

  // or optional can grab the course info with a axios call
  // useEffect( () => {
  //   axios.get(`/api/courses/${id}`)
  //     .then(res => setCourse({...res.data}))
  //     .catch( err => console.log(err))
  // }, [])

  return(
    <>
      <h1>{title}</h1>
      <h4>{ctype} {course_number}</h4>
      <p>{desc}</p>
      <Button>Enrollments</Button>
    </>
  )
}

export default CourseShow;