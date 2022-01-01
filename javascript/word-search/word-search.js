class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.newGrid = JSON.parse(JSON.stringify(this.grid));
  }

  find(words) {
    this.grid = JSON.parse(JSON.stringify(this.newGrid));
      let result = {};
      words = words.map(word => word.split(''));
      
      const getMatchs = (words) => {
      let matchs = [...Array(words.length)].map(elem => elem = [...Array(this.grid.length)].map(x => x = []));
          
      for(let word in words){
        for(let char in words[word]){
          for(let i = 0; i < this.grid.length; i ++){
            for(let j = 0; j < this.grid[i].length; j++){
              if(this.grid[i][j] == words[word][char]){
                matchs[word][i].push([i, j]);
              }
            }
          }
        }
        matchs[word] = matchs[word].map(arr => {
          arr = arr.map(elem => elem.join(''));
          return [...new Set(arr)];
        })
      }
      return matchs
    }
  
    const findMatchs = (side) => {
      let num = 0;
      let col = -1;
      let row = -1
  
      if(side == 'right'){ 
        num = 1;
        col = 1
        row = 1
      }
  
      if(side == 'left'){ 
        num = 1;
        col = 1;
        row = -10;
        this.grid = this.grid.map(x => [...x].reverse().join(''))
      }
  
      if(side == 'up'){
        this.grid = this.grid.reverse()
        col = 10;
      }
  
      if(side == 'down'){
        num = 0;
        
      }

      if(side == 'diagonal'){
        num = 0
      }
  
      if(side == 'diagonalLeft'){
        this.grid = this.grid.reverse()
        col = 10
      }
  
      if(side == 'diagonalReverse'){
        this.grid = this.grid.map(x => [...x].reverse().join(''))
        row = 10
      }
  
      if(side == 'diagonalReverseLeft'){
        this.grid = this.grid.map(x => [...x].reverse().join(''))
        this.grid = this.grid.reverse()
        col = 10
        row = 10
      }
  
      
      let indexes = [...Array(words.length)].map(elem => elem = []);
      let verticalIndex, horizontalIndex, diagonalIndex;
      let verticalString, horizontalString, diagonalString;
      let matchs = getMatchs(words);
      
      for(let i = 0; i < matchs.length; i++){ // for each word
        verticalIndex = [...Array(this.grid[0].length)].map(elem => elem = []);
        verticalString = [...Array(this.grid[0].length)].map(elem => elem = []);
        
        diagonalIndex = [];
        diagonalString = [];
        
        matchs[i] = matchs[i].map(arr => arr.sort((a, b) => a[1] - b[1]).map(x => x.split('')));
        for(let j = 0; j < matchs[i].length; j++){ // for each column match in word match
          horizontalIndex = [];
          horizontalString = '';
          
          for(let k = 0; k < matchs[i][j].length - num; k++){ // for each match in column match
            if(side == 'right' || side == 'left'){
              if(matchs[i][j][k][1] == Number(matchs[i][j][k+1][1]) - 1){ // will catch clojur (without e)
                horizontalIndex.push([Math.abs(col + Number(matchs[i][j][k][0])), Math.abs(row + Number(matchs[i][j][k][1]))]);
                horizontalString += this.grid[matchs[i][j][k][0]][matchs[i][j][k][1]];

                if(horizontalString.includes(words[i].slice(0, words[i].length - 1).join('')) && this.grid[matchs[i][j][k+1][0]][matchs[i][j][k+1][1]] == words[i].join('').charAt(words[i].length - 1)){ // will catch e for "clojure"; avoid cases of "clojureee" && cases of "clojurclojure"
                  horizontalIndex.push([Math.abs(col + Number(matchs[i][j][k][0])), Math.abs(row + Number(matchs[i][j][k+1][1]))]);
                  horizontalString += this.grid[matchs[i][j][k+1][0]][matchs[i][j][k+1][1]];
                  
                  while(horizontalString.indexOf(words[i].join('')) !== 0){ // cccclojure = clojure
                    horizontalString = horizontalString.substr(1); 
                    horizontalIndex.shift()
                  }
                }
                if(horizontalString == words[i].join('')){ 
                  indexes[i] = (horizontalIndex);
                  indexes[i].push(horizontalString);
                  break;
                } 
              }
            }
          
            for(let x = 0; x < matchs[i].flat().length; x++){ // for each match in column match
              if(side == 'down' || side == 'up'){
                if(JSON.stringify(matchs[i][j][k]) == JSON.stringify([String(Number(matchs[i].flat()[x][0]) -1), matchs[i].flat()[x][1]])){
                  verticalIndex[matchs[i][j][k][1]].push([Number(matchs[i][j][k][0]), Number(matchs[i][j][k][1])]);
                  verticalString[matchs[i][j][k][1]].push(this.grid[matchs[i][j][k][0]][matchs[i][j][k][1]])
                }
              }   

              if(side == 'diagonal' || side == 'diagonalLeft' || side == 'diagonalReverse' || side == 'diagonalReverseLeft'){
                if(JSON.stringify(matchs[i][j][k]) == JSON.stringify([String(Number(matchs[i].flat()[x][0]) -1), String(Number(matchs[i].flat()[x][1]) -1)]) && words[i].join('').includes(this.grid[matchs[i].flat()[x][0]][matchs[i].flat()[x][1]])){
                  if(diagonalString.length == 0 && this.grid[matchs[i][j][k][0]][matchs[i][j][k][1]] == words[i][0]){
                    diagonalIndex.push([col - Number(matchs[i][j][k][0]), row - Number(matchs[i][j][k][1])]);
                    diagonalString.push(this.grid[matchs[i][j][k][0]][matchs[i][j][k][1]])
                  }
              
                  if(diagonalString.length >= 1 && words[i].join('').includes(diagonalString.join('') + this.grid[matchs[i][j][k][0]][matchs[i][j][k][1]])){  
                    diagonalIndex.push([Number(matchs[i][j][k][0]), Number(matchs[i][j][k][1])]);
                    diagonalString.push(this.grid[matchs[i][j][k][0]][matchs[i][j][k][1]])
                  }
              
                  if(diagonalIndex.length == 2 && JSON.stringify(diagonalIndex[0]) != JSON.stringify([diagonalIndex[1][0] - 1, diagonalIndex[1][1] - 1])){ // avoid cases where first index is random  - [ [ 0, 1 ], [ 5, 3 ], [ 6, 4 ], [ 7, 5 ], 'lisp' ]                      
                    diagonalIndex.shift();
                    diagonalIndex.unshift([diagonalIndex[0][0] - 1, diagonalIndex[0][1] - 1])
                  }
                  
                  if(diagonalString.join('').includes(words[i].slice(0, words[i].length - 1).join('')) && this.grid[diagonalIndex[diagonalIndex.length-1][0] + 1][diagonalIndex[diagonalIndex.length-1][1] + 1] == words[i].join('').charAt(words[i].length - 1)){
                    diagonalString.push(words[i].join('').charAt(words[i].length - 1));
                    diagonalIndex.push([diagonalIndex[diagonalIndex.length-1][0] + 1, diagonalIndex[diagonalIndex.length-1][1] + 1]);
                    
                    while(diagonalString.join('').indexOf(words[i].join('')) !== 0){ // cccclojure = clojure
                      diagonalString.shift(); 
                      diagonalIndex.shift()
                    }
                  }
                  if(diagonalString.join('') == words[i].join('')){ 
                    diagonalIndex.map(x => {
                      x[0] = Math.abs(col - x[0]);
                      x[1] = Math.abs(row - x[1]);
                    })

                    indexes[i] = (diagonalIndex);
                    indexes[i].push(diagonalString.join(''));
                    return indexes
                  } 
                }
              }
            }
          }   
        }

        if(side == 'down' || side == 'up'){
          for(let y = 0; y < verticalString.length; y++){
            verticalString[y] = verticalString[y].join('');
            
            if(verticalString[y].includes(words[i].slice(0, words[i].length - 1).join('')) && this.grid[verticalIndex[y][verticalIndex[y].length -1][0] + 1][verticalIndex[y][verticalIndex[y].length -1][1]] == words[i].join('').charAt(words[i].length - 1)){
              verticalString[y] +=  words[i].join('').charAt(words[i].length - 1);
              verticalIndex[y].push([verticalIndex[y][verticalIndex[y].length -1][0] + 1, verticalIndex[y][verticalIndex[y].length -1][1]])

              while(verticalString[y].indexOf(words[i].join('')) !== 0){ // cccclojure = clojure
                verticalString[y] = verticalString[y].substr(1); 
                verticalIndex[y].shift()
              }
            }

            verticalIndex[y].map(x => {
              x[0] = Math.abs(col - x[0]);
              x[1] = Math.abs(row - x[1]);
            });

            if(verticalString[y] == words[i].join('')){ 
              indexes[i] = (verticalIndex[y]);
              indexes[i].push(verticalString[y]);
              break;
            } 
          }
        }
      }
      return indexes
    }
    
    const SIDES = ['right', 'left', 'down', 'up', 'diagonal', 'diagonalReverseLeft', 'diagonalLeft', 'diagonalReverse'];
    
    SIDES.forEach(item => {
      
      findMatchs(item).map(x => {
        if(x.length > 0){
          this.grid = [
            'jefblpepre',
            'camdcimgtc',
            'oivokprjsm',
            'pbwasqroua',
            'rixilelhrs',
            'wolcqlirpc',
            'screeaumgr',
            'alxhpburyi',
            'jalaycalmp',
            'clojurermt',
          ]

          result[x[x.length-1]] = {start: x[0], end: x[x.length-2]}
        }
      })
    })
    return result
  }
}

export default WordSearch;
