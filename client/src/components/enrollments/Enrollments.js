import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Container, Button, Modal } from "react-bootstrap";
import EnrollmentList from './EnrollmentList';
import EnrollmentForm from './EnrollmentForm';
import { EnrollmentConsumer } from "../../providers/EnrollmentProvider";

const Enrollments = ({ getAllEnrollments, enrollments }) => {
  const { courseId } = useParams()
  const location = useLocation()
  const { courseTitle } = location.state
  
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllEnrollments(courseId)
  }, [])
  
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
            setAdd={setAdd}
            course_id={courseId}
          />
        </Modal.Body>
      </Modal>

      <h1>All Enrollments for the course {courseTitle}</h1>
      <EnrollmentList 
        enrollments={enrollments}
      />
    </Container>
  )
}

const ConnectedEnrollments = (props) => (
  <EnrollmentConsumer>
    { value => <Enrollments {...props} {...value} />}
  </EnrollmentConsumer>
)

export default ConnectedEnrollments;
