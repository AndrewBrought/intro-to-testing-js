// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("isNumeric", function() {
    it("should be a defined function", function () {
        expect(typeof isNumeric).toBe('function');
    });
    it("should be a defined function", function() {
        expect(typeof isNumeric()).toBe("boolean");
    });
    it("should return true when passed the number 5", function () {
        expect(isNumeric(5)).toBe(true);
    });
    it("should return false when passed the string 'Jim Henson'", function () {
        expect(isNumeric("Jim Henson")).toBe(false);
    });
    it("should return false when passed the array of [1,2,3]", function () {
        expect(isNumeric([1,2,3])).toBe(false);
    });
    it("should return false when passed an object", function () {
        expect(isNumeric({name: "Carole Baskin", occupation: "Big Cat Enthusiast"})).toBe(false);
    });
    it("should return false when passed no arguments", function () {
        expect(isNumeric()).toBe(false);
    });
});

describe('sayHello', function() {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, " + input + "!"', function () {
        expect(sayHello("input")).toBe("Hello, " + "input" + "!" );
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed "true"', function (){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed "false"', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should never return "undefined" when called', function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should never return "null" when called', function () {
        expect(sayHello()).not.toBe(null);
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a "boolean" value', function () {
        expect(typeof isFive(5)).toBe("boolean");
    });
    it("should return true when passed the string '5'", function () {
        expect(isFive(parseFloat("5"))).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return true when passed the number 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with "Infinity"', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false with boolean input "false"', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false with boolean input "true"', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return "false" when called "undefined"', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel(true)).toBe('boolean');
        expect(typeof isVowel("Bob")).toBe('boolean');
    });
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if passed "true" or "false"', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return "false" when called "undefined"', function() {
        expect(isVowel()).toBe(false);
    });

});

describe('add', function () {
    it('should be a function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return 5 when passed 2, 3', function () {
       expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed -3, -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed "5", 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed "-4", "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed "banana", "split"', function () {
        expect(add("banana", "split")).toBe(isNaN);
    });
    it('should return NaN when passed 2, "apples"', function () {
        expect(add(2, "apples")).toBe(isNaN);
    });
    it('should return isNaN when called "undefined"', function() {
        expect(add()).toBe(isNaN);
    });
});