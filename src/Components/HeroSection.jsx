import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dumpster from "../assets/dumpster.jpg";
import "../App.css";

const HeroSection = () => {
  return (
    <>
      <Container fluid gap={3} style={{maxWidth:"100%", height:"auto"}} className='animate-card'>
        <Row className="p-0 p-md-5  m-0 m-md-auto align-items-center">
          <Col xs={12} md={6} className='pt-0 mt-5'>
            <div style={{color:"white"}}>
              <h1 style={{fontSize:"40px", fontWeight:"bold"}}>
                Make a <span style={{color:"#86EFAC"}}>Greener</span> World, One Recycle at a Time
              </h1>
              <p>
                Track your recycling efforts, learn about waste management, 
                and join a community of environmentally conscious individuals with CleanCity+.
              </p>
              <div className="d-flex gap-4 mb-2">
                {/* React Router navigation */}
                <Button 
                  as={Link} 
                  to="/recycling-tracker" 
                  variant="light" 
                  size="md" 
                  style={{color:"#206D3D",marginRight:"10px" }}
                >
                  Start Tracking
                </Button>

                <Button 
                  as={Link} 
                  to="/wastes" 
                  style={{backgroundColor:"#146A35", border:"none",  marginLeft:"10px"}} 
                  size="md"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className='mt-4 mt-md-0 mb-4 mb-md-0'>
            <img 
              src={dumpster} 
              className="img-fluid w-100 h-100 object-fit-cover rounded-5" 
              alt="Dumpster" 
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeroSection;
