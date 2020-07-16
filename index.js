// CodeWars Mornings

// 6/25/20
function positiveSum(arr) {
  const pos = arr.filter(num => num > 0)
  return pos.length ? pos.reduce((num, sum) => sum + num) : 0 
}

// 7/14/20
function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) 
  ? true 
  : false
}

// 7/14/20 refactored
// Because the ternary condition evaluates to true or false, we don't need the ternary at all
function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0)
}

// 7/15/20
function sakuraFall(v) {
  return v <= 0 ? 0 : 400 / v;
}

function findMultiples(integer,limit){
  let multiples = []
  
  for (let i = integer; i<=limit; i+=integer) {
    multiples.push(i)
  }

  return multiples
}

function removePreviousDuplicateItems(array){
  const uniqueSet = new Set(array.reverse())
  return [...uniqueSet].reverse()
}

// leetCode problem pair-programming with Nolan
function groupAnagrams(array){
  let hash = {}
  array.forEach(word => {
      let key = word.split('').sort()
      hash[key] ? hash[key].push(word) : hash[key] = [word]
  })
  return Object.values(hash).flat()
}

function halvingSum(n) {
  let total = 0
  while (n > 0) {
    total = total + n; 
    n = Math.floor(n/2);
  }
  return total 
}

// console.log(halvingSum(10))
