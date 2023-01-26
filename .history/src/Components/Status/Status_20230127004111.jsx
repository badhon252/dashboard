import React from 'react'
import StatusCard from './StatusCard'
import "./Status.css"

export default function Status() {
  return (
    <div className='container row' id='status'>
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
  )
}
