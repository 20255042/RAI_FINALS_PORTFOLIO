import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <Container className="py-5">

      <h1>Projects</h1>
      <p>In this page, you can view my projects in the whole semester. We used React, TypeScript, and other modern web technologies to build these applications.</p>

      {/* FIRST GRADING */}
      <h2 className="mt-4">First Grading</h2>
      <hr />
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Resume</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>A React application that displays a complete sample resume using TypeScript and JSX..</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/UNIT1_LESSON1_A_RAI/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Student Dashboard</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>a simple student dashboard with conditional rendering, lists, and fragments.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/FG_LAB2_RAI/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>a Student Information System</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>reusable React components, compose them into a functional UI, and utilize props and React state.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/FG_LAB3_RAI/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Club Dashboard</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>dashboard web page that displays a list of its members and their activities.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/LAB-EXAM/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* MIDTERM GRADING */}
      <h2 className="mt-5">Midterm Grading</h2>
      <hr />
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Event Registration Dashboard</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>displays a list of university events and the students registered for each event.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/FG_Lab4/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Student Services Portal</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>students can easily navigate different sections of the website.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/MG_LAB5_RAI/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Book Request Form</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>A Book Request Form where students can submit requests for books that are currently unavailable in the library.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/MG_LAB3_RAI/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FINAL GRADING */}
      <h2 className="mt-5">Final Grading</h2>
      <hr />
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Course Feedback System</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>where students can submit feedback about their subjects.</Card.Text>
              <Button variant="outline-info" href="https://20255042.github.io/RAI-FINALS-LAB1/" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Contact Section</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>users can send messages to the website administrators.</Card.Text>
              <Button variant="outline-info" href="#/contact" target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default Projects;
