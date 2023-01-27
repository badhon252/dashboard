import Chart from "react-apexcharts";
import "../Analysis.css";

const data = [
  { name: "Command & Control Host", value: 10.8, color: "#003f94" },
  { name: "Anonymization service", value: 44.8, color: "#0054c5" },
  { name: "Compromised C2 Host", value: 5.1, color: "#000" },
  { name: "Bad Nameserver IP", value: 21.1, color: "#3287f8" },
  { name: "Cryptocurrency", value: 7.1, color: "#66a5fa" },
  { name: "Botnet host", value: 11.1, color: "#99c3fb" },
  { name: "Bogons", value: 6.1, color: "#99c3fb" },
];

function Graph({ icon }) {
  const name = data.map((e) => e.name);
  const value = data.map((e) => e.value);
  const myColor = data.map((e) => e.color);

  return (
    <div className="graph">
      <Chart
        type="donut"
        width={600}
        series={value}
        options={{
          labels: name,
          color: myColor,

          plotOptions: {
            pie: {
              expandOnClick: true,

              donut: {
                size: "65",
                labels: {
                  show: true,
                  total: {
                    show: false,
                    showAlways: false,
                    // formatter: () => "343",
                  },
                },
              },
            },
          },

          dataLabels: {
            enabled: true,
          },
        }}
      />
    </div>
  );
}
export default Graph;
