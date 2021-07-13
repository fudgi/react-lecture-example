import { useState, useEffect } from 'react'
import RenderButtons from './rerender-buttons/rerender-buttons'
import LayoutEffect from './layout-effect/layout-effect'
import UseMemoExample from './use-memo/use-memo'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setTime((cur) => cur + 1), 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{time}</p> */}
        {/* <RenderButtons /> */}
        {/* <LayoutEffect /> */}
        <UseMemoExample time={time} />
      </header>
    </div>
  )
}

export default App
