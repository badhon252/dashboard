import dotIcon from "../../assets/dot.svg"
import "./Status.css"

export default function StatusCard() {
  return (
      <div className="myCard my-5 p-3" >
        <div className="myCard_Head d-flex justify-content-between" >
          <h3 className='myCard_title'>C2 Threats Detected</h3>
          <h3 className='myCard_icon'>
            <img className="img-fluid w-50" src={dotIcon} alt=":" />
          </h3>
        </div>
        <div className="myCard_value">10,000,000</div>
        <div className="myCard_data">
         <div className="link">See more</div>
         <div className="myCard_Graph">Graph</div>
        </div>
      </div>

  )
}