// problems taken from Educative course "Data Structures for Coding Interviews in Javascript"

// Challenge 1: Remove Even Integers from an Array
function removeEven(arr) {
    return arr.filter((element => (element % 2 !== 0)))
}
// console.log(removeEven([1,2,3,4,5,6,7,8,9]))

// Challenge 2: Merge Two Sorted Arrays
function mergedArraysA(arr1, arr2) {
    return [...arr1, ...arr2].sort((a,b) => a-b)
}
// time complexity: O(nlogn) 
// Because of the sort method, this solution is not very time efficient

function mergedArraysB(arr1, arr2) {
    let merged = []
    let i = 0
    let j = 0
    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    };

    if (i <= (arr1.length - 1)) {
        arr1.splice(0, i)
        merged = merged.concat(arr1);
    } else if (j <= (arr2.length - 1)) {
        arr2.splice(0,j)
        merged = merged.concat(arr2)
    };
    return merged;
}
// time complexity: O(n+m)
// Both arrays are interated over only once.

// console.log(mergedArraysB([1,5,7,9], [2,3,4,6,8]))

// Challenge 3: Find two numbers in array that add up to a certain value
// 1. My solutions employs hashing for create an efficient solution
function findSum(arr,value){
    let map = {}
    for (var i=0; i < arr.length; i++) {
        let target = value - arr[i]
        if (map[target]) {
            return [target, arr[i]]
        }
        map[arr[i]] = true
    }
    return false
}

// 2. Brute-force solution
function findSumB(arr, value) {
    for (var j =0; j<arr.length; j++) {
       for (var k = j+1; k<arr.length; k++) {
            if ((arr[j] + arr[k]) == value)
                return [arr[j], arr[k]]
        }
    }
    return false;
}

// 3. Binary-Search Method
function binarySearch(arr, item){
    var first = 0, mid;
    var last = arr.length - 1;
    var found = false
    var arrayIndex = -1
    while( (first <= last) && !found){
        mid = Math.floor((first + last) / 2)
        if( arr[mid] == item){
            arrayIndex = mid
            found = true
        }
        else{
            if(item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    if (found)
         return arrayIndex
     else
         return false
 }
 
 function findSumC(arr,value){
    arr.sort(function(a, b) {
         return a - b
     })
 var index;
  for(var j = 0; j<arr.length; j++){
    index = binarySearch(arr,(value-arr[j]))
    if(index!=false && j!=index)
      return [arr[j],value-arr[j]]
  }
   return false;
 }

//  4. Moving Indices
function findSum(arr, value) {

    arr.sort(function(a, b) {
        return a - b
    })

    var index1 = 0,
        index2 = arr.length - 1,
        result = [],
        sum = 0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2]

        if (sum < value) {
            index1++;
        } else if (sum > value) {
            index2--;
        } else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;

        }
    }
    return false;
}
// console.log(findSum([1,2,3,4,5,6,6], 13))

// Challenge 4: Given an Array, return an array with each element as the product of all other elements in the given array
// This solution does not work for cases where there is a 0 in the array.
function findProduct(arr) {
    const product = arr.reduce((acc, element) =>  acc *= element )
    return arr.map(element => product / element)
}

// 1. Using a nested loop
function findProductA (arr) {
    var result = []
    var left = 1, currentProduct;
    for ( i = 0; i < arr.length; i++ ) {
        currentProduct = 1
        for ( j=i+1; j < arr.length; j++ ) {
            currentProduct *= arr[j]
        }
        result.push(currentProduct * left)
        left *= arr[i]
    }
    return result
}

// 2. Optimizing the number of multiplications
function findProductB(arr) {
    var temp = 1,
        product = []
    for ( i=0; i < arr.length; i++ ) {
        product[i] = temp
        temp *= arr[i]
    }
    temp = 1
    for ( i = arr.length - 1; i > -1; i--) {
        product[i] *= temp
        temp *= arr[i]
    }
    return product
}

console.log(findProduct([1,2,3]))

// Daily Code Questions
// Determine how "out of order" an array is by counting the number of inversions it has in less than O^2 time
function countingInversions(arr) {

}


