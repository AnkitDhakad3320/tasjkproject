import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../utils/api";
import Footer from "../../components/footer/Footer";
import "./JobDetailsPage.css";



export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobById(id)
      .then(setJob)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Not found</p>;

  return (
    <div>
      <div className="container">
        <h2>{job.data.title}</h2>
        <p>
          <strong>Company:</strong> {job.data.company}
        </p>
        <p>
          <strong>Type:</strong> {job.data.type}
        </p>
        <p>
          <strong>Location:</strong> {job.data.location}
        </p>
        <section>
          <h3>Description</h3>
          <p>{job.data.description}</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
