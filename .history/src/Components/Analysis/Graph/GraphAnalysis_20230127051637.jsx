import Graph from "./Graph";
import "../Analysis.css";

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
    <div className="analysisGraph my-3">
      <div className="analysis-heading d-flex justify-content-between">
        <div className="title py-3">Detect Threat Categories</div>
        <img src={icon} alt=":" />
      </div>
      <div className="threatGraph">
        <Graph data={data} />
      </div>
    </div>
  );
};

export default AnalysisGraph;
