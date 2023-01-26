import "./Analysis.css";
import DomainInfo from "./DomainInfo";
import dotIcon from "../../assets/dot.svg";
import GraphAnalysis from "./Graph/GraphAnalysis";

export default function Analysis() {
  return (
    <div className="row my-5" id="analysis">
      <div className="col-md-6">
        <DomainInfo icon={dotIcon} />
      </div>
      <div className="col-md-6">
        <GraphAnalysis icon={dotIcon} />
      </div>
    </div>
  );
}
