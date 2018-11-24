const { randomArray, log } = require('../../utils')
const mergeSort = require('../../sort/mergeSort')

const n = 10000
const arr = randomArray(n, 0, n)

console.time('mergeSort')

mergeSort(arr)

console.timeEnd('mergeSort')

console.log('mergeSort result: ')
// log(arr)