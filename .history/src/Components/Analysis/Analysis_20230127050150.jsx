import "./Analysis.css";
import DomainInfo from "./DomainInfo";
import dotIcon from "../../assets/dot.svg";
import Graph from "./Graph/Graph";

export default function Analysis() {
  return (
    <div className="row my-5" id="analysis">
      <div className="col-md-6">
        <DomainInfo icon={dotIcon} />
      </div>
      <div className="col-md-6">
        <Graph icon={dotIcon} />
      </div>
    </div>
  );
}
