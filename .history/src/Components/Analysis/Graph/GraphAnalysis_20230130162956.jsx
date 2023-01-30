import "../Analysis.css";
import Graph from "./Graph";

const AnalysisGraph = ({ icon }) => {
  return (
    <div className="analysisGraph py-3">
      <div className="analysis-heading d-flex justify-content-between p-3">
        <div className="title ">Detect Threat Categories</div>
        <div className="img">
          <img className="img-fluid w-75" src={icon} alt=":" />
        </div>
      </div>
      <div className="threatGraph px-3">
        {/* importing Graph  */}
        <Graph />
      </div>
    </div>
  );
};

export default AnalysisGraph;
