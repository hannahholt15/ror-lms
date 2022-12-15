import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { UserConsumer } from "../../providers/UserProvider";

const UserForm = ({ addUser, setAdd, id, first_name, last_name, email, password, img, updateUser, setEdit }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', password: '', img: '' })

  useEffect( () => {
    if (id) {
      setUser({ first_name, last_name, email, password, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
    setUser({ first_name: '', last_name: '', email: '', password: '', img: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control 
            name='first_name'
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control 
            name='last_name'
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            type='email'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            name='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            type='password'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            name='img'
            value={user.img}
            onChange={(e) => setUser({ ...user, img: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedUserForm = (props) => (
  <UserConsumer>
    { value => <UserForm {...props} {...value} />}
  </UserConsumer>
)

export default ConnectedUserForm;