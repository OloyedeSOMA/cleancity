
import { Container, Row, Col, Button } from 'react-bootstrap';
import dumpster from "../assets/dumpster.jpg"
import "../App.css"

const HeroSection = () => {
  return (
    <>
      <Container fluid gap={3} style={{maxWidth:"100%", height:"auto"}} className='animate-card'>
        <Row  className="p-0 m-auto p-md-5 align-items-center">
          <Col xs={12} md={6} className='pt-0 mt-5'>
            <div style={{color:"white"}}>
              <h1 style={{fontSize:"50px", fontWeight:"bold"}}>Make a <span style={{color:"#86EFAC"}}>Greener</span> World, One Recycle at a Time</h1>
              <p>Track your recycling efforts, learn about waste management, and join a community of environmentally conscious individuals with CleanCity+.</p>
              <div className="d-flex gap-4 mb-2">
                <Button variant="light" size="sm" style={{color:"#206D3D"}}>Start Tracking</Button>
                <Button style={{backgroundColor:"#146A35", border:"none"}} size="sm" text="lg">Learn More</Button>
              </div>
              
            </div>
          </Col>
          <Col xs={12} md={6} >
              <img src={dumpster} className='img-fluid w-100 h-100 object-fit-cover rounded-5'/>
          </Col>
        </Row>
      
    </Container>
    </>
  )
}

export default HeroSection



