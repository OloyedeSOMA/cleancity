import { Form, Button, Col, Row } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

const PledgeLog = ({ handleData, handleSubmit, formData }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="mb-3" style={{ maxWidth: '250px', paddingRight: '5px' }}>
          <Form.Label>Your Name *</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name || ''}
            onChange={handleData}
            required
            style={{ height: '40px', width: '100%' }}
          />
        </Col>
        <Col md={6} className="mb-3" style={{ maxWidth: '250px', paddingLeft: '5px' }}>
          <Form.Label>Email Address *</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email || ''}
            onChange={handleData}
            required
            style={{ height: '40px', width: '100%' }}
          />
        </Col>
      </Row>
      <Form.Group as={Col} className="mb-3" style={{ maxWidth: '505px' }}>
        <Form.Label>Your Pledge *</Form.Label>
        <Form.Control
          name="pledge"
          as="textarea"
          placeholder="I pledge to reduce my waste by..."
          value={formData.pledge || ''}
          onChange={handleData}
          required
          style={{ height: '100px', width: '100%' }}
        />
      </Form.Group>
      <Button type="submit" variant="success" style={{ maxWidth: '505px', height: '40px' }}>
        <SendIcon fontSize="small" /> Submit Pledge
      </Button>
    </Form>
  );
};

export default PledgeLog;
