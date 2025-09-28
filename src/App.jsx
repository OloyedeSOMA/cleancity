import Categories from "./Components/CategoriesSection"
import FactGenerator from "./Components/FactGenerator"
import HeroSection from "./Components/HeroSection"
 import ImpactSection from "./Components/ImpactSection"
import NavBar from "./Components/NavBar"


function App() {
  
  return(
    <>
      <NavBar/>

      <div style={{backgroundColor:"#147B3B", width:"100%"}}>
        <HeroSection/>
      </div>
    
    <div style={{backgroundColor:"#F9FAFB", marginBottom:"10px", padding:"5px"}}>
      <h1 style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", paddingTop:"10px", marginBottom:"12px"}} >How CleanCity+ Helps You Make a Difference</h1>
      <Categories/>
    </div>

    <div style={{backgroundColor:"white", marginTop:"15px"}}>
      <h1 style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", paddingTop:"10px", marginBottom:"12px"}} >Recycling Facts</h1>
      <FactGenerator/>
    </div>

      <ImpactSection/>
    </>
  )
}

export default App
