import "./Analysis.css";
import DomainInfo from "./DomainInfo";
import dotIcon from "../../assets/dot.svg";

export default function Analysis() {
  return (
    <div className="row my-4" id="analysis">
      <div className="col-md-6">
        <DomainInfo dotIcon={dotIcon} />
      </div>
      <div className="col-md-6">
        <DomainInfo dotIcon={dotIcon} />
      </div>
    </div>
  );
}
