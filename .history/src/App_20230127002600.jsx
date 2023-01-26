import './App.css'
import Activity from './Components/Activity/Activity'
import Analysis from './Components/Analysis/Analysis'
import Status from './Components/Status/Status'

function App() {

  return (
    <div className="container">
      <Status/>
      <Analysis/>
      <Activity/>
    </div>
  )
}

export default App
