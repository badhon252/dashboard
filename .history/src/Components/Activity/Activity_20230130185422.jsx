import "./Activity.css";
import ActivityGraph from "./ActivityGraph";
import ActivityHeader from "./ActivityHeader";

export default function Activity() {
  return (
    <div className="activity">
      <ActivityHeader />
      <div className="activity_graph">
        {/* barhcart Code goes here  */}
        <ActivityGraph />
        <div className="link py-4 px-3">See All {">"} </div>
      </div>
    </div>
  );
}
