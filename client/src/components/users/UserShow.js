import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import CourseList from "../courses/CourseList";
import { UserConsumer } from "../../providers/UserProvider";
import UserForm from "./UserForm";

const UserShow = ({ deleteUser }) => {
  const { id } = useParams()
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', password: '', img: '' })
  const [courses, setCourses] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then(res => setUser({...res.data}))
      .catch( err => console.log(err))

    axios.get(`/api/${id}/usercourses`)
      .then(res => setCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name, email, password, img } = user
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      <h4>Email: {email}</h4>
      <input disabled type='password' value={password} />
      <Image src={img} width='100px' alt='user' />
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm
            id={id}
            first_name={first_name}
            last_name={last_name}
            email={email}
            password={password}
            img={img}
            setEdit={setEdit}
          />
        </Modal.Body>
      </Modal>
      <Button onClick={() => deleteUser(id)}>
        Delete
      </Button>
      <br />
      <br />
      <br />
      <h1>All Courses Taking</h1>
      { courses.length > 0 ?
        <CourseList courses={courses} />
        : <p>Not taking any courses</p>
      }
    </>
  )
}

const ConnnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...props} {...value} />}
  </UserConsumer>
)

export default ConnnectedUserShow;