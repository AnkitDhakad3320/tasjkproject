import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AddJobPage from "./pages/addJobPage/AddJobPage";
import JobDetailsPage from "./pages/jobDetailsPage/JobDetailsPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/job/:id" element={<JobDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
