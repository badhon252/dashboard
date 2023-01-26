import dotIcon from "../../assets/dot.svg"
import "./Status.css"

export default function StatusCard() {
  return (
      <div className="card" >
        <div className="" >
          <h3 className=''>C2 Threats Detected</h3>
          <h3 className=''>
            <img src={dotIcon} alt=":" />
          </h3>
        </div>
        <div className="cardValue">10,000,000</div>
        <div className="">
         <div className="">See more</div>
         <div className="">Graph</div>
        </div>
      </div>

  )
}