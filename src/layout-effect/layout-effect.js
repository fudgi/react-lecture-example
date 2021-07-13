import { useState, useEffect, useLayoutEffect } from 'react'
import pause from './pause'

const LayoutEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    pause(2000)
    setCount(3)
  }, [])

  // useLayoutEffect(() => {
  //   pause(2000)
  //   setCount(3)
  // }, [])

  return <p>{count}</p>
}

export default LayoutEffect
