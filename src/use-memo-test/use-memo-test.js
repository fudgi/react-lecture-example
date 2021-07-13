import { useState } from 'react'
import Counter from './counter'

const UseMemoTest = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleCount1 = () => {
    setCount1(count1 + 1)
  }
  const handleCount2 = () => {
    setCount2(count2 + 1)
  }
  return (
    <div>
      <button onClick={handleCount1}>счетчик 1</button>
      <button onClick={handleCount2}>счетчик 2</button>
      <Counter count={count1} id="1" />
      <Counter count={count2} id="2" />
    </div>
  )
}

export default UseMemoTest