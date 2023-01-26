import dotIcon from "../../assets/dot.svg"
import "./Status.css"

export default function StatusCard({title, icon, amount, link}) {
  return (
      <div className="myCard my-5 p-3" >
        <div className="myCard_Head d-flex justify-content-between" >
          <h3 className='myCard_title'>{title}</h3>
          <h3 className='myCard_icon'>
            <img className="img-fluid w-50" src={icon} alt=":" />
          </h3>
        </div>
        <div className="myCard_value">{amount}</div>
        <div className="myCard_data">
         <div className={link}>See more</div>
         <div className="myCard_Graph">Graph</div>
        </div>
      </div>

  )
}