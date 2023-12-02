
// if(188>13){
//     console.log("yes")
// }
// else if(12>13){
//     console.log("hmmmmm")
// }
// else{
//     console.log("errorrrrr")
// }

// for(var i=0;i<11;i++){

// console.log(i)
// }

// for(var a=26 ; a<=50 ; a++){
//     console.log("values of a are:",a);
// }


// Q) find out addition of even number n odd number fom array?

// var array=[12,3,4,5,6,7,8,9,29,20];

// var addtitonofoddNum=0;
// var additionOfEvenNum=0;

// for(var i=0; i <= array.length ;i++ ){
//     console.log(array[i])

//     if(array[i] % 2 != 0){
//         console.log(addtitonofoddNum,"+",array[i])

//         additionofoddNum=addtitonofoddNum+array[i];

//         console.log(additionofoddNum,"value")
//     }
//     else {
//         additionOfEvenNum = additionOfEvenNum + array[i];
//     }
// }

// console.log(additionOfEvenNum, "- Addition for even number")
// console.log(additionofoddNum, "-Addition for Odd number ")

// Q find even and odd numbers?

// var array=[1,2,3,4,5,6,7,8,9]
// for(var i = 0 ; i < array.length; i++){
//     // console.log(array[i])


// if(array[i]%2!=0){
//     console.log(array[i],"Odd Number")
// }
// else{
//     console.log(array[i],"Even Number")
// }
// }


// find out addition of odd number and addition of even numbers 

var array=[1,2,3,4,5,6]
var additionofen=0;
var additionofon=0;
for(var i=0; i< array.length;i++ ){
    // console.log(array[i])
    if(array[i]%2!=0)
    {
        // console.log(additionofon,"+" ,array[i])
        additionofon=additionofon+array[i];
        // console.log(" updated value",additionofon)
    }
    else{
        // console.log(additionofen,"+",array[i])
        additionofen=additionofen+array[i];
        // console.log(additionofen,"updated addition")
    }
    console.log(additionofen,"final value of even no.")
    console.log(additionofon,"final value of odd no.")
}



