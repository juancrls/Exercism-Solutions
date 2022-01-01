export class Rectangles {
    static count(arr){
        let result = 0;
        let ascii = arr.map(str => str.split(''));

        ascii.forEach((row, count1) => {
            row.forEach((col, count2) => {
                if(col == '+'){
                    for (let a = count2 + 1; a < row.length; a++){
                        if(row[a] != '-' && row[a] != '+' ){
                            return
                        } else if(row[a] == '+'){
                            for (let b = count1 + 1; b < ascii.length; b++){
                                if(ascii[b][count2] != '+' && ascii[b][count2] != '|' || ascii[b][a] != '+' && ascii[b][a] != '|'){
                                    break;
                                } else if(ascii[b][count2] == '+' && ascii[b][a] == '+') result++; 
                            }
                        }
                    }
                }
            })
        })
      return result;
    }
}