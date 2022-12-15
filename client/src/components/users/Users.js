import { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import UserList from './UserList';
import UserForm from './UserForm';
import { UserConsumer } from '../../providers/UserProvider';

const Users = ({ users }) => {
  const [adding, setAdd] = useState(false)

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
          <UserForm setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <h1>All Users</h1>
      <UserList 
        users={users}
      />
    </Container>
  )
}

const ConnectedUsers = (props) => (
  <UserConsumer>
    { value => <Users {...props} {...value} />}
  </UserConsumer>
)
export default ConnectedUsers;
