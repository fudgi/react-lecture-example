import { useState, useEffect } from 'react'
import RenderButtonsExample from './rerender-buttons/rerender-buttons'
import LayoutEffectExample from './layout-effect/layout-effect'
import UseMemoExample from './use-memo/use-memo'
import PortalExample from './portal/portal'
import HOC from './hoc/hoc'
import useScroll from './hoc/useScroll'
import './App.css'

function App() {
  // const [time, setTime] = useState(1)

  // useEffect(() => {
  //   const timer = setInterval(() => setTime((cur) => cur + 1), 500)
  //   return () => clearInterval(timer)
  // }, [])
  // const time = useScroll()

  return (
    <div className="App">
      <header className="App-header">
        {/* <LayoutEffectExample /> */}
        {/* <p>{time}</p> */}
        {/* <HOC>
          <RenderButtonsExample />
        </HOC> */}

        {/* <UseMemoExample /> */}
        <PortalExample />
      </header>
    </div>
  )
}

export default App
