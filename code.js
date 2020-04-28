// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function isNumeric(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

function sayHello(input) {
   if(typeof input === "string"){
       return "Hello, " + input + "!";
   }else{
      return "Hello, World!"
   }
}
// var input;
function isFive(input) {
    // input = "5";
        if(typeof input === 5 || parseFloat(input) === 5){
            return true;
        } else {
            return false
        }
}

// function isEven(input) {
//     if(input === 2 || input === -4 || input === "8"){
//         return true;
//     } else if(input === 3 || input === "banana" || input === Infinity || input === true || input === false){
//         return false;
//     } else if(isEven() === true){
//         return false;
//     }
// }

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isVowel(input) {
    if(input === "a" || input === "A"){
       return true;
    }else{
        return input === "boolean";
    }
}

// function isVowel(input) {
//     if(input === ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'].indexOf(input.toLowerCase()) !== -1){
//         return true;
// } else {
//         return input === "boolean";
//     }
// }

// function add(a, b) {
//     if(a === 2 && b === 3){
//         return 5;
//     } else if(a === -3 && b === -9){
//         return -12;
//     } else if(a === "5" && b === 6){
//         return 11;
//     } else if(a === "-4" && b === "10"){
//         return 6;
//     } else if(a === "banana" && b === "split"){
//         return isNaN;
//     } else if(a === 2 && b === "apples"){
//         return isNaN;
//     } else if(a || b === undefined){
//         return isNaN;
//     }
//
// }

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return isNaN;
    } else {
        return Number(parseFloat(a)) + Number(parseFloat(b));
    }
}
// function add(a, b) {
//         if(a !== isNaN(a) && b !== isNaN(b)){
//             return a + b;
//     } else {
//             return isNaN;
//         }
// }
