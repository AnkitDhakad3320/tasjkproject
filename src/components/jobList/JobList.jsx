import { useEffect, useState } from "react";
import { getJobs } from "../../utils/api";
import JobCard from "../jobCard/JobCard";
import { Link } from "react-router-dom";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]); 

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  
  useEffect(() => {
    getJobs()
      .then((res) => setJobs(res.data)) // Ensure correct API structure
      .catch(() => setError("Unable to load jobs"))
      .finally(() => setLoading(false));
  }, []);

  // Filter jobs based on search input
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
     const matchesLocation = job.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(job.type) || selectedFilters.includes(job.location);

    return (matchesSearch && matchesFilter) || ( matchesLocation || matchesSearch )
  });

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="main-content">
        <div className="top-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by title or location..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <Link to="/add-job" className="add-job-btn">
            Add New Job
          </Link>
        </div>
      </div>

      <div className="job-grid">
        {filteredJobs.length ? (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p style={{ padding: "1rem", textAlign: "center", color: "#6b7280" }}>
            No jobs found.
          </p>
        )}
      </div>
    </div>
  );
}
