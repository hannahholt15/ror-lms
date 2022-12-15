import { Button, ListGroup, Modal } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';
import EnrollmentForm from "./EnrollmentForm";

const EnrollmentShow = ({ user_id, id, course_id, updateEnrollment, deleteEnrollment, users }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '' })
  const [editing, setEdit] = useState(false)
  
  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const { first_name, last_name } = user 

  return (
    <ListGroup.Item>
      <h1>{first_name} {last_name}</h1>
      <Button variant="primary" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Enrollment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnrollmentForm
            id={id}
            course_id={course_id}
            user_id={user_id}
            updateEnrollment={updateEnrollment}
            setEdit={setEdit}
            users={users}
          />
        </Modal.Body>
      </Modal>
      <Button onClick={() => deleteEnrollment(id)}>
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default EnrollmentShow;