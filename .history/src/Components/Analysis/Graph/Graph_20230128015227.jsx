import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

function DonutChart() {
  const [inputValue1, setInputValue1] = useState(42.2);
  const [inputValue2, setInputValue2] = useState(10.2);
  const [inputValue3, setInputValue3] = useState(5.7);
  const [inputValue4, setInputValue4] = useState(10.5);
  const [inputValue5, setInputValue5] = useState(6.7);
  const [inputValue6, setInputValue6] = useState(19.9);
  const [inputValue7, setInputValue7] = useState(4.8);

  const [chartOptions, setChartOptions] = useState({
    series: [
      { name: "Command & Control Host", data: inputValue1 },
      { name: "ANonymization Service", data: inputValue2 },
      { name: "Compromised C2 Host", data: inputValue3 },
      { name: "Bad Nameserver IP", data: inputValue4 },
      { name: "Cryptocurrency", data: inputValue5 },
      { name: "Botnet Host", data: inputValue6 },
      { name: "Bogons", data: inputValue7 },
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
    labels: [
      "Command & Control Host",
      "ANonymization Service",
      "Compromised C2 Host",
      "Bad Nameserver IP",
      "Cryptocurrency",
      "Botnet Host",
      "Bogons",
    ],
  });

  const handleChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
  };
  const handleChange3 = (e) => {
    setInputValue3(e.target.value);
  };
  const handleChange4 = (e) => {
    setInputValue4(e.target.value);
  };
  const handleChange5 = (e) => {
    setInputValue5(e.target.value);
  };
  const handleChange6 = (e) => {
    setInputValue6(e.target.value);
  };
  const handleChange7 = (e) => {
    setInputValue7(e.target.value);
  };

  const handleClick = () => {
    setChartOptions({
      ...chartOptions,
      series: [
        inputValue1,
        inputValue2,
        inputValue3,
        inputValue4,
        inputValue5,
        inputValue6,
        inputValue7,
      ],
    });
  };

  return (
    <div>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="donut"
        width="580"
        height="auto"
      />

      <div className="d-flex justify-content-between">
        <label htmlFor="input1">Command & Control Host: </label>{" "}
        <input
          type="number"
          value={inputValue1}
          id="input1"
          onChange={handleChange1}
        />{" "}
        <br />
        <label htmlFor="input2">ANonymization Service: </label>{" "}
        <input
          type="number"
          value={inputValue2}
          id="input2"
          onChange={handleChange2}
        />{" "}
        <br />
        <label htmlFor="input3">Compromised C2 Host: </label>{" "}
        <input
          type="number"
          value={inputValue3}
          id="input3"
          onChange={handleChange3}
        />{" "}
        <br />
        <label htmlFor="input4">Bad Nameserver IP: </label>{" "}
        <input
          type="number"
          value={inputValue4}
          id="input4"
          onChange={handleChange4}
        />{" "}
        <br />
        <label htmlFor="input5">Cryptocurrency: </label>{" "}
        <input
          type="number"
          value={inputValue5}
          id="input5"
          onChange={handleChange5}
        />{" "}
        <br />
        <label htmlFor="input6">Botnet Host: </label>{" "}
        <input
          type="number"
          value={inputValue6}
          id="input6"
          onChange={handleChange6}
        />{" "}
        <br />
        <label htmlFor="input7">Bogons: </label>{" "}
        <input
          type="number"
          value={inputValue7}
          id="input7"
          onChange={handleChange7}
        />{" "}
      </div>
      <br />
      <button onClick={handleClick}>Update Values</button>
    </div>
  );
}
export default DonutChart;
