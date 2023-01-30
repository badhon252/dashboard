import "./Activity.css";
import ActivityGraph from "./ActivityGraph";
import ActivityHeader from "./ActivityHeader";

export default function Activity() {
  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="date-label">{label + " Jan 2023"}</p>

          <div className="d-flex">
            <div className="tooltip-allowed ">
              <p className="label">
                <span>00</span> Allowed
              </p>
              <p className="label my-0">
                <span>00</span>
                {`${payload[0].value}`}
              </p>
            </div>

            <div className="tooltip-blocked">
              <p className="label">
                <span>00</span> Blocked
              </p>
              <p className="label">
                <span>00</span>
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
