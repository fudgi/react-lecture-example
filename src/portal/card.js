import { useState } from 'react'

const Card = ({ title, preview }) => {
  const [isPopup, setPopup] = useState(false)
  //   const [parent] = useState(() => document.createElement('div'))

  const handleOpen = () => {
    setPopup(true)
  }
  const handleClose = () => {
    setPopup(false)
  }
  return (
    <div className="card">
      <img src={preview} className="img" />
      <h3>{title}</h3>
      <button onClick={handleOpen}>Перейти</button>
    </div>
  )
}

export default Card
