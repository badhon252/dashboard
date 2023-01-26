const StatusGraph = () => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 42 42"
        className="areaCharts"
      >
        <path
          d="M 21 0 A 21 21 0 0 1 21 42 A 21 21 0 0 1 21 0"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="2"
        ></path>
        <path
          d="M 21 0 A 21 21 0 0 1 21 42 A 21 21 0 0 1 21 0"
          fill="none"
          stroke="#f5a623"
          strokeWidth="2"
          strokeDasharray="0 100"
          strokeDashoffset="0"
          className="areaCharts__path"
        ></path>
      </svg>
    </div>
  );
};

export default StatusGraph;
