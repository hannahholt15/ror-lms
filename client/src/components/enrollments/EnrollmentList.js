import { ListGroup } from "react-bootstrap";
import EnrollmentShow from "./EnrollmentShow";

const EnrollmentList = ({ enrollments }) => (
  <>
    <ListGroup>
      { enrollments.map( e => 
        <EnrollmentShow 
          key={e.id}
          {...e}
        />
      )}
    </ListGroup>
  </>
)

export default EnrollmentList