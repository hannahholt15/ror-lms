import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Modal } from "react-bootstrap";
import EnrollmentList from './EnrollmentList';
import EnrollmentForm from './EnrollmentForm';

const Enrollments = () => {
  const { courseId } = useParams()
  const location = useLocation()
  const { courseTitle } = location.state
  const [enrollments, setEnrollments] = useState([])
  const [users, setUsers] = useState([])
  const [adding, setAdd] = useState(false);
  const navigate = useNavigate();

  useEffect( () => {
    axios.get(`/api/courses/${courseId}/enrollments`)
      .then(res => setEnrollments(res.data))
      .catch(err => console.log(err))

      // make api call to our custom route -> custom action
    axios.get(`/api/courses/${courseId}/avausers`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const addEnrollment = (enrollment) => {
    axios.post(`/api/courses/${courseId}/enrollments`, { enrollment })
    .then(res => setEnrollments([...enrollments, res.data]))
    .catch(err => console.log(err))
  }

  const updateEnrollment = (id, enrollment) => {
    axios.put(`/api/courses/${courseId}/enrollments/${id}`, { enrollment })
      .then( res => {
        const newUpdatedEnrollments = enrollments.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setEnrollments(newUpdatedEnrollments)
        window.location.reload()
        // navigate(`/${courseId}/enrollment`)
      })
      .catch(err => console.log(err))
  }

  const deleteEnrollment = (id) => {
    axios.delete(`/api/courses/${courseId}/enrollments/${id}`)
      .then(res => setEnrollments(enrollments.filter(e => e.id !== id)))
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>CreateEnrollment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnrollmentForm 
            addEnrollment={addEnrollment}
            setAdd={setAdd}
            users={users}
          />
        </Modal.Body>
      </Modal>

      <h1>All Enrollments for the course {courseTitle}</h1>
      <EnrollmentList 
        enrollments={enrollments}
        updateEnrollment={updateEnrollment}
        deleteEnrollment={deleteEnrollment}
        users={users}
      />
    </Container>
  )
}

export default Enrollments;