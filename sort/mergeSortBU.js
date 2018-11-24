const insertionSort = require('./insertionSort')

/**
 * @method mergeSortBU
 * @description 归并排序(自底向上) -- 时间复杂度: O(nlogn)
 * @param { Array } arr
 * @param { Number } n
 */

const mergeSortBU = (arr = [], n = arr.length) => {
  if (n <= 15) {
    insertionSort(arr)
    return
  }
  for (let sz = 1; sz <= n; sz += sz) {
    for (let i = 0; i + sz < n; i += sz + sz) {
      if (arr[i + sz - 1] > arr[i + sz]) {
        // 对arr[i...i+sz-1]和arr[i+sz...i+2*sz-1]进行归并
        _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1))
      }
    }
  }
}

// 将arr[l...mid]和arr[mid+1...r]两部分进行归并
const _merge = (arr, l, mid, r) => {
  const aux = []
  for (let i = l; i <= r; i ++) {
    aux[i - l] = arr[i]
  }
  let i = l
  let j = mid + 1
  for (let k = l; k <= r; k ++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j ++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i ++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i ++
    } else {
      arr[k] = aux[j - l]
      j ++
    }
  }
}

module.exports = mergeSortBU