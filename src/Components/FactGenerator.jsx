// import Card from 'react-bootstrap/Card';

// const FactGenerator = () => {
//   return (
//     <>
//         <Card style={{ width: '70%', backgroundColor: "#fff"}} className="mb-2 border-0 shadow-xl"text={"dark"}>
//             <Card.Header className='bg-white border-0' style={{color:"#16A34A"}}>DO YOU KNOW</Card.Header>
//             <Card.Body  className='bg-white border-0'> 
//                 <Card.Title>NAME</Card.Title>
//                 <Card.Text>DESCRIPTION</Card.Text>
//                 <Card.Link  to="" className='text-success text-decoration-none fw-semibold' style={{cursor:"pointer"}}>shuffle</Card.Link>
//             </Card.Body>
//         </Card>
//     </>
//   )
// }

// export default FactGenerator

import  { useState, useEffect } from "react";
import SyncIcon from '@mui/icons-material/Sync';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import "../App.css"

const facts = [
  "Recycling one aluminum can saves enough energy to run a TV for three hours.",
  "Glass can be recycled endlessly without loss in quality or purity.",
  "Recycling one ton of paper saves 17 trees and 7,000 gallons of water.",
  "Plastic bottles take up to 450 years to decompose in a landfill.",
  "Recycling steel saves 75% of the energy needed to make new steel."
];

function FactGenerator() {
  const [fact, setFact] = useState("");

  // Save facts in localStorage once
  useEffect(() => {
    localStorage.setItem("recyclingFacts", JSON.stringify(facts));
    setFact(facts[0]); // show first fact by default
  }, []);

  const getRandomFact = () => {
    const savedFacts = JSON.parse(localStorage.getItem("recyclingFacts"));
    const randomIndex = Math.floor(Math.random() * savedFacts.length);
    setFact(savedFacts[randomIndex]);
  };

  return (
    <div className="animate-card" style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
      
      <h4 style={{ color: "green" }}>Did You Know? <LightbulbIcon style={{ color: "#FFD679", fontSize:"35px" }}/></h4>
      <p>{fact}</p>
      <button onClick={getRandomFact} style={{ background: "green", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "5px" }}>
        <SyncIcon/> New Fact
      </button>
    </div>
  );
}

export default FactGenerator;
