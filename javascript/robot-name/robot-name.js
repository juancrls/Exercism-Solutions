let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let result = []
let arr = []

for(let i = 0; i < 26; i++){
    arr.push(characters.split('').map(x => [x])) // [['A'], ['B'], ['C']]
}

for(let i = 0; i < 26; i++){
    for(let j = 0; j < 26; j++){
        arr[j][i] += characters.charAt(j) // ['AA', 'BA', 'CA']
        for(let k = 0; k < 1000; k++){
            result.push(
                arr[j][i] + k
                    .toString()
                    .padStart(3, '0') // ['AA000', 'AA001', 'AA002']
            ) 
        }
    }
}

export class Robot {
    constructor(){
        this.listOfNames = result.sort(() => Math.random() - 0.5) // should shuffle every time constructor is called (isn't the case. why?)
    }

    get name(){
        return this.listOfNames[0]
    }

    reset(){
        this.listOfNames.shift()
    }
}


Robot.releaseNames = () => {};
