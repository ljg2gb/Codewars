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
    const reversedX = parseInt(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
      )
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

// codewars 7/23/20 (kata 6) refactored
function alphabetPosition(sentence) {
  return sentence
    .toLowerCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 96 )
    .join(' ')
}

function understandingCharCodeAt(index, sentence) {
  return `${sentence.charAt(index)} is at character code ${sentence.charCodeAt(index)} and at alphabet position ${sentence.toLowerCase().charCodeAt(index) - 96} which is the same as ${sentence.toUpperCase().charCodeAt(index) - 64}`
}

// Codewars 7/27 morning
function solve(a,b){
  if (a === 0 || b === 0) {
    return [a,b]
  }

  if(a >= 2*b){
    return solve(a-2*b ,b)
  }

  if(b >= 2*a){
    return solve(a, b-2*a)
  }
  
  return[a,b]
}

// For Aaron's dance team: given a list of people, return list of all possible pairs
function noRepeatPartners(array) {
  let allCombinations = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        allCombinations.push([array[i], array[j]]);
    }
  }
  // return sortPartners(results)
  return weeklyPairs(allCombinations)
}

function weeklyPairs(combinations) {
  let results = {}
  let weeks = parseInt(combinations.length/2)
  for(weeks; weeks > 0; weeks--) {
    results[weeks] = [combinations.flat()]
  }
  return results

}
// if either person's name is already in the week, add to the next available week
// return arrays with only four names.
// go by positions

// function sortPartners(array) {
//   let results = {};
//   for (let i = 0; i < array.length/2 ; i++) {
//     array.forEach(pair => {
//       if (results[i]) {
//         if ( results[i][0] !== pair[0] && results[i][1] !== pair[1] && results[i][0] !== pair[1] && results[i][1] !== pair[0]) {
//           results[i].push(pair)
//         }
//       } 
//       else {
//         results[i] = pair
//       }
//     })
//   }
//   return results
// }


// console.log(noRepeatPartners(['Aaron', 'Lydia', 'Sasha', 'Ira']))
// week 1: (aaron and lydia), (sasha and ira)
// week 2: (aaron sasha), (lydia and ira)
// week 3: (aaron, ira), (lydia, sasha)

// t! / n! * (t-n)
// 4! / 2! * (4-2)!
// 4*3*2*1 = 24


function sortingNums(nums) {
  return nums.sort((a,b) => a-b)
}

function sortingLetters(letters) {
  return letters.sort()
}

// console.log( sortingLetters(["a", "y", "b", "s", "j", "s", "p"]) )

// implement a function that determines if a string has all unique characters
// v1
function isUnique(string) {
  const sorted = string.split('').sort()
  for (i=0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      return false
    }
  }
  return true
}
// v2
function isUnique2(string) {
  if ( string.length > 128 ) {
    return false
  }
  let charSet = {}
  for (i=0; i < string.length; i++) {
    let value = string.charAt(i)
    if (charSet[value]) {
      return false
    }
    charSet[value] = true
  }
  return true
}

// what if you can't use any other data structures? Have to compare every character in the string to every other character in the string
// v3
function isUnique3(string) {
  for(i = 0; i < string.length; i++) {
    let char1 = string[i]
    for(j = i + 1; j < string.length; j++) {
      let char2 = string[j]
      if (char1 === char2) {
        return false
      }
    }
  }
  return true
}
// console.log(isUnique3('da'))

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
// Recall that the median of an even-numbered list is the average of the two middle numbers.
function runningMedian(arr) {
  let runningArr = []
  for (i = 0; i < arr.length; i++) {
    let sortedWorkingArr = sortingNums(arr.slice(0, i + 1))
    // console.log(sortedWorkingArr.length/2)
    if (sortedWorkingArr.length % 2 === 0) {
      let middleNum1 = sortedWorkingArr[ sortedWorkingArr.length / 2 ]
      let middleNum2 = sortedWorkingArr[ ( sortedWorkingArr.length / 2 ) - 1 ]
        runningArr.push(( middleNum1 + middleNum2 ) / 2 )
      console.log("even Average",( middleNum1 + middleNum2 ) / 2)
      console.log("even middle 1", middleNum1)
      // console.log("even middle 2", middleNum2)
    }
    else {
      let middleNum = sortedWorkingArr[ ( sortedWorkingArr.length / 2 ) - .5 ]
      // console.log("odd middle num", middleNum)
      runningArr.push(middleNum)
    }
  }
  return runningArr
}
// console.log(runningMedian([6,5,3,9,2,17,48,1,0]))