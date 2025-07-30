import { Link } from "react-router-dom";
import "./JobCard.css";


export default function JobCard({ job }) {
  const {
    _id,
    title = "Untitled",
    company = "Unknown",
    location = "N/A",
    type
  } = job;
  
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{title}</h3>
        {type && <span className="job-type">{type}</span>}
      </div>
      <div className="job-details">
        <p className="company">{company}</p>
        <p className="location">{location}</p>
      </div>
      <Link to={`/job/${_id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
}
