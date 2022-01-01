export const saddlePoints = (rows) => {
  let result = [];
  let columns = [...Array(rows[0].length)];
  
  for(let i = 0; i < rows[0].length; i++){
      columns[i] = []
      for(let k = 0; k < rows.length; k++){
          let pivot = rows[k][i]
          columns[i].push(pivot)
      }
  }
  
  if(rows[0].length == 1){ // for [2], [1], [4], [1] 
      let minCol = columns[0].indexOf(Math.min(...columns[0]))
      let min = columns[0][minCol];
  
      for(let i = 0; i < columns[0].length; i++){
          columns[0][i] == min ? result.push({row: i + 1, column: 1}) : null
      }
      return result;
  }
  
  for(let i = 0; i < rows.length; i++){
      let maxRow = rows[i].indexOf(Math.max(...rows[i]));
  
      for(let j = 0; j < rows[i].length; j++){
          if(rows[i][j] == rows[i][maxRow]){
              var minCol = columns[j].indexOf(Math.min(...columns[j])); 
  
              if(rows[i][maxRow] == columns[maxRow][minCol]) {
                  if(rows.length == columns.length){
                      columns[maxRow][minCol] == columns[maxRow][minCol+1] ? columns[maxRow][minCol] += 1 : null
                      result.push({row: minCol + 1, column: j + 1})
                  
                  }else result.push({row: minCol + 1, column: j + 1})
              }
          }
      }
  }
  return result;
};
