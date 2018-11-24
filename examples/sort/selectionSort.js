const { randomArray, log } = require('../../utils')
const selectionSort = require('../../sort/selectionSort')

const n = 10000
const arr = randomArray(n, 0, n)

console.time('selectionSort')

selectionSort(arr)

console.timeEnd('selectionSort')

console.log('selectionSort result: ')
// log(arr)


