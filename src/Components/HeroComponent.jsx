import { Container, Row, Col } from 'react-bootstrap';
import "../App.css"

const HeroComponent = ({ header, text, bgImage }) => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center text-center text-white position-relative animate-card"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "45vh",
      }}
    >
      {/* Green overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 128, 0, 0.4)" }}
      ></div>

      {/* Content */}
      <Row className="position-relative w-100">
        <Col>
          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>{header}</h1>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroComponent;