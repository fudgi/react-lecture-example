import { memo } from 'react'

const Counter = ({ count, id, onClick }) => {
  console.log(`счетчик ${id}`, count)
  return <p onClick={onClick}>{count}</p>
}

export default memo(Counter)
