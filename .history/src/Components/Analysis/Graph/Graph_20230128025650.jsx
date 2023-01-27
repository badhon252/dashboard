import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

function Graph() {
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
            position: "right",
          },
        },
      },
    ],
    labels: [
      `Command & Control Host:  ${inputValue1} %`,
      `ANonymization Service:   ${inputValue2} %`,
      `Compromised C2 Host:     ${inputValue3} %`,
      `Bad Nameserver IP:       ${inputValue4} %`,
      `Cryptocurrency:           ${inputValue5} %`,
      `Botnet Host:              ${inputValue6} %`,
      `Bogons:                  ${inputValue7} %`,
    ],
  });

  const handleChange1 = (e) => {
    setInputValue1(parseInt(e.target.value || 0));
  };

  const handleChange2 = (e) => {
    setInputValue2(parseInt(e.target.value || 0));
  };
  const handleChange3 = (e) => {
    setInputValue3(parseInt(e.target.value || 0));
  };
  const handleChange4 = (e) => {
    setInputValue4(parseInt(e.target.value || 0));
  };
  const handleChange5 = (e) => {
    setInputValue5(parseInt(e.target.value || 0));
  };
  const handleChange6 = (e) => {
    setInputValue6(parseInt(e.target.value || 0));
  };
  const handleChange7 = (e) => {
    setInputValue7(parseInt(e.target.value || 0));
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
      <div className="chart-container">
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          width="500"
        />
      </div>
      <div className="input-container my-5">
        <input
          value={inputValue1}
          onChange={handleChange1}
          placeholder="Command & Control Host"
        />
        <input
          value={inputValue2}
          onChange={handleChange2}
          placeholder="ANonymization Service"
        />
        <input
          value={inputValue3}
          onChange={handleChange3}
          placeholder="Compromised C2 Host"
        />
        <input
          value={inputValue4}
          onChange={handleChange4}
          placeholder="Bad Nameserver IP"
        />
        <input
          value={inputValue5}
          onChange={handleChange5}
          placeholder="Cryptocurrency"
        />
        <input
          value={inputValue6}
          onChange={handleChange6}
          placeholder="Botnet Host"
        />
        <input
          value={inputValue7}
          onChange={handleChange7}
          placeholder="Bogons"
        />
        <button onClick={handleClick}>Update Chart</button>
      </div>
    </div>
  );
}
export default Graph;
