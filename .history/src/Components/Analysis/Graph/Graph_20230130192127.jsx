import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import DonutInput from "./DonutInput";

function Graph() {
  const [inputValue1, setInputValue1] = useState(10);
  const [inputValue2, setInputValue2] = useState(44);
  const [inputValue3, setInputValue3] = useState(5);
  const [inputValue4, setInputValue4] = useState(21);
  const [inputValue5, setInputValue5] = useState(7);
  const [inputValue6, setInputValue6] = useState(11);
  const [inputValue7, setInputValue7] = useState(6);

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
      "#810CA8",
      "#FA2FB5",
      "#FF0032",
      "#38E54D",
      "#FFC93C",
      "#0014FF",
      "#30E3DF",
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
              fontSize: "2",
            },
            value: {
              show: true,
              fontSize: "16px",
              color: "#000",
              formatter: function (val) {
                return val;
              },
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
        <DonutInput
          inputValue={inputValue1}
          handleChange={handleChange1}
          text="Command & Control Host "
        />
        <DonutInput
          inputValue={inputValue2}
          handleChange={handleChange2}
          text={"Anonymization Service"}
        />
        <DonutInput
          inputValue={inputValue3}
          handleChange={handleChange3}
          text={"Compromised C2 Host"}
        />
        <DonutInput
          inputValue={inputValue4}
          handleChange={handleChange4}
          text={"Bad Nameserver IP"}
        />
        <DonutInput
          inputValue={inputValue5}
          handleChange={handleChange5}
          text={"Cryptocurrency"}
        />
        <DonutInput
          inputValue={inputValue6}
          handleChange={handleChange6}
          text={"Botnet Host"}
        />
        <DonutInput
          inputValue={inputValue7}
          handleChange={handleChange7}
          text={"Bogons"}
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
          width="90%"
        />
      </div>
    </div>
  );
}
export default Graph;
