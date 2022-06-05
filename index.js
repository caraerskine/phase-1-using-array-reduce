const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => 
    {
    return accumulator + currentValue;}, 0);

console.log(batteryBatches);

// const totalBatteries = 0;
// const reducer = (accum, totalBatteries) => {
//     return (accum + totalBatteries);
// }
// const grandTotalBatteries = batteryBatches.reduce(reducer, totalBatteries);



// (sumPrevious, sumBatteries) => sumPrevious + sumBatteries,

//const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
// (previousValue, currentValue) => previousValue + currentValue,
// initialValue
//);

// console.log(sumWithInitial);
// expected output: 10



