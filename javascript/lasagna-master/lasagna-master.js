/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
    if(timer == 0) {
        return 'Lasagna is done.';
    } else if(timer > 0) {
        return 'Not done, please wait.';
    } else {
        return 'You forgot to set the timer.';
    }
}


export function preparationTime(layers, average = 2) {
    return layers.length * average;
}

export function quantities(layers) {
    const obj = {'noodles': 0, 'sauce': 0};

    layers.forEach(element => {
        if(element == 'noodles') obj['noodles'] += 50;
        if(element == 'sauce') obj['sauce'] += 0.2;
    });
    return obj;
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
    const newRecipe = {...recipe}

    for(let food in newRecipe){
        newRecipe[food] *= (portions / 2)
    }

    return newRecipe
}