
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import "./WasteAccordion.css"
import "../App.css"

function WasteAccordion() {
  return (
    <Container className="my-5 shadow-lg p-2 md-p-5 rounded-2 animate-card">
      <p className="mb-4">
        Understanding how to sort and dispose of different types of waste is
        crucial for effective recycling and waste management. Expand each
        category below to learn more about proper disposal methods and recycling
        tips.
      </p>

      <Accordion defaultActiveKey="0" >
        {/* Plastic Waste */}
        <Accordion.Item eventKey="0"  >
          <Accordion.Header >
            <span style={{color:"white"}}>♻ Plastic Waste</span>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              {/* Left Column */}
              <Col md={6}>
                <h6 className="fw-bold">Types of Plastic Waste</h6>
                <ul>
                  <li>PET - Water bottles, soda bottles</li>
                  <li>HDPE - Milk jugs, detergent bottles</li>
                  <li>PVC - Pipes, shower curtains</li>
                  <li>LDPE - Plastic bags, food wrap</li>
                  <li>PP - Yogurt containers, bottle caps</li>
                  <li>PS - Foam cups, packaging peanuts</li>
                </ul>
              </Col>

              {/* Right Column */}
              <Col md={6}>
                <h6 className="fw-bold">Disposal Tips</h6>
                <ul>
                  <li>Rinse containers before recycling</li>
                  <li>Remove caps and lids</li>
                  <li>Check recycling number (1-7)</li>
                  <li>Avoid plastic bags in recycling bins</li>
                  <li>Crush bottles to save space</li>
                </ul>
                <Card className="mt-3 border-0 shadow-sm bg-light">
                  <Card.Body>
                    <strong>Did you know?</strong>  
                    <p className="mb-0">
                      It takes up to 500 years for plastic to decompose in a landfill.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Organic Waste */}
        <Accordion.Item eventKey="1">
          <Accordion.Header ><span style={{color:"white"}}> 🌱 Organic Waste </span></Accordion.Header>
          <Accordion.Body>
            <Row>
              {/* Left Column */}
              <Col md={6}>
                <h6 className="fw-bold">Types of Organic Waste</h6>
                <ul>
                  <li>Food scraps (fruits, vegetables, eggshells)</li>
                    <li>Coffee grounds and filters </li>
                    <li>Tea bags (remove staples)</li>
                    <li>Yard trimmings and leaves</li>
                    <li>Non-treated wood chips</li>
                    <li> Paper towels and napkins (if not contaminated)</li>
                </ul>
              </Col>

              {/* Right Column */}
              <Col md={6}>
                <h6 className="fw-bold">Disposal Tips</h6>
                <ul>
                    <li>Start a home compost bin</li>
                    <li>Separate food waste from other trash</li>
                    <li>Use a kitchen counter compost collector</li>
                    <li>Check if your city offers organic waste collection</li>
                    <li>Avoid composting meat, dairy, and oils</li>
                    
                </ul>
                <Card className="mt-3 border-0 shadow-sm bg-light">
                  <Card.Body>
                    <strong>Did you know?</strong>  
                    <p className="mb-0">
                      Composting can reduce the amount of waste going to landfills by up to 30%.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            

          </Accordion.Body>
        </Accordion.Item>

        {/* E-Waste */}
        <Accordion.Item eventKey="2">
          <Accordion.Header><span style={{color:"white"}}> 💻 E-Waste </span></Accordion.Header>
          <Accordion.Body>
             <Row>
              {/* Left Column */}
              <Col md={6}>
                <h6 className="fw-bold">Types of Electronic Waste</h6>
                <ul>
                    <li>Computers and laptops</li>
                    <li>Mobile phones and tablets</li>
                    <li>Televisions and monitors</li>
                    <li>Printers and scanners</li>
                    <li>Batteries and chargers</li>
                    <li>Small household appliances</li>
                    
                </ul>
              </Col>

              {/* Right Column */}
              <Col md={6}>
                <h6 className="fw-bold">Disposal Tips</h6>
                <ul>
                    <li>Never throw e-waste in regular trash    </li>
                    <li>Find local e-waste collection centers</li>
                    <li>Consider manufacturer take-back programs</li>
                    <li>Donate working electronics</li>
                    <li>Remove personal data before disposal</li>
                    
                    
                </ul>
                <Card className="mt-3 border-0 shadow-sm bg-light">
                  <Card.Body>
                    <strong>Did you know?</strong>  
                    <p className="mb-0">
                      E-waste contains valuable materials like gold, silver, and copper that can be recovered and reused.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Paper Waste */}
        <Accordion.Item eventKey="3">
          <Accordion.Header><span style={{color:"white"}}> 📄 Paper Waste</span></Accordion.Header>
          <Accordion.Body>
            <Row>
              {/* Left Column */}
              <Col md={6}>
                <h6 className="fw-bold">Types of Paper Waste</h6>
                <ul>
                    <li>Newspapers and magazines  </li>
                    <li>Office paper and envelopes</li>
                    <li>Cardboard boxes</li>
                    <li>Paper bags</li>
                    <li>Junk mail</li>
                    <li>Books and notebooks</li>
                    
                </ul>
              </Col>

              {/* Right Column */}
              <Col md={6}>
                <h6 className="fw-bold">Disposal Tips</h6>
                <ul>
                    <li>Remove plastic windows from envelopes</li>
                    <li>Break down cardboard boxes</li>
                    <li>Keep paper dry and clean</li>
                    <li>Shred sensitive documents</li>
                    <li>Remove tape and staples if possible</li>
                    
                </ul>
                <Card className="mt-3 border-0 shadow-sm bg-light">
                  <Card.Body>
                    <strong>Did you know?</strong>  
                    <p className="mb-0">
                     Recycling one ton of paper saves 17 trees, 7,000 gallons of water, and 463 gallons of oil.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Glass Waste */}
        <Accordion.Item eventKey="4">
          <Accordion.Header><span style={{color:"white"}}> 🧪 Glass Waste</span></Accordion.Header>
          <Accordion.Body>
            <Row>
              {/* Left Column */}
              <Col md={6}>
                <h6 className="fw-bold">Types of Glass Waste</h6>
                <ul>
                    <li>Glass bottles (clear, green, brown)</li>
                    <li>Glass jars and containers</li>
                    <li>Glass food packaging</li>
                    <li>Beverage bottles</li>
                </ul>
                <strong>Not recyclable</strong>  
                <p className="mb-0">
                    Window glass, mirrors, light bulbs, ceramics, Pyrex, crystal
                </p>
              </Col>
              
                
              

              {/* Right Column */}
              <Col md={6}>
                <h6 className="fw-bold">Disposal Tips</h6>
                <ul>
                    <li>Rinse containers thoroughly</li> 
                    <li>Remove caps and lids</li>
                    <li>Sort by color if required by your recycling program</li>
                    <li>Dont break glass before recycling</li>
                    <li>Keep food-grade glass separate from other glass items</li>
                    
                </ul>
                <Card className="mt-3 border-0 shadow-sm bg-light">
                  <Card.Body>
                    <strong>Did you know?</strong>  
                    <p className="mb-0">
                      Glass can be recycled endlessly without loss in quality or purity.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default WasteAccordion;
