export class Change {
    calculate(coinArray, target) {
        let total = target;
        let change = [];

        if(target == 0) return [];
        if (target < 0) throw new Error('Negative totals are not allowed.');

        let min = new Array(target + 1);
        let first = [...min];
        min[0] = 0;

        for(let i = 0; i < coinArray.length; i++) {
            for(let k = coinArray[i]; k <= target; k += 1) {
                let ind = k - coinArray[i];
                let sub = min[ind];
                if (sub + 1 < min[k] || !min[k]) {
                    min[k] = sub + 1;
                    first[k] = coinArray[i];
                }
            }
        }
      
        if (!min[target]) throw new Error(`The total ${target} cannot be represented in the given currency.`);
        do {
            let coin = first[total];
            total -= coin;
            change.push(coin);
        } while (total > 0);

        return change.sort((a, b) => a - b);
    }
}