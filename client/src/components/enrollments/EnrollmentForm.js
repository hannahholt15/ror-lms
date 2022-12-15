import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const EnrollmentForm = ({ addEnrollment, setAdd, users, id, user_id, updateEnrollment, setEdit }) => {
  const [enrollment, setEnrollment] = useState({ user_id: users[0] })

  useEffect( () => {
    if (id) {
      setEnrollment({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateEnrollment(id, enrollment)
      setEdit(false)
    } else {
      addEnrollment(enrollment)
      setAdd(false)
    }
    setEnrollment({ user_id: 0 })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User to enroll</Form.Label>
          <Form.Select
            name='user_id'
            value={enrollment.user_id}
            onChange={(e) => setEnrollment({...enrollment, user_id: e.target.value})}
          >
            { users.map( u => 
              <option value={u.id}>{u.first_name} {u.last_name}</option>
            )}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default EnrollmentForm;