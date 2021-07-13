import { useState, useEffect } from 'react'
import RenderButtonsExample from './rerender-buttons/rerender-buttons'
import LayoutEffectExample from './layout-effect/layout-effect'
import UseMemoExample from './use-memo/use-memo'
import PortalExample from './portal/portal'
import './App.css'

function App() {
  // const [time, setTime] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => setTime((cur) => cur + 1), 500)
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <LayoutEffectExample />
        {/* <p>{time}</p> */}
        {/* <RenderButtonsExample /> */}
        {/* <UseMemoExample time={time} /> */}
        {/* <PortalExample /> */}
      </header>
      <div id="portal"></div>
    </div>
  )
}

export default App
