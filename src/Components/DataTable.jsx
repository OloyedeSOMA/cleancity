import { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./DataTable.css"; // custom styles



const DataTable = ({ data, editMode, deleteItem }) => {
    const [search, setSearch] = useState("");

    const recyleData = search? data.filter((item)=> item.category.toLowerCase().includes(search.toLowerCase())): data;

  return (
    <div className="data-table-container">
      {/* Search Input */}
      <Form.Control
        type="text"
        placeholder="Search by category or description..."
        className="mb-3 search-input"
        onChange={(e)=>{setSearch(e.target.value)}}
      />

      {/* Table */}
      <Table responsive hover className="custom-table align-middle">
        <thead>
          <tr>
            <th>DATE</th>
            <th>CATEGORY</th>
            <th>QUANTITY</th>
            <th>DESCRIPTION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {recyleData.map((log) => (
            <tr key={log.id}>
              <td>{log.date}</td>
              <td>
                <span className={`badge rounded-pill category-badge ${log.category.toLowerCase()}`}>
                  {log.category}
                </span>
              </td>
              <td>{log.quantity}</td>
              <td>{log.description}</td>
              <td>
                <EditIcon className="action-icon edit" onClick={() => editMode(log.id)} />
                <DeleteIcon
                  className="action-icon delete"
                  onClick={() => deleteItem(log.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;




