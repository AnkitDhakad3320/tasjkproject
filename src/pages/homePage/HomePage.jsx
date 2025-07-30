import JobList from "../../components/jobList/JobList";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";


export default function HomePage() {
  return (
    <div>
      <div className="container">
        <h2>Available Jobs</h2>
        <JobList />
      </div>
      <Footer/>
    </div>
  );
}
