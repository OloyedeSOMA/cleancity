import { Form, Button, Col, Row } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

const PledgeLog = ({ handleData, handleSubmit, formData }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="mb-3 pe-md-2">
          <Form.Label>Your Name *</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name || ''}
            onChange={handleData}
            required
            style={{ height: '40px' }}
          />
        </Col>

        <Col md={6} className="mb-3 ps-md-2">
          <Form.Label>Email Address *</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email || ''}
            onChange={handleData}
            required
            style={{ height: '40px' }}
          />
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Your Pledge *</Form.Label>
        <Form.Control
          name="pledge"
          as="textarea"
          placeholder="I pledge to reduce my waste by..."
          value={formData.pledge || ''}
          onChange={handleData}
          required
          style={{ height: '100px' }}
        />
      </Form.Group>

      <Button type="submit" variant="success" className="w-100" style={{ maxWidth: '505px', height: '40px' }}>
        <SendIcon fontSize="small" /> Submit Pledge
      </Button>
    </Form>
  );
};

export default PledgeLog;
