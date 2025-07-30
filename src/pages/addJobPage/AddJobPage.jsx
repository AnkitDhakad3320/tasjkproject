import { addJob } from "../../utils/api";
import JobForm from "../../components/jobform/JobForm";
import { useNavigate } from "react-router-dom";
import "./AddJobPage.css";



export default function AddJobPage() {

  const navigate = useNavigate();
  const onSuccess = async (data) => {
    await addJob(data);
    navigate("/");
  };
  
  return (
    <div>
      <div className="container">
        <h2>Post New Job</h2>
        <JobForm onSuccess={onSuccess} />
      </div>
    </div>
  );
}
