import { useEffect } from 'react'

const HOC = ({ children }) => {
  useEffect(() => {
    document.addEventListener('scroll', () => console.log('scroll!!'))
  }, [])

  return <>{children}</>
}

export default HOC
