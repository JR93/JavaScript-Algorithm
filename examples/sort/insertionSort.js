const { randomArray, log } = require('../../utils')
const insertionSort = require('../../sort/insertionSort')

const n = 10000
const arr = randomArray(n, 0, n)

console.time('insertionSort')

insertionSort(arr)

console.timeEnd('insertionSort')

console.log('insertionSort result: ')
// log(arr)


