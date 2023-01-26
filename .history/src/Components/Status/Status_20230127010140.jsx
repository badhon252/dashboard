import React from 'react'
import StatusCard from './StatusCard'
import "./Status.css"

export default function Status() {
  return (
    <div id="status" className='container'>
      <div className='row' >
       
        <div className="col-md-3">
            <StatusCard/>
        </div>
        <div className="col-md-3">
            <StatusCard/>
        </div>
        <div className="col-md-3">
            <StatusCard/>
        </div>
        <div className="col-md-3">
            <StatusCard/>
        </div>
          
      </div>
    </div>
  )
}
