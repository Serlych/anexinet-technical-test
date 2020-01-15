// Write a function that receives a matrix and returns its transposed one.

function transposeMatrix(matrix) {
    // Let the element be E on position m (rows) n (columns) = E mn.
    // The transposed E element = E nm.
    
    // const result
    
    const firstRow = matrix[0];
    
    const result = firstRow.map((column, index) => {
        console.log(column)
        return matrix.map((row) => {
            return row[index];
        });
    })
    
    return result;
}

const matrix = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
];
console.log(transposeMatrix(matrix));
