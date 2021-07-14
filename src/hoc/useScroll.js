import { useEffect, useState } from 'react'

const useTime = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setTime((cur) => cur + 1), 500)
    return () => clearInterval(timer)
  }, [])

  return time
}

export default useTime
