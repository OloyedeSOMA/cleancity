import { Card} from "react-bootstrap"
import "../App.css"

const CustomContainer = (props) => {
  return (
    <>
        <Card className="mb-4 shadow-sm animate-card">
            <Card.Header
                className="fw-bold bg-success text-white" >{props.formTitle}</Card.Header>
            <Card.Body>
                
                {props.children}
            </Card.Body>
            </Card>
    </>
  )
}

export default CustomContainer