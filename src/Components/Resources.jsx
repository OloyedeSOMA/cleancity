import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function Resources() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 mb-5">
      
      {/* Local Recycling Centers Card */}
      <Card className="shadow-sm border-0 shadow-lg" style={{ maxWidth: "420px", height:"auto" }}>
        <div className="p-1 md-p-5 border-start border-4 border-success rounded-start">
          <Card.Img variant="top" src={image2} className="rounded-5" />
          <Card.Body className="p-3 p-md-4">
            <Card.Title className="fw-bold">Local Recycling Centers</Card.Title>
            <Card.Text>
              Find recycling centers in your area that accept specific types of waste materials.
            </Card.Text>
            
            {/* Search by ZIP */}
            <Form>
              <Form.Label>Search by ZIP Code:</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Enter ZIP code" />
                <Button variant="success">Search</Button>
              </InputGroup>
            </Form>
          </Card.Body>
        </div>
      </Card>

      {/* Recycling Guidelines Card */}
      <Card className="border-0 shadow-lg" style={{ maxWidth: "420px",  height:"auto" }}>
        <div className="border-start p-1 md-p-5 border-4 border-success rounded-start">
          <Card.Img variant="top" src={image3} className="rounded-5" />
          <Card.Body className="p-3 p-md-4">
            <Card.Title className="fw-bold">Recycling Guidelines</Card.Title>
            <Card.Text>
              Download comprehensive guides for waste sorting and recycling in your home or office.
            </Card.Text>

            {/* PDF Links */}
            <div className="d-grid gap-2">
              <a href="" className="btn btn-outline-secondary text-start">
                📄 Home Recycling Guide (PDF)
              </a>
              <a href=""  className="btn btn-outline-secondary text-start">
                📄 Office Waste Management (PDF)
              </a>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Resources;
