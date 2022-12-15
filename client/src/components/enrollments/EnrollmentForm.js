import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EnrollmentConsumer } from '../../providers/EnrollmentProvider';

const EnrollmentForm = ({ addEnrollment, setAdd, users, id, user_id, course_id, updateEnrollment, setEdit, getAllUsers }) => {
  const [enrollment, setEnrollment] = useState({ user_id: users[0].id })

  useEffect( () => {
    getAllUsers(course_id)
    if (id) {
      setEnrollment({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateEnrollment(course_id, id, enrollment)
      setEdit(false)
    } else {
      addEnrollment(course_id, enrollment)
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

const ConnnectEnrollmentForm = (props) => (
  <EnrollmentConsumer>
    { value => <EnrollmentForm {...props} {...value} />}
  </EnrollmentConsumer>
)

export default ConnnectEnrollmentForm;
