const StatusGraph = () => {
  return (
    <div>
      <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
        <circle
          className="donut-hole"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="#fff"
        ></circle>
        <circle
          className="donut-ring"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d2d3d4"
          stroke-width="3"
        ></circle>
        <circle
          className="donut-segment-1"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#5cb85c"
          stroke-width="3"
          stroke-dasharray="25 75"
          stroke-dashoffset="25"
        ></circle>
        <circle
          className="donut-segment-2"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#f0ad4e"
          stroke-width="3"
          stroke-dasharray="60 40"
          stroke-dashoffset="25"
        ></circle>
        <circle
          className="donut-segment-3"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d9534f"
          stroke-width="3"
          stroke-dasharray="10 90"
          stroke-dashoffset="25"
        ></circle>
      </svg>
    </div>
  );
};

export default StatusGraph;
