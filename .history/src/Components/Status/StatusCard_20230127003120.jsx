import dotIcon from "../../..src/Asset/icons8-dot.svg"

export default function StatusCard() {
  return (
      <div className="card  mb-3" >
        <div className="d-flex justify-content-between" >
          <h3 className='card-title'>C2 Threats Detected</h3>
          <h3 className='card-title'>
            <img src={dotIcon} alt="" />
          </h3>
        </div>
        <div className="cardValue">10,000,000</div>
        <div className="card-body row">
         <div className="col-sm-6">See more</div>
         <div className="col-sm-6">Graph</div>
        </div>
      </div>

  )
}