import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CourseContext = React.createContext();

export const CourseConsumer = CourseContext.Consumer;

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate();
  
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
        navigate('/courses')
        window.location.reload()
      })
      .catch( err => console.log(err))
  }

  const deleteCourse = (id) => {
    axios.delete(`/api/courses/${id}`)
      .then(res => {
        setCourses( courses.filter(c => c.id !== id ))
        navigate('/courses')
        window.location.reload()
      })
      .catch( err => console.log(err))
  }
  return (
    <CourseContext.Provider value={{
      courses, 
      addCourse,
      updateCourse,
      deleteCourse,
    }}>
      { children }
    </CourseContext.Provider>
  )
}

export default CourseProvider;