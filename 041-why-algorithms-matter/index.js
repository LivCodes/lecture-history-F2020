//solution where you sort
function findCheckSum(matrix) {
    let total = 0
    for (let row of matrix){
        const sortedRow = row.sort((a, b) => a - b);
        total += sortedRow[sortedRow.length - 1] - sortedRow[0];
    }
    return total;
}

//solution where you use Math.max/min
function findCheckSum(matrix) {
    let total = 0;
    for (let row of matrix) {
        let max = Math.max(...row);
        let min = Math.min(...row);
        total += max - min;
    }
    return total;
}