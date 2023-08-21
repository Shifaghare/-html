// // Data types 


// // 1. String : 

// // Syntax = "", '', ``
// // Examples : 
// // "Swaraj", 'jadhavswaraj@gmail.com', `34` , "My name is awdiz",
// // 'My age is 34 and my school is awdiz..'

// // 2. Number : 

// // Syntax : 
// // 34, 54678, -9876, 23.45, 0

// // 3 Boolean : 

// // Syntax : 
// // true , false

// // 4. Undefined

// // Initially no value 




// // Varibles - 

// // var 
// // let 
// // const

// // var : 

// // syntax : var nameOFvarible = value ;

// var myName = "Swaraj";
// var mySurname = "Jadhav";
// var myAge = 87;
// var isCompletedAssignment = false;
// var kuchBhi = "Kuchbhi"
// var description = "My name is swaraj im from mumbai im working at toyow..."
// console.log(myName)

// console.log(myAge)
// console.log(description)
// console.log(mySurname)
// console.log(kuchBhi)


// console.log(isCompletedAssignment)


// var myName = "Awdiz";
// console.log(myName, typeof (myName))
// var mySurname = 'Classes';
// console.log(mySurname, typeof (mySurname))
// var myCity = `Mumbai`
// console.log(myCity, typeof (myCity))

// var myAge = 60;
// console.log(myAge , typeof(myAge))

// var isHadDinner = false;
// console.log(isHadDinner, typeof (isHadDinner))

// var myDecscription ;
// console.log(myDecscription, typeof(myDecscription))

// var num1 = 987;
// var num2 = 234;
// var addition = num1 + num2;
// console.log(addition, "- addition")
// var subtraction = num1 - num2;
// console.log(subtraction, "- subtraction")
// var multi = num1 * num2;
// console.log(multi, "- Multiplication");
// var divid = num1 / (num2 + num1);
// console.log(divid, "- dividation")

// var additionOfThree = num1 + num2 + num1;
// console.log(additionOfThree)

// var myName = "Xyz";

// var message = "Welcome To our website, Mr. ${myName}";

// var newMessage = `Welcome to our website Mr. ${myName}`

// console.log(message);
// console.log(newMessage)



// var array=[12,22,33,44,55,1,1,111,22,33]
// for (var i = 0; i < array.length; i++) {
//         console.log(array[i])
//         if (array[i] % 2 != 0) {
//             console.log(array[i], "- This is odd number.")
//         } else {
//             console.log(array[i], "This is even number.")
//         }
//     }
    
//    Q)   Find out all odd numbers and even numbers addition from given array.
    var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];
    var additionOfOddNumber = 0;
    var additionOfEvenNumber = 0;
    
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    
        if (array[i] % 2 != 0) {
            console.log(additionOfOddNumber,"+" , array[i])
        
            additionOfOddNumber = additionOfOddNumber + array[i];
    
            console.log(additionOfOddNumber, "value updated")
         }
          else {
             additionOfEvenNumber = additionOfEvenNumber + array[i];
         }
     }
    
    console.log(additionOfEvenNumber, "- Addition for even number")
    console.log(additionOfOddNumber, "-Addition for Odd number ")
    
    
    
//////////////////     // Nested FOR loop
    
    // Q Given an array find out addition of two number which is equal to target
    
    // var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3];
    // var target = 10;
    
    // for (var i = 0; i < array.length; i++) 
    //     console.log(array[i])
    //     for (var j = i + 1; j < array.length; j++) {
    //         console.log(i, j)
    //         console.log(array[i], array[j])
    //         console.log(array[i] + array[j])
    //         console.log(array[i] + array[j] == target)
    //         if (array[i] + array[j] == target) {
    //             console.log(array[i], "+", array[j], "=", array[i] + array[j])
    //         }
    //     }




//Q) find count of the target number:

// var array=[12,33,44,22,44,33,55,12,34,59,54,31] ;
// var target=3;
//  function fin(array,target)
//  {
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] == target) {
//             count++;
//         }
//     }
//     return count;

// }

// console.log(fin(array, target))




//Q)  find a number and return if the number is present in an array or not:

// var array=[12,22,13,44,55,23,24,98]
// var target=13;
//  function find(array, target) {
//          var gotIt = false;
    
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] == target) {
//                  gotIt = true;
//                 return "Got it"; 
//             }
//         }
    
//          if (gotIt == false) {
//         return "No"
//          }
    
//     }
// console.log(find(array, target))

//Q)  find  number in an array

// var array=[98,44,33,22,33,5,12];
// var target=98;

// function find(array,target)
// {
//     var found = false;

//     for (var i=0;i< array.length;i++)
//          {
//             if (array[i]==target){
//             found==true;
//         return "Found it";

//          }

//         }
         
//        if(found == false){
//         return"error not found"
//        }
//        }
//        console.log(find(array, target))







// Q)  find pair of number whose addition is equal to target number.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 94, 23, 45, 67, 12];
// const target = 10;



// for (var i = 0; i < array.length - 2; i++) {
//         console.log(array[i])
//         for (var j = i + 1; j < array.length - 1; j++) {
//             if (array[i] + array[j] == target) {
//                 console.log(array[i], array[j])
//             }
//             for (var k = j + 1; k < array.length; k++) {
//                 if (array[i] + array[j] + array[k] == target) {
//                     console.log(array[i], array[j], array[k])



//                 }
//                 console.log(i, j, k)
//             }
//         }
//     }





    //  Q) Perform Addition and substraction of two numbers:

//     function addition(){
//         var a=10;
//         var b=20;
//         return a + b;
//          }
        
//          console.log(addition())



// function substraction(){
//     var a=20;
//     var b=44;
//     return a-b;
// }
// console.log("Substraction of 20-44 is",substraction())





// function Welcome(name, surname, city, age) {
//     console.log(`I'm ${name} my surname is ${surname} and im from ${city} and my age is ${age}`)
// }
// Welcome("Rahul", "Surname", "Pune", 87)


//Q)  




