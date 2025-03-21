import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useState } from "react";
import "./App.css";

const Section12 = () => {
  const [total_estimated_budget, setTotalEstimatedBudeget] = useState("");
  const [funding_source, setFundingSource] = useState("");
  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/funding_budget_and_details",
        {
          total_estimated_budget,
          funding_source,
        }
      );
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);
      navigate("/");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="form-container">
      <h1 className="h2">2. FUNDING DETAILS AND BUDGET</h1>
      <form onSubmit={Submit}>
        <label className="h">a. Total Estimated Study Budget:</label>
        <input
          type="number"
          name="budget"
          value={total_estimated_budget}
          onChange={(e) => setTotalEstimatedBudeget(e.target.value)}
          placeholder="Enter Budget Amount"
          className="custom-input"
          required
        />

        <br />

        <label className="h">b. Funding Source:</label>
        <select
          name="fundingSource"
          value={funding_source}
          onChange={(e) => setFundingSource(e.target.value)}
          className="custom-input"
          required
        >
          <option value="">Select Funding Type</option>
          <option value="self-funding">Self-funding</option>
          <option value="institutional">Institutional funding</option>
          <option value="agency">Funding agency</option>
        </select>

        <br />

        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Section12;
