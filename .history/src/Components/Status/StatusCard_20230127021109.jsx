import "./Status.css";
import areaChart from "../../assets/areaChat.png";

export default function StatusCard({ title, icon, amount, link }) {
  return (
    <div className="myCard my-5 p-3">
      <div className="myCard_Head d-flex justify-content-between">
        <h3 className="myCard_title">{title}</h3>
        <h3 className="myCard_icon">
          <img className="img-fluid w-50" src={icon} alt=":" />
        </h3>
      </div>

      <div className="myCard_value">{amount}</div>

      <div className="myCard_data row">
        <div className="link py-2 col-md-6">
          <a href={link}>See more</a>
        </div>
        <div className="myCard_Graph col-md-6">
          <img className="img-fluid w-50" src={areaChart} alt="" />
        </div>
      </div>
    </div>
  );
}
