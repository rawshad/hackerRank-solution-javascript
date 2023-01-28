// 1 - Diagonal Diffrence
// 1 2 3
// 4 5 6
// 9 8 9 
// const diagonal = [11, 2, 24] [4, 5, 6] [10, 8, -12];

// function diagonalDifference(arr) {
// Write your code here
// const dim = arr[0].length;//store the first array length
// let firstDiagonalSum = 0;//initialize the varraiable to store the first diagonal sum
// let secondDiagonalSum = 0;//initialize the varraiable to store the second diagonal sum
// let sum = 0;////initialize the varraiable to store the difference of diagonal sums
// for (let i = 0,  j= (dim - 1); i<dim, j>-1; i++, j--)
//i represent the row of the integers in second diagonal
//j represent the column of the integers in second diagonal
//i++ increase the row
//j-- decrease the column
// {
//     firstDiagonalSum += arr[i][i];
//     secondDiagonalSum += arr[i][j];
// }
// sum = firstDiagonalSum - secondDiagonalSum;
//     if(sum > 0) {
//         return sum;
//     } else if(sum<0) {
//         return (sum * (-1));
//     } else return 0;

// }

// console.log(diagonalDifference(diagonal));


// 2 - plusMinus Array
// let arr = [-4, 3, -9, 0, 4, 1];
// let positiveValue = 0;
// let negativeValue = 0;
// let zeroValue = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>=1) {
//         positiveValue++; 
//     } else if (arr[i]<0) {
//         negativeValue++;
//     } else {
//         zeroValue++
//     }
// }

// let pRatio = (positiveValue/arr.length).toFixed(arr.length);
// let nRatio = (negativeValue/arr.length).toFixed(arr.length);
// let zRatio = (zeroValue/arr.length).toFixed(arr.length);


// console.log(pRatio);
// console.log(nRatio);
// console.log(zRatio);

// 3 - Staircase
// let n = 6;
// for(let i =1; i<=n; ++i ){ console.log(" ".repeat(n-i)+"#".repeat(i)) }

// 4 - Mini-Max Sum

// const arr = [1, 2, 3, 4, 5];
// const arr = [5, 5, 5, 5, 5];

// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// let minimumSum = 0;
// let maximumSum = 0;
// let min = Math.min( ...arr );
// let max = Math.max( ...arr );
// minimumSum = sumWithInitial - max;
// maximumSum = sumWithInitial - min;
// console.log(minimumSum, maximumSum);


// 5 - Birthday Cake Candles
// const candles = [3, 2, 1, 3];


// function birthdayCakeCandles(candles) {
//     // Write your code here
//     const max = Math.max(...candles);
//     const tallestCandles = [];
//     const totalTallestCandles = tallestCandles.length;

//     for (let i = 0; i < candles.length; i++) {
//         if (candles[i] === max) {
//             tallestCandles.push(i);
//         }
//     }
//     return tallestCandles.length;
// }

// console.log(birthdayCakeCandles(candles));

const s = "07:05:45PM";

function timeConversion(s) {
    let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]
    time = time.split(":").map(Number)
    if (part === "PM" && time[0] === 12) time[0] = 12
    if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24
    if (part === "AM" && time[0] === 12) time[0] = 0
    console.log(time);
    return time
      .map(String)
      .map(s => s.padStart(2, "0"))
      .join(":")
  }

timeConversion(s);
console.log(timeConversion(s));

























