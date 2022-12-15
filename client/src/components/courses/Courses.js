import { useState } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Button, Container } from 'react-bootstrap';
import { CourseConsumer } from '../../providers/CourseProvider';

const Courses = ({ courses }) => {
  const [adding, setAdd] = useState(false)
  // toggling add form and using conditional rendering option
  return (
    <Container>
      { adding ? 
        <>
          <CourseForm
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>
            Cancel
          </Button>
        </>
        :
        <Button
        onClick={() => setAdd(true)}
        >
          +
        </Button>
      }
      <br />
      <h1>All Courses</h1>
      <CourseList 
        courses={courses}
      />
    </Container>
  )
}

const ConnectedCourses = (props) => (
  <CourseConsumer>
    { value => <Courses {...props} {...value} />}
  </CourseConsumer>
)

export default ConnectedCourses;
