import NavBar from "../Components/NavBar"
import HeroComponent from "../Components/HeroComponent"
import { Container, Row, Col} from "react-bootstrap";
import { FormHook } from "../utils/hook/FormHook";
import LogForm from "../Components/LogForm";
import CardInfo from "../Components/CardInfo";
import ChartCard from "../Components/ChartCard";
import CustomContainer from "../Components/CustomContainer";
import DataTable from "../Components/DataTable";
import ImpactSection from "../Components/ImpactSection";
import image6 from "../assets/image6.jpg"
import AchievementsBadges from "../Components/AchivementsBadges";

function WasteLoggingPage() {
  const form = FormHook("recycleLog");
  return (
    <>

      <NavBar/>
      <div style={{backgroundColor:"#147B3B", width:"100%"}}>
          <HeroComponent header="Recycling Tracker" bgImage={image6} text="Log and visualize your recycling efforts, set goals, and earn achievement badges."/>
      </div>
      <Container fluid className="mt-4">
        {/* Main Row → splits screen into sidebar + main content */}
        <Row className="g-4">
          
          {/* Sidebar (left column) */}
          <Col xs={12} md={4} lg={3}>
            {/* Log Recycled Item */}
          <CustomContainer formTitle="Log Recycled Items">
            <LogForm {...form}/>
          </CustomContainer>

            

            {/* Your Impact */}
            <CustomContainer formTitle="Your Impact">
              <CardInfo {...form}/>
            </CustomContainer>
            
          </Col>

          {/* Main Content (right column) */}
          <Col xs={12} md={8} lg={9}>
            {/* Recycling Logs */}
            <CustomContainer formTitle="Your Recycling Logs">
              <DataTable {...form}/>
            </CustomContainer>
            

            {/* Recycling by Category */}
            <CustomContainer formTitle="Recycling By Category">
              <ChartCard data= {form.data}/>
            </CustomContainer>
            
          </Col>

        </Row>
      </Container>

      <CustomContainer formTitle="Your Achievements">
        <AchievementsBadges logs={form.data}/>
      </CustomContainer>

      

      <ImpactSection/>
    </>
  );
}

export default WasteLoggingPage;
