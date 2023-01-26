import React from 'react'
import "./Status.css"
import StatusCard from './StatusCard';
import dotIcon from "../../assets/dot.svg"

export default function Status() {
  return (
    <div id="status" className='container'>
      <div className='row' >
       
        <div className="col-md-3">
            <StatusCard title="C2 Threats Detected" icon={icon} amount="10,000,000" link={null}/>
        </div>
        <div className="col-md-3">
            <StatusCard title="C2 Threats Detected" icon={icon} amount="10,000,000" link={null}/>
        </div>
        <div className="col-md-3">
            <StatusCard title="C2 Threats Detected" icon={icon} amount="10,000,000" link={null}/>
        </div>
        <div className="col-md-3">
            <StatusCard title="C2 Threats Detected" icon={icon} amount="10,000,000" link={null}/>
        </div>
          
      </div>
    </div>
  )
}
