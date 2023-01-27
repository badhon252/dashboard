import "../Analysis.css";
import Graph from "./Graph";
import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

const data = [
  { name: "Command & Control Host", value: 10.8 },
  { name: "Anonymization service", value: 44.8 },
  { name: "Compromised C2 Host", value: 5.1 },
  { name: "Bad Nameserver IP", value: 21.1 },
  { name: "Cryptocurrency", value: 7.1 },
  { name: "Botnet host", value: 11.1 },
  { name: "Bogons", value: 6.1 },
];

const AnalysisGraph = ({ icon }) => {
  let value = data.map((e) => e.value);
  const [inputValues, setInputValues] = useState([...value]);
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
        <Graph data={data} />

        <div>
          {inputValues.map((value, index) => (
            <div key={index}>
              <label>Value {index + 1}:</label>
              <input
                type="number"
                value={value}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <button onClick={handleClick}>Update Values</button>
          <ApexCharts
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            width="380"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisGraph;
