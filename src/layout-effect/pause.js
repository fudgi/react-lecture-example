function pause(milliseconds) {
  const currentTime = new Date()
  while (new Date() - currentTime <= milliseconds) {
    /* Do nothing */
  }
}

export default pause
