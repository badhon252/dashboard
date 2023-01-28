import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

function Graph() {
  const [inputValue1, setInputValue1] = useState(44);
  const [inputValue2, setInputValue2] = useState(10);
  const [inputValue3, setInputValue3] = useState(6);
  const [inputValue4, setInputValue4] = useState(11);
  const [inputValue5, setInputValue5] = useState(7);
  const [inputValue6, setInputValue6] = useState(20);
  const [inputValue7, setInputValue7] = useState(5);

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
    colors: [
      "#006eff",
      "#00347b",
      "#99c3fb",
      "#3287f8",
      "#0054c5",
      "#003f94",
      "#cce1fd",
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
      `Command & Control Host: `,
      `Anonymization Service: `,
      `Compromised C2 Host:`,
      `Bad Nameserver IP: `,
      `Cryptocurrency: `,
      `Botnet Host: `,
      `Bogons: `,
    ],

    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            // total: {
            //   show: true,
            //   fontSize: "22px",
            //   label: "Total",
            //   formatter: function (w) {
            //     return (
            //       w.globals.seriesTotals.reduce(function (a, b) {
            //         return a + b;
            //       }, 0) + " %"
            //     );
            //   },
            // },
            name: {
              show: false,
            },
          },
        },
      },
    },
  });

  // writing functions to listen change and hooked up new values
  const handleChange1 = (e) => {
    setInputValue1(parseFloat(e.target.value || 0));
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
      <div className="input-container mx-5 my-3">
        <h5 className="text-info mx-auto">
          Update values or simply Click on 'Generate Chart' to see the changes!
        </h5>
        <input
          value={inputValue1}
          onChange={handleChange1}
          placeholder="Command & Control Host"
        />
        <input
          value={inputValue2}
          onChange={handleChange2}
          placeholder="Anonymization Service"
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
        <button className="btn btn-sm btn-success" onClick={handleClick}>
          Generate Chart
        </button>
      </div>
      <div className="chart-container">
        {/* ApexCharts is to render graph  */}
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          width="100%"
        />
      </div>
    </div>
  );
}
export default Graph;
