import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Card = ({ title, preview }) => {
  const [isPopup, setPopup] = useState(false)
  const [container] = useState(() => document.createElement('div'))

  const handleOpen = () => {
    setPopup(true)
  }
  const handleClose = () => {
    setPopup(false)
  }

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return (
    <div className="card">
      <img src={preview} className="img" />
      <h3>{title}</h3>
      <button onClick={handleOpen}>Перейти</button>
      {isPopup &&
        createPortal(
          <p onClick={handleClose} className="absolute">
            Popup
          </p>,
          container
        )}
    </div>
  )
}

export default Card
