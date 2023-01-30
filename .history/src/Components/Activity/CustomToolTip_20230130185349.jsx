import Classes from "./Tooltip.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={Classes.customTooltip}>
        <p className={Classes.date_label}> {label + " Jan 2023"}</p>

        <div className="d-flex">
          <div className={Classes.tooltipAllowed}>
            <p className={Classes.label}>
              <span
                className={`${Classes.indicator} ${Classes.allowed_ind}`}
              ></span>{" "}
              Allowed
            </p>
            <p className={`${Classes.label} ${Classes.allowedValue}`}>
              <span
                className={`${Classes.indicator} ${Classes.allowed_ind}`}
              ></span>
              {`${payload[0].value}`}
            </p>
          </div>

          <div className={Classes.tooltipBlocked}>
            <p className={Classes.label}>
              <span
                className={`${Classes.indicator} ${Classes.blocked_ind}`}
              ></span>{" "}
              Blocked
            </p>
            <p className={`${Classes.label} ${Classes.blockedValue}`}>
              <span
                className={`${Classes.indicator} ${Classes.blocked_ind}`}
              ></span>
              {`${payload[1].value}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default CustomTooltip;
