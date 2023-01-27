import React from "react";
import "./Status.css";
import StatusCard from "./StatusCard";
import dotIcon from "../../assets/dot.svg";

export default function Status() {
  return (
    <div id="status" className="container">
      <div className="row">
        <div className="col-md-3">
          <StatusCard
            title="C2 Threats Detected"
            icon={dotIcon}
            amount="10"
            link={null}
          />
        </div>
        <div className="col-md-3 mx-2">
          <StatusCard
            title="Total Threats Detected"
            icon={dotIcon}
            amount="1023"
            link={null}
          />
        </div>
        <div className="col-md-3 mx-2">
          <StatusCard
            title="Blocked Requests"
            icon={dotIcon}
            amount="1008"
            link={null}
          />
        </div>
        <div className="col-md-3">
          <StatusCard
            title="Allowed Request"
            icon={dotIcon}
            amount="10,002,302"
            link={null}
          />
        </div>
      </div>
    </div>
  );
}
