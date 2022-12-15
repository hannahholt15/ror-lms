import { ListGroup } from "react-bootstrap";
import EnrollmentShow from "./EnrollmentShow";

const EnrollmentList = ({ enrollments, updateEnrollment, deleteEnrollment, users }) => (
  <>
    <ListGroup>
      { enrollments.map( e => 
        <EnrollmentShow 
          key={e.id}
          {...e}
          updateEnrollment={updateEnrollment}
          deleteEnrollment={deleteEnrollment}
          users={users}
        />
      )}
    </ListGroup>
  </>
)

export default EnrollmentList