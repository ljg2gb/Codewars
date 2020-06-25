// CodeWars Mornings

// 6/25/20
function positiveSum(arr) {
    const pos = arr.filter(num => num > 0)
    return pos.length ? pos.reduce((num, sum) => sum + num) : 0 
  }