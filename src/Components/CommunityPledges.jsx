import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";



const CommunityPledges = ({ data }) => {
    
  return (
    <>
    
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* <span className="fw-bold">Community Pledges</span> */}
        <span className="badge bg-success">{data.length} Pledges Made</span>
      </div>

      {data.map((pledge) => (
        <div
          key={pledge.id}
          className="d-flex flex-column border rounded p-3 mb-3 shadow-sm"
        >
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
            <div className="d-flex flex-wrap align-items-center">
              <PersonIcon className="text-success me-2" />
              <span className="fw-bold mr-5">{pledge.name}</span>
              <span className="fw-bold p-0 p-md-2">{pledge.email}</span>
            </div>
            
            <div className="d-flex align-items-center text-muted small">
              <CalendarTodayIcon fontSize="small" className="me-1" />
              {pledge.date}
            </div>
          </div>
          <p className="mb-0">{pledge.pledge}</p>
        </div>
      ))}
    </>
  );
};



export default CommunityPledges;
