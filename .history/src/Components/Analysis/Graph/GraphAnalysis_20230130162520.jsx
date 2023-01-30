import "../Analysis.css";
import Graph from "./Graph";
import { useState } from "react";
// import ApexCharts from "react-apexcharts";

const AnalysisGraph = ({ icon }) => {
  return (
    <div className="analysisGraph py-3">
      <div className="analysis-heading d-flex justify-content-between p-3">
        <div className="title ">Detect Threat Categories</div>
        <div className="img">
          <img className="img-fluid w-75" src={icon} alt=":" />
        </div>
      </div>
      <div className="threatGraph">
        {/* importing Graph  */}
        <Graph />

        {/* Garbage codes ============= */}
        {/* input-container ========== */}
        {/* <div className="input-container">
          {inputValues.map((value, index) => (
            <div key={index}>
              <label className="mx-2">Value {index + 1}:</label>
              <input
                type="number"
                value={value}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <button className="btn btn-outline-dark my-2" onClick={handleClick}>
            Update Values
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AnalysisGraph;
