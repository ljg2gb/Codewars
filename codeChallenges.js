// Pinterest Code Challenge
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

console.log(checkSubSudoku( [ [2,2,3],[2,3,1],[3,1,2] ] ))