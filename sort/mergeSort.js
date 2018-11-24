/**
 * @method mergeSort
 * @description 归并排序 -- 稳定性, 空间复杂度: O(n) 时间复杂度: O(nlogn)
 * @param { Array } arr
 * @param { Number } n
 */

const mergeSort = (arr = [], n = arr.length) => {
  _mergeSort(arr, 0, n - 1)
}

// 递归使用归并排序，对arr[l...r]的范围进行排序
const _mergeSort = (arr, l, r) => {
  if (r - l <= 15) {
    _insertionSort(arr, l, r)
    return
  }
  const mid = Math.floor((l + r) / 2)
  _mergeSort(arr, l, mid)
  _mergeSort(arr, mid + 1, r)
  if (arr[mid] > arr[mid + 1]) {
    _merge(arr, l, mid, r)
  }
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

module.exports = mergeSort