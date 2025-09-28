import NavBar from "../Components/NavBar"
import HeroComponent from "../Components/HeroComponent"
import WasteAccordion from "../Components/WasteAccordion"
import Resources from "../Components/Resources"
import ImpactSection from "../Components/ImpactSection"
import image5 from "../assets/image5.jpg"


const WastePage = () => {
  return (
    <>
        <NavBar/>
        <div style={{backgroundColor:"#147B3B", width:"100%"}}>
            <HeroComponent header="Waste Categories" bgImage={image5} text="Learn about different types of waste and how to properly dispose of them to minimize environmental impact."/>
        </div>

        <WasteAccordion />

        
        <Resources/>

      <ImpactSection/>
        
        
        
    </>
  )
}

export default WastePage