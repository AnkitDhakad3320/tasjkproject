import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/jobs`;

export const getJobs = () => axios.get(BASE_URL);
export const getJobById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addJob = (jobData) => axios.post(BASE_URL, jobData);
