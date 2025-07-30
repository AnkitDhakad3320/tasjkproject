import { useState } from "react";
import './JobForm.css';

export default function JobForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    type: "Full-time",
    location: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errs = {};
    if (!formData.title) errs.title = "Required";
    if (!formData.company) errs.company = "Required";
    if (!formData.location) errs.location = "Required";
    if (!formData.description || formData.description.length < 10)
      errs.description = "Min 10 chars";
    return errs;
  };
  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    await onSuccess(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="job-form">
      <div className="form-group">
        {["title", "company", "location"].map((field) => (
          <label key={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}*
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={errors[field] ? "error" : ""}
            />
            {errors[field] && (
              <div className="error-message">{errors[field]}</div>
            )}
          </label>
        ))}
        <label>
          <div>Type</div>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option>Full-time</option>
            <option>Part-time</option>
          </select>
        </label>
        <label>
          Description*
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? "error" : ""}
          />
          {errors.description && (
            <div className="error-message">{errors.description}</div>
          )}
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
