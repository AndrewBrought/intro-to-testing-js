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
        if(typeof input === 5){
            return true;
        } else if(parseFloat(input) === 5){
            return true;
        } else {
            return false
        }
}




