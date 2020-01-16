// Write a function that receives a matrix and returns its transposed one.

function transposeMatrix(matrix) {
    // Let the element be E on position m (rows) n (columns) = E mn.
    // The transposed E element = E nm.
    
    // Taking the first row of the matrix.
    const firstRow = matrix[0];
    
    // Array.map applies the callback for every element on the given array. Since we are taking the first element of
    // the array for this (firstRow, or [1, 2, 3]), the callback will call on 1, 2 and 3. This will return a new array,
    // (the transposed matrix), which will contain n number of arrays. Inner map will create the transposed values using
    // the column index.
    const result = firstRow.map((column, index) => {
        return matrix.map((row) => {
            return row[index];
        });
    })
    
    console.table(result);
    return result;
}

const matrix = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
];
transposeMatrix(matrix);
