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
//   console.log(moviesPerFlight(120, [60,55,65,40,10]))

// Code Challenge from prospective employer
function checkSubSudoku(matrix) {
    const rotatedMatrix = rotate(matrix)
    return (checkValues(matrix) && checkValues(rotatedMatrix))
    ? "VALID"
    : "INVALID"
}

function checkValues(matrix) {
    for (i=0; i < matrix.length; i++) {
        let row = matrix[i]
        let unique = [...new Set(row)]
        if (row.length !== unique.length) {
            return false 
        } else {
            for (j=0; j < row.length; j++) {
                if ( (row[j] > row.length) || (row[j] < 1) ) {
                    return false
                }
            }
        }
    }
    return true;
}

function rotate(matrix) {
    const lastIndex = matrix.length - 1
    const rotated = matrix.map((row, i) => 
        row.map((element, j) => matrix[lastIndex-j][i] )
    )
    return rotated
}

// console.log(checkSubSudoku( [ [2,2,3],[2,3,1],[3,1,2] ] ))

function talentPath(n,a) {
    const b = a
    for (i=0; i < n -1; i++) {
        b[i] - a[i -1] + a[i] + a[i + 1]
    }
    return b
}

console.log(talentPath(2, [0,1]))