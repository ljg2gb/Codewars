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
// Given an array of strings, group anagrams together.
function groupAnagrams(array){
  let hash = {}
  array.forEach(word => {
      let key = word.split('').sort()
      hash[key] ? hash[key].push(word) : hash[key] = [word]
  })
  return Object.values(hash).flat()
}

// 7/16 codewars mornings
function halvingSum(n) {
  let total = 0
  while (n > 0) {
    total = total + n; 
    n = Math.floor(n/2);
  }
  return total 
}

function maxDiff(list) {
  if (list <= 1) return 0;
  const sorted = list.sort((a, b) => a-b)
  return sorted[sorted.length - 1] - sorted[0] 
};

// MaxDiff refactored w/ Math.max/.min
function maxDiffRefactored(list) {
  return (list <= 1) ? 0 : Math.max(...list) - Math.min(...list)  
};

function removeElement(nums, val) {
  return nums.filter(num => num !== val)
};

// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
function squareAndSort(array) {
  return array.map( num => num*num ).sort( (a,b) => a-b )
}

// 7/20/20 leetcode
function isPalindrome(x) {
    const reversedX = parseInt(x.toString().split("").reverse().join(""))
    return x === reversedX
};

// Daily Code question: recently asked by Google:
// Given a list of numbers, and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
function DailyCodeQuestion1(array, sum) {
  let lookup = {}

  for (let i=0; i < array.length; i++) {
    let target = sum - array[i]
    if (lookup[target]) {
      return true
    }
    lookup[array[i]] = true
  }
  return false
}
// Mock Technical Interview Code Problem
// return a boolean, true if there exists TWO different movies that add up exactly to the flightLength
function moviesPerFlight(flightLength, moviesArray) {
  const movieObj = {}

  for (let i=0; i < moviesArray.length; i++) {
    let target = flightLength - moviesArray[i]
    if (movieObj[target]) {
      return true
    }
    movieObj[moviesArray[i]] = true
  }
  return false
}
// codewars 7/23/20 (kata 6)
function alphabetPosition1(text) {
  const alphabet = ['-','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let lettersArray = text.toLowerCase().match(/[a-z]/gi)
  return lettersArray
    .map(letter => alphabet.indexOf(letter))
    .join(' ')
}

function understandingCharCodeAt(index, sentence) {
  return `${sentence.charAt(index)} is at character code ${sentence.charCodeAt(index)} and at alphabet position ${sentence.toLowerCase().charCodeAt(index) - 96} which is the same as ${sentence.toUpperCase().charCodeAt(index) - 64}`
}

console.log(understandingCharCodeAt(3, "That's a sentence."))





