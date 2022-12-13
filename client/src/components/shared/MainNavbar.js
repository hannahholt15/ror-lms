import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>LearnLMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link>
              <Link to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/courses'>
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/users'>
                Users
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;
