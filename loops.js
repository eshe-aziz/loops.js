//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10.
//Return the array with the new values
function numArr(arr){
    const firstFourNumbers = arr.slice(0,4).map(item => item * item);
    console.log(firstFourNumbers)
    const lastTwoNumbers = arr.slice(-2).map(item => item + 10)
    const middleNumbers = arr.slice(4, -2)
    const newValueArr = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers)
}
numArr([11,12,13,14,15,16,17,18,19,20])



//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function nums(numbers){
    while(numbers.slice(0,3), numbers.slice(5)){
        console.log(numbers)
        if(numbers[4]){
            break;
        }
    }
}
nums([1,2,3,4,5,6,7,8,9,10])



//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  
//let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi']
for (let i = 0; i <= fruits.length; i++){

}
console.log(fruits)




//Write a function that accepts an array of strings and console.logs each element using a for loop.
var fruit = ["melon", "grapes", "banana", "pawpaw"];

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reverseString(str){
    let reversedStr = "";
    let x = str.length-1;
    while (x>=0) {
        reversedStr += str.substring(x, x + 1);
        x--;
    }
    console.log({reversedStr})
}
reverseString("Yiamat")
reverseString("Ainembabazi")









