import DomainThreat from "./DomainThreat";
import "./Analysis.css";

const DomainInfo = ({ dotIcon }) => {
  return (
    <div className="domainInfo">
      <div className="title my-3"></div>
      <div className="analysis-heading d-flex justify-content-between m-3">
        <div className="title my-3">Top Ten Threat Domains</div>
        <img src={dotIcon} alt=":" />
      </div>
      {/*Threat Domains Header*/}
      <div className="row domainHeader pb-2">
        <div className="col-md-3">
          <div className="timestamp">Timestamp</div>
        </div>
        <div className="col-md-3">
          <div className="">Threat Type</div>
        </div>
        <div className="col-md-3">
          <div className="sourseIp">Source IP</div>
        </div>
        <div className="col-md-3">
          <div className="">Destination</div>
        </div>
      </div>
      {/*Threat Domains*/}
      <ThreatDomain
        timestamp="1 Jan 2023"
        sourseIp="192.168.85.144"
        threatType="Hijacked & Criminal Network"
        destination="www.facebook.com"
      />
      <ThreatDomain
        timestamp="1 Jan 2023"
        threatType="Cryptocurrency"
        sourseIp="192.168.85.144"
        destination="www.microsoft.com"
      />
      <ThreatDomain
        timestamp="1 Jan 2023"
        sourseIp="192.168.85.144"
        destination="www.google.com"
      />
      <ThreatDomain
        timestamp="1 Jan 2023"
        sourseIp="192.168.85.144"
        destination="www.microsoft.com"
      />
      <ThreatDomain
        timestamp="1 Jan 2023"
        threatType="Malware"
        sourseIp="192.168.85.144"
        destination="www.amazon.com"
      />
    </div>
  );
};

export default DomainInfo;
