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
   if(input === undefined || typeof input === "boolean" || input == null ){
       return "Hello, World!";
   }else{
       return "Hello, " + input + "!";
   }
}



