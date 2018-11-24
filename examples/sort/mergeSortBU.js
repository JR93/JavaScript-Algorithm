const { randomArray, log } = require('../../utils')
const mergeSortBU = require('../../sort/mergeSortBU')

const n = 10000
const arr = randomArray(n, 0, n)

console.time('mergeSortBU')

mergeSortBU(arr)

console.timeEnd('mergeSortBU')

console.log('mergeSortBU result: ')
// log(arr)