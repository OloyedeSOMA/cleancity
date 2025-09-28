import NavBar from "../Components/NavBar"
import HeroComponent from "../Components/HeroComponent"
import { Container, Row, Col} from "react-bootstrap";


import CustomContainer from "../Components/CustomContainer";
import { FormHook } from "../utils/hook/FormHook";
import PledgeForm from "../Components/pledgeForm";
import CommunityPledges from "../Components/CommunityPledges";
import PledgeInfo from "../Components/PledgeInfo";
import ImpactSection from "../Components/ImpactSection"
import image4 from "../assets/image4.jpg"
// import ChartCard from "../Components/ChartCard";

const pledgeDataLog = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emmajohnson@gmail.com",
    date: "6/15/2023",
    pledge: "I pledge to reduce my plastic consumption by bringing reusable bags to the grocery store and avoiding single-use plastics."
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michelshen23@gmail.com",
    date: "6/14/2023",
    pledge: "I pledge to start composting all of my food waste and to educate my neighbors about the benefits of composting."
  }
];

const PledgePage = () => {
  const form = FormHook("pledges", pledgeDataLog)
  return (
    <>
        <NavBar/>
        <div style={{backgroundColor:"#147B3B", width:"100%"}}>
            <HeroComponent header="Make a Pledge" bgImage={image4} text="Join our community of environmentally conscious individuals and make a public commitment to reduce waste."/>
        </div>
        <Container fluid className="mt-4">
        {/* Main Row → splits screen into sidebar + main content */}
        <Row className="g-4">
            
            {/* Sidebar (left column) */}
            <Col xs={12} md={5} lg={5}>
            {/* Log Recycled Item */}
            <CustomContainer formTitle="Make Your Pledge">
            <PledgeForm {...form}/>
          </CustomContainer>


            {/* Your Impact */}
            <CustomContainer formTitle="Why Make A Pledge">
              <PledgeInfo />
            </CustomContainer>
            </Col>

            {/* Main Content (right column) */}
            <Col xs={12} md={7} lg={7}>
            {/* Recycling Logs */}
            <CustomContainer formTitle="Community Pledges">
              <CommunityPledges {...form}/>
            </CustomContainer>

            
            </Col>

        </Row>
        </Container>

        <ImpactSection/>
    </>
  )
}

export default PledgePage