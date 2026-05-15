import { Container, Row, Col, Card } from "react-bootstrap";
import Cert1 from './images/Cert1.png';
import Cert2 from './images/Cert2.png';
import Cert3 from './images/Cert3.png';
import Cert4 from './images/Cert4.png';
import Cert5 from './images/Cert5.png';
import Cert6 from './images/Cert6.png';
const Certificate = () => {
  return (
    <Container className="py-5">
 
      <h1>Certificates</h1>
      <p>Here are my certificates.</p>
      <hr />
 
      <Row className="mt-4">
 
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Img
              variant="top"
              src={Cert1}
              alt="Certificate"
            />
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Certificate Title</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>Issued by: Organization Name</Card.Text>
              <Card.Text style={{ color: "#C6BFBB" }}>Date: January 2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Img
              variant="top"
              src={Cert2}
              alt="Certificate"
            />
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Certificate Title</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>Issued by: Organization Name</Card.Text>
              <Card.Text style={{ color: "#C6BFBB" }}>Date: January 2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Img
              variant="top"
              src={Cert3}
              alt="Certificate"
            />
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Certificate Title</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>Issued by: Organization Name</Card.Text>
              <Card.Text style={{ color: "#C6BFBB" }}>Date: January 2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Img
              variant="top"
              src={Cert4}
              alt="Certificate"
            />
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Certificate Title</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>Issued by: Organization Name</Card.Text>
              <Card.Text style={{ color: "#C6BFBB" }}>Date: January 2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Img
              variant="top"
              src={Cert5}
              alt="Certificate"
            />
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Certificate Title</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>Issued by: Organization Name</Card.Text>
              <Card.Text style={{ color: "#C6BFBB" }}>Date: January 2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: "#0b2028", border: "1px solid #1a3038" }}>
            <Card.Img
              variant="top"
              src={Cert6}
              alt="Certificate"
            />
            <Card.Body>
              <Card.Title style={{ color: "#3c9dc7" }}>Certificate Title</Card.Title>
              <Card.Text style={{ color: "#C6BFBB" }}>Issued by: Organization Name</Card.Text>
              <Card.Text style={{ color: "#C6BFBB" }}>Date: January 2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
 
      </Row>
 
    </Container>
  );
};
 
export default Certificate;