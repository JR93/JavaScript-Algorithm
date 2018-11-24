const { swap } = require('../utils')

/**
 * @method quickSort
 * @description 快速排序 时间复杂度: 最坏 = O(n^2), 最好 = O(nlogn)
 * @param { Array } arr
 * @param { Number } n
 */

const quickSort = (arr = [], n = arr.length) => {
  _quickSort(arr, 0, n - 1)
}

// 对arr[l...r]部分进行快速排序
const _quickSort = (arr, l, r) => {
  // if (l >= r) return
  if (r - l <= 15) {
    _insertionSort(arr, l, r)
    return
  }
  const p = _partition(arr, l, r)
  _quickSort(arr, l, p - 1)
  _quickSort(arr, p + 1, r)
}

// 对arr[l...r]范围的数组进行插入排序
const _insertionSort = (arr, l, r) => {
  for (let i = l + 1; i <= r; i ++) {
    // 寻找元素arr[i]合适的插入位置
    if (arr[i] < arr[i - 1]) {
      const e = arr[i]
      let j
      for (j = i; j > l && arr[j - 1] > e; j --) {
        arr[j] = arr[j - 1]
      }
      arr[j] = e
    }
  }
}

// 对arr[l...r]部分进行partition操作
// 返回p, 使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
const _partition = (arr, l, r) => {
  // 优化，避免近似有序的数据
  swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l))
  const v = arr[l]

  // arr[l+1...j] < v; arr[j+1...i) > v
  let j = l
  for (let i = l + 1; i <= r; i ++) {
    if (arr[i] < v) {
      swap(arr, j + 1, i)
      j ++
    }
  }

  swap(arr, l, j)

  return j
}

module.exports = quickSort