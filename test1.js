<<<<<<< Updated upstream
// Question 1:
// Write a JavaScript function that takes an array of strings 

var strings = ["123","ab","xyzzz","pqrs"]
function findStringLength(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        result.push(array[i].length)
    }
    return result;
}
console.log(findStringLength(strings))

// Question 2:
// Write a JavaScript function that takes an array of
// numbers as input and returns a new array with only the even 
// numbers from the original array.

var numbers = [12,23,34,45,56,77,78];
function findSumNumber(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(findSumNumber(numbers))

// Question 3:
// Write a JavaScript function that takes an array of numbers
//  as input and returns the smallest number from the array.

var numbers = [22,32,11,44,55,34,65,78];
function findSmallNumber(array) {
    var minimum = array[0]; 
    for (var i = 0; i < array.length; i++) {
        if (minimum > array[i]) {
            minimum = array[i]; 
        }
    }
    return minimum
}
console.log(findSmallNumber(numbers))



// Question 4:
// Write a JavaScript function that takes two arrays
//  as input and returns a new array containing elements
//   that are present in both arrays.
var array1 = [6,7,3,4,1]
var array2 = [1,2,3,4,5]
function findSame(array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                newArray.push(array1[i])
            }
        }
    }
    return newArray;
}
console.log(findSame(array1, array2))
=======
//1)Write a javascript function that takes an array of strings as input and returns a new array containing the lengths of those strings
var array=[1,2,4,4,5,55,8]
var length=array.length
console.log(array.length)

//2)write ajavascript function that takes an array of numbers as input and returns a new array with only the even numbers from the original array

var array=[1,2,3,4,5,6,7,8,9];

for (var i=0;i<array.length;i++)
{
    console.log(array[i])

if(array[i]%2==0)
{
    console.log("Even Numbers Are:",array[i])   
}
}



//3)write a javscript function that takes an array of numbers as input and returns the smallest number from the array.

var array=[1,2,3,4,5,6]
var min=Math.min(...array)
console.log(min)

// //4)Write a javascript function that takes two arrays as input and returns a new array containing elements that are present in both arrays.

var array1=[1,2,3]
var array2=[1,2,4]
for(var i=0; i<array1.length;i++)
{
    for(var j=0; j<array1.length;j++)
    if(i==j)
console.log(array1,array2)
}

>>>>>>> Stashed changes
