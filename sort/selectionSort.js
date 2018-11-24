const { swap } = require('../utils')

/**
 * @method selectionSort
 * @description 选择排序 -- 时间复杂度: O(n^2)
 * @param { Array } arr
 * @param { Number } n
 */

const selectionSort = (arr = [], n = arr.length) => {
  for (let i = 0; i < n; i ++) {
    // 寻找[i, n)区间里的最小值
    let min = i
    for (let j = i; j < n; j ++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
}

module.exports = selectionSort