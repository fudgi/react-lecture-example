import { useState } from 'react'
import convert from './convert'

const USEMemorize = ({ time }) => {
  const [text, setText] = useState('')

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
