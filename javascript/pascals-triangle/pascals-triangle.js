export const rows = (rows) => {
let arr = [...Array(rows)].map(x => [1]) // create an array with n rows with default number 1 : [[1], [1], [1], [1]]
for(let i = 1; i < rows; i++){ 
    for(let j = 0; j < arr[i-1].length -1; j++){ 
        arr[i].push((arr[i-1][j] + arr[i-1][j+1]))
    }
    arr[i].push(1) // push default final number 1
}
return arr;
}
