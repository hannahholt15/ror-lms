import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Modal } from 'react-bootstrap';
import UserList from './UserList';
import UserForm from './UserForm';

const Users = () => {
  const [users, setUsers] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const addUser = (user) => {
    axios.post('/api/users', { user })
      .then(res => setUsers([...users, res.data]))
      .catch(err => console.log(err))
  }

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
      .then( res => {
        const newUpdatedUsers = user.map( u => {
          if (u.id === id) {
            return res.data
          }
          return u
        })
        setUsers(newUpdatedUsers)
      })
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
      .then( res => setUsers(users.filter( u => u.id !== id )))
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm addUser={addUser} setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <h1>All Users</h1>
      <UserList 
        users={users}
        deleteUser={deleteUser}
      />
    </Container>
  )
}

export default Users;