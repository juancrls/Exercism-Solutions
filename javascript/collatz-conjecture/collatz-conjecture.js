export const steps = n => {
    let numOfSteps = 0;
    if(n !== 1){
        do{
            if (n <= 0){
                throw new Error('Only positive numbers are allowed')
            } else if(n % 2 === 0){
                n = (n / 2)
            } else if (n % 2 === 1){
                n = (n * 3 + 1)
            }
            numOfSteps = numOfSteps + 1;
        }while(n > 1);
    }else{return numOfSteps;}
    return numOfSteps;
};