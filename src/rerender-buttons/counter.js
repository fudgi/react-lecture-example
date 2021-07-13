const Counter = ({ count, id }) => {
  console.log(`счетчик ${id}`, count)
  return <p>{count}</p>
}

export default Counter
