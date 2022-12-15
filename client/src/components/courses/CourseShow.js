import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';
import { CourseConsumer } from '../../providers/CourseProvider';
import CourseForm from './CourseForm';

const CourseShow = ({ deleteCourse }) => {
  const { id } = useParams()

  // optional if we are passing through the info through state 
  // in the link 
  const location = useLocation()
  const { title, desc, ctype, course_number } = location.state 
  const [users, setUsers] = useState([])
  const [editing, setEdit] = useState(false)
  // if we were grabbing infor through the axios call
  // const [course, setCourse] = useState({ title: "",  desc: '', ctype: '', course_number: 0 })

  // or optional can grab the course info with a axios call
  // useEffect( () => {
  //   axios.get(`/api/courses/${id}`)
  //     .then(res => setCourse({...res.data}))
  //     .catch( err => console.log(err))
  // }, [])

  useEffect( () => {
    axios.get(`/api/${id}/courseusers`)
      .then(res => setUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  return(
    <>
      <h1>{title}</h1>
      <h4>{ctype} {course_number}</h4>
      <p>{desc}</p>
      <Link 
        to={`/${id}/enrollments`}
        state={{ courseTitle: title }}
      >
        <Button>Enrollments</Button>
      </Link>
      <Button variant="waring" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CourseForm
            id={id}
            title={title}
            desc={desc}
            ctype={ctype}
            course_number={course_number}
            setEdit={setEdit}
          />
        </Modal.Body>
      </Modal>
      <Button onClick={() => deleteCourse(id)}>
        Delete
      </Button>
      <br />
      <br />
      <br />
      <h1>All Users in the Course</h1>
      { users.length > 0 ?
        <UserList users={users} />
      : <p>No users in the course</p>}
    </>
  )
}

const ConnectCourseShow = (props) => (
  <CourseConsumer>
    { value => <CourseShow {...props} {...value} />}
  </CourseConsumer>
)

export default ConnectCourseShow;