import "./Activity.css";
import ActivityGraph from "./ActivityGraph";
import ActivityHeader from "./ActivityHeader";
import Classes from "./Tooltip.module.css";

export default function Activity() {
  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={Classes.customTooltip}>
          <p className="date-label"> {label + " Jan 2023"}</p>

          <div className="d-flex">
            <div className={Classes.tooltipAllowed}>
              <p className="label">
                <span className="indicator allowed-ind"></span> Allowed
              </p>
              <p className="label allowedValue">
                <span className="indicator allowed-ind"></span>
                {`${payload[0].value}`}
              </p>
            </div>

            <div className="tooltip-blocked">
              <p className="label my-0">
                <span className="indicator blocked-ind"></span> Blocked
              </p>
              <p className="label blocked-value">
                <span className="indicator blocked-ind"></span>
                {`${payload[1].value}`}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="activity">
      <ActivityHeader />
      <div className="activity_graph">
        {/* barhcart Code goes here  */}
        <ActivityGraph CustomTooltip={customTooltip} />
        <div className="link py-4 px-3">See All {">"} </div>
      </div>
    </div>
  );
}
