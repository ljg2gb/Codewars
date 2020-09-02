// problems taken from Educative course "Data Structures for Coding Interviews in Javascript"
// 1. Remove Even Integers from an Array
function removeEven(arr) {
    return arr.filter((element => (element % 2 !== 0)))
}

console.log(removeEven([1,2,3,4,5,6,7,8,9]))

// 2. Merge Two Sorted Arrays
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

// 3. Find two numbers in array that add up to a certain value