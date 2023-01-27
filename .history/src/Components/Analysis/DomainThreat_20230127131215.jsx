import "./Analysis.css";
const DomainThreat = ({ timestamp, threatType, sourseIp, destination }) => {
  return (
    <div className="row threatDomain">
      <div className="col-md-3 my-3">
        <div className="timestamp">{timestamp || "Unknown"}</div>
      </div>
      <div className="col-md-3 my-2">
        <div className="threatType">{threatType || "Unknown"}</div>
      </div>
      <div className="col-md-3 my-3">
        <div className="sourseIp">{sourseIp || "Unknown"}</div>
      </div>
      <div className="col-md-3 my-3">
        <div className="destination">
          {(destination && (
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
            >
              Tooltip with HTML
            </button>
          )) ||
            "Unknown"}
        </div>
      </div>
    </div>
  );
};

export default DomainThreat;
