import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EnrollmentContext = React.createContext();

export const EnrollmentConsumer = EnrollmentContext.Consumer;

const EnrollmentProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState([])
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  const getAllEnrollments = (courseId) => {
    axios.get(`/api/courses/${courseId}/enrollments`)
      .then(res => setEnrollments(res.data))
      .catch(err => console.log(err))
  }

  const getAllUsers = (courseId) => {
    // make api call to our custom route -> custom action
    axios.get(`/api/courses/${courseId}/avausers`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const addEnrollment = (courseId, enrollment) => {
    axios.post(`/api/courses/${courseId}/enrollments`, { enrollment })
    .then(res => setEnrollments([...enrollments, res.data]))
    .catch(err => console.log(err))
  }

  const updateEnrollment = (courseId, id, enrollment) => {
    axios.put(`/api/courses/${courseId}/enrollments/${id}`, { enrollment })
      .then( res => {
        const newUpdatedEnrollments = enrollments.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setEnrollments(newUpdatedEnrollments)
        navigate(`/courses/`)
      })
      .catch(err => console.log(err))
  }

  const deleteEnrollment = (courseId, id) => {
    axios.delete(`/api/courses/${courseId}/enrollments/${id}`)
      .then(res => {
        setEnrollments(enrollments.filter(e => e.id !== id))
        navigate(`/courses/`)
      })
      .catch(err => console.log(err))
  }

  return (
    <EnrollmentContext.Provider value={{
      enrollments,
      users,
      getAllEnrollments,
      getAllUsers,
      addEnrollment,
      updateEnrollment,
      deleteEnrollment,
    }}>
      { children }
    </EnrollmentContext.Provider>
  )
}

export default EnrollmentProvider;