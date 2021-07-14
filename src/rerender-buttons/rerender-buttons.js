import { useState, useCallback } from 'react'
import Counter from './counter'

const RenderButtons = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleCount1 = () => {
    setCount1(count1 + 1)
  }
  const handleCount2 = () => {
    setCount2(count2 + 1)
  }

  const clear = useCallback(() => {
    setCount1(0)
    setCount2(0)
  }, [])
  return (
    <div>
      <button onClick={handleCount1}>счетчик 1</button>
      <button onClick={handleCount2}>счетчик 2</button>
      <Counter onClick={clear} count={count1} id="1" />
      <Counter onClick={clear} count={count2} id="2" />
    </div>
  )
}

export default RenderButtons
