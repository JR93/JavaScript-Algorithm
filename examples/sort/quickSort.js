const { randomArray, log } = require('../../utils')
const quickSort = require('../../sort/quickSort')

const n = 10000
const arr = randomArray(n, 0, n)

console.time('quickSort')

quickSort(arr)

console.timeEnd('quickSort')

console.log('quickSort result: ')
// log(arr)


