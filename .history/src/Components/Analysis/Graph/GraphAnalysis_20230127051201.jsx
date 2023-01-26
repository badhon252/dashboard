import Graph from "./Graph";

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
  return (
    <div className="analysisGraph">
      <div className="analysis-heading d-flex justify-content-between m-3">
        <div className="title">Detect Threat Categories</div>
        <img src={icon} alt=":" />
      </div>
      <div className="threatGraph">
        <Graph data={data} />
      </div>
    </div>
  );
};

export default AnalysisGraph;
