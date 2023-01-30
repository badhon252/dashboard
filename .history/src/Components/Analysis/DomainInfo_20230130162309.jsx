import DomainThreat from "./DomainThreat";
import "./Analysis.css";

const DomainInfo = ({ icon }) => {
  return (
    <div className="domainInfo">
      <div className="title my-3"></div>
      <div className="analysis-heading d-flex justify-content-between mx-3">
        <div className="title py-3">Top Ten Threat Domains</div>
        <div className="img">
          <img className="img-fluid w-75" src={icon} alt=":" />
        </div>
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
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        sourseIp="192.168.85.144"
        threatType="Hijacked & Criminal Network"
        destination="www.facebook.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        threatType="Cryptocurrency"
        sourseIp="192.168.85.144"
        destination="www.microsoft.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        sourseIp="192.168.85.144"
        destination="www.google.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        sourseIp="192.168.85.144"
        destination="www.microsoft.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        threatType="Malware"
        sourseIp="192.168.85.144"
        destination="www.amazon.com"
      />{" "}
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        sourseIp="192.168.85.144"
        threatType="DDOS"
        destination="www.google.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        sourseIp="192.168.85.144"
        destination="www.microsoft.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        threatType="Phising"
        sourseIp="192.168.85.144"
        destination="www.amazon.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        sourseIp="192.168.85.144"
        destination="www.microsoft.com"
      />
      <DomainThreat
        timestamp="1 Jan 2023 18:39"
        threatType="Malware"
        sourseIp="192.168.85.144"
        destination="www.amazon.com"
      />
    </div>
  );
};

export default DomainInfo;
