import { Form, Button } from "react-bootstrap";


const LogForm = ({ handleData, handleSubmit, formData, editingId }) => {
  // const {handleData,formData, handleSubmit} = FormHook("recycleLog");
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Waste Category</Form.Label>
        <Form.Select onChange={handleData} name="category" value={formData.category || ''}>
          <option>Select a category</option>
          <option>Plastic</option>
          <option>Paper</option>
          <option>Organic</option>
          <option>E-waste</option>
          <option>Glass</option>
          <option>Metals</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control name="quantity"  type="number" value={formData.quantity || ''} placeholder="Enter quantity" onChange={handleData}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description (Optional)</Form.Label>
        <Form.Control name="description" type="text" placeholder="E.g., Water bottles" value={formData.description || ''} onChange={handleData}/>
      </Form.Group>
      <Button type="submit" variant="success" className="w-100">{editingId? "update" : "+ Add Item"}</Button>
    </Form>
     
  )
}

export default LogForm