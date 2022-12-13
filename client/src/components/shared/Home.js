import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const Home = () => (
  <>
    <h1>Checkout out Courses</h1>
    <h5>Manage courses, users, and enrollment All in a one app!</h5>
    <Container>
      <Row>
        <Col>
          <h3>Featuring our Top Courses!</h3>
          <Row>
            <Col>
              <p>White box testing to test outside the box</p>
            </Col>
            <Col>
              <p>Deploy and shipping a finshed application</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Image 
            src="https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2358&q=80"
            alt='home pic'
            width='600px'
          />
        </Col>
      </Row>

    </Container>
    <br />
    <br />
    <br />
    <Container>
      <h1>Team Members</h1>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '26rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
            <Card.Body>
              <Card.Title>Bob Smith</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '26rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
            <Card.Body>
              <Card.Title>Bob Smith</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '26rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
            <Card.Body>
              <Card.Title>Bob Smith</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '26rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
            <Card.Body>
              <Card.Title>Bob Smith</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <br />
  </>
)

export default Home;