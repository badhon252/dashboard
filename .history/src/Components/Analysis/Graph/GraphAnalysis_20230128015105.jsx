import "../Analysis.css";
import Graph from "./Graph";
import { useState } from "react";
// import ApexCharts from "react-apexcharts";

const data = [
  { name: "Command & Control Host", value: 10.8, color: "#003f94" },
  { name: "Anonymization service", value: 44.8, color: "#0054c5" },
  { name: "Compromised C2 Host", value: 5.1, color: "#000" },
  { name: "Bad Nameserver IP", value: 21.1, color: "#3287f8" },
  { name: "Cryptocurrency", value: 7.1, color: "#66a5fa" },
  { name: "Botnet host", value: 11.1, color: "#99c3fb" },
  { name: "Bogons", value: 6.1, color: "#99c3fb" },
];

const AnalysisGraph = ({ icon }) => {
  let values = data.map((e) => e.value);
  const [inputValues, setInputValues] = useState([...values]);
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "Values",
        data: inputValues,
      },
    ],
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const handleChange = (e, index) => {
    const newValues = [...inputValues];
    newValues[index] = e.target.value;
    setInputValues(newValues);
  };

  const handleClick = () => {
    setChartOptions({
      ...chartOptions,
      series: [
        {
          name: "Values",
          data: inputValues,
        },
      ],
    });
  };
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
        <Graph data={data} />

        {/* input-container */}
        <div className="input-container">
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
        </div>
      </div>
    </div>
  );
};

export default AnalysisGraph;
