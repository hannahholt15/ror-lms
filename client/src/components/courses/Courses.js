import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Button, Container } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    axios.get('/api/courses')
      .then( res => setCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  const addCourse = (course) => {
    axios.post('/api/courses', { course })
      .then( res => setCourses([...courses, res.data]))
      .catch( err => console.log(err))
  }

  // TODO need to find a better way to update
  const updateCourse = (id, course) => {
    axios.put(`/api/courses/${id}`, { course })
      .then( res => {
        const newUpdatedCourses = courses.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCourses(newUpdatedCourses)
      })
      .catch( err => console.log(err))
  }

  const deleteCourse = (id) => {
    axios.delete(`/api/courses/${id}`)
      .then(res => setCourses( courses.filter(c => c.id !== id )))
      .catch( err => console.log(err))
  }

  // toggling add form and using conditional rendering option
  return (
    <Container>
      { adding ? 
        <>
          <CourseForm
            addCourse={addCourse}
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>
            Cancel
          </Button>
        </>
        :
        <Button
        onClick={() => setAdd(true)}
        >
          +
        </Button>
      }
      <br />
      <h1>All Courses</h1>
      <CourseList 
        courses={courses}
        updateCourse={updateCourse}
        deleteCourse={deleteCourse}
      />
    </Container>
  )
}

export default Courses;