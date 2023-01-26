import React from 'react'
import StatusCard from './StatusCard'

export default function Status() {
  return (
    <div className='row'>
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
