import { Container, Row, Col } from "react-bootstrap";

function ImpactSection() {
  return (
    <div style={{ backgroundColor: "#147B3B", color: "white", padding: "3rem 0" }}>
      <Container>
        <h3 className="text-center fw-bold mb-5">Our Collective Impact</h3>
        <Row className="text-center">
          <Col md={3} sm={6} className="mb-4">
            <h2 className="fw-bold text-success">5,280+</h2>
            <p>Items Recycled</p>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h2 className="fw-bold text-success">842</h2>
            <p>Active Users</p>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h2 className="fw-bold text-success">1,250</h2>
            <p>Pledges Made</p>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h2 className="fw-bold text-success">3.2 tons</h2>
            <p>Waste Diverted</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImpactSection;
