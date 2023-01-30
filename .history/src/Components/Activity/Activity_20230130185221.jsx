import "./Activity.css";
import ActivityGraph from "./ActivityGraph";
import ActivityHeader from "./ActivityHeader";
import Classes from "./Tooltip.module.css";

export default function Activity() {
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
