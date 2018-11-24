const randomArray = (n, rangeL, rangeR) => {
  if (rangeR < rangeL) {
    console.warn('rangeR shounld be >= rangeL')
    return
  }
  const arr = []
  for (let i = 0; i < n; i ++) {
    arr.push(Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL))
  }
  return arr
}

module.exports = randomArray