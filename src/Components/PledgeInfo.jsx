import { ListGroup, Row, Col } from "react-bootstrap";

const PledgeInfo = () => {
  return (
    <Row>
      <Col md={6} className="p-3">
        <ListGroup variant="flush" style={{ maxWidth: '300px' }}>
          <ListGroup.Item className="border-0 p-1"><strong>Nature</strong></ListGroup.Item>
          <ListGroup.Item className="border-0 p-1">• Publicly committing to a goal increases your likelihood of following through</ListGroup.Item>
          <ListGroup.Item className="border-0 p-1">• Inspire others in the community with your environmental commitment</ListGroup.Item>
          <ListGroup.Item className="border-0 p-1">• Join a supportive community of like-minded individuals</ListGroup.Item>
          <ListGroup.Item className="border-0 p-1">• Track your progress and celebrate your environmental achievements</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={6} className="p-3 d-flex align-items-center">
        <div style={{ border: '2px solid #28a745', padding: '10px', borderRadius: '5px', backgroundColor: '#e9fce9' }}>
          “The greatest threat to our planet is the belief that someone else will save it.” - Robert Swan
        </div>
      </Col>
    </Row>
  );
};

export default PledgeInfo;