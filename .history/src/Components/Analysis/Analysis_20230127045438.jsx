import "./Analysis.css";
import DomainInfo from "./DomainInfo";
import dotIcon from "../../assets/dot.svg";
import Graph from "./Graph/Graph";

export default function Analysis() {
  return (
    <div className="row my-5" id="analysis">
      <div className="col-md-6">
        <DomainInfo dotIcon={dotIcon} />
      </div>
      <div className="col-md-6">
        <div className="analysis-heading d-flex justify-content-between mx-3">
          <div className="title py-3">Top Ten Threat Domains</div>
          <div className="img">
            <img className="img-fluid w-50" src={dotIcon} alt=":" />
          </div>
        </div>
        <Graph dotIcon={dotIcon} />
      </div>
    </div>
  );
}
