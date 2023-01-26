import "./Analysis.css";
import DomainInfo from "./DomainInfo";
import dotIcon from "../../assets/images/con.svg";

export default function Analysis() {
  return (
    <div className="row" id="analysis">
      <div className="col-md-6">
        <DomainInfo dotIcon={dotIcon} />
      </div>
      <div className="col-md-6">myCard</div>
    </div>
  );
}
