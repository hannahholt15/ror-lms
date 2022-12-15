import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CourseConsumer } from '../../providers/CourseProvider';

const CourseForm = ({ addCourse, setAdd, id, title, desc, ctype, course_number, updateCourse, setEdit }) => {
  const [course, setCourse] = useState({ title: '', desc: '', ctype: 'Misc', course_number: 0 })

  useEffect(() => {
    if (id) {
      setCourse({ title, desc, ctype, course_number })
    }
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (id) {
      updateCourse(id, course)
      setEdit(false)
    } else {
      addCourse(course)
      setAdd(false)
    }
    setCourse({ title: '', desc: '', ctype: 'Misc', course_number: 0 })
  }

  return (
    <>
      <h1>{id ? "Update" : 'Create'} Course</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control 
            name='title'
            value={course.title}
            onChange={(e) => setCourse({...course, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={course.desc}
            onChange={(e) => setCourse({...course, desc: e.target.value })}
            required
            as="textarea" 
            rows={3}
          />
          <Form.Select 
            name='ctype'
            value={course.ctype}
            onChange={(e) => setCourse({...course, ctype: e.target.value })}
            required
          >
            <option value="Misc">Misc.</option>
            <option value="Cooking">Cooking</option>
            <option value="CS">CS</option>
            <option value="Math">Math</option>
            <option value="Writing">Writing</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Course Number</Form.Label>
          <Form.Control 
            name='course_number'
            value={course.course_number}
            onChange={(e) => setCourse({...course, course_number: parseInt(e.target.value) })}
            required
            type='number'
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedCourseForm = (props) => (
  <CourseConsumer>
    { value => <CourseForm {...props} {...value} />}
  </CourseConsumer>
)

export default ConnectedCourseForm;