const log = arr => {
  let logStr = ''
  for (let i = 0, len = arr.length; i < len; i ++) {
    logStr += ` ${arr[i]} `
  }
  console.log(logStr)
}

module.exports = log