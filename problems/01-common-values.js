/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]
    
*/

function commonValues(obj1, obj2) {
    let vals1 = Object.values(obj1)
    let vals2 = Object.values(obj2)
    // let longer
    // let shorter
    let arr = []

    // if (vals1.length >= vals2.length) {
    //     longer = vals1
    //     shorter = vals2
    // }
    // else {
    //     longer = vals2
    //     shorter = vals1
    // }
    vals1.forEach(function(el) {
        if(vals2.includes(el)) {
            arr.push(el)
        }
    })
    return arr
}


const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    // console.log(commonValues(cat, bunny)); // prints ['white']
    // console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}