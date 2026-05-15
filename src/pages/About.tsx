
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">

      <h1>About Me</h1>
      <hr />

      <Row className="mt-4">
        <Col md={6}>
          <h5 style={{ color: "#3c9dc7" }}>Name</h5>
          <p>Sandara C. Rai</p>

          <h5 style={{ color: "#3c9dc7" }}>Course</h5>
          <p>Bachelor of Science in Information Technology (BSIT)</p>

          <h5 style={{ color: "#3c9dc7" }}>Interests</h5>
          <p>I like designing and I want to be a future web designer or front-end developer.</p>

          <h5 style={{ color: "#3c9dc7" }}>My Journey</h5>
          <p>
            This semester I am having trouble learning but I swear I won't quit
            and will achieve my wanted job in the future.
          </p>
        </Col>
      </Row>

    </Container>
  );
};

export default About;
