import { useState, useMemo } from 'react'
import convert from './convert'
import useTime from '../hoc/useScroll'

const USEMemorize = () => {
  const [text, setText] = useState('')
  const time = useTime()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const calculatedTime = convert(time)

  return (
    <div>
      <p>{calculatedTime}</p>
      <input onChange={handleText} value={text} />
      <p>{text}</p>
    </div>
  )
}

export default USEMemorize
