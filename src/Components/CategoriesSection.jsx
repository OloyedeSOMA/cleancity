import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import RecyclingIcon from '@mui/icons-material/Recycling';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import "../App.css"


const features = [
  {
    id:1,
    icon: <RecyclingIcon/>,
    title: "Learn Waste Categories",
    description: "Understand different waste types and learn the proper disposal methods for each category.",
    linkText: "Explore Categories",
    path:"/wastes"
  },
  {
    id:2,
    icon: <BarChartIcon/>,
    title: "Track Your Progress",
    description: "Log and visualize your recycling efforts, set goals, and earn achievement badges.",
    linkText: "Start Tracking",
    path:"/recycling-tracker"
  },
  {
    id:3,
    icon: <PeopleIcon/>,
    title: "Join the Movement",
    description: "Make a pledge to reduce waste and join a community of environmentally conscious individuals.",
    linkText: "Make a Pledge",
    path:"/pledge"
  },
];


function Categories() {
  return (
    
    <div className='d-flex flex-wrap justify-content-around align-items-center mt-5 animate-card'>
        {features.map((item)=>{
          return(
            <>
              <Card key={item.id} style={{ width: '300px', backgroundColor: "#fff"}} className="mb-2 border-0 shadow-lg"text={"dark"}>
                <Card.Header className='bg-white border-0' style={{color:"#16A34A"}}>{item.icon}</Card.Header>
                <Card.Body  className='bg-white border-0'> 
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Link as={Link} to={item.path}  className='text-success text-decoration-none fw-semibold' style={{cursor:"pointer"}}>{item.linkText}</Card.Link>
                </Card.Body>
              </Card>
            </>
            
          );
        })}

        
    </div>
    
  );
}

export default Categories;