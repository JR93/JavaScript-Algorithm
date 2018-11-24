/**
 * @method insertionSort
 * @description 插入排序 -- 稳定性, 空间复杂度: O(1) 时间复杂度: 最坏 = O(n^2), 最好 = O(n)
 * @param { Array } arr
 * @param { Number } n
 */

const insertionSort = (arr = [], n = arr.length) => {
  for (let i = 1; i < n; i ++) {
    // 寻找元素arr[i]合适的插入位置
    if (arr[i] < arr[i - 1]) {
      const e = arr[i]
      let j
      for (j = i; j > 0 && arr[j - 1] > e; j --) {
        arr[j] = arr[j - 1]
      }
      arr[j] = e
    }
  }
}

module.exports = insertionSort