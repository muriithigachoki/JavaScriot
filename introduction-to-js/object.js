let obj = {};
obj[1] = "One";
obj["1"] = "String One";

console.log(obj[1]); // String One
console.log(obj["1"]); // String One
console.log(obj[1] === obj["1"]); // true

// The value 1 when passed to Object using the square bracket is converted into a string '1'
//  and initialized to the value "One" on line two.
//  on line three velue with key 1 which is same as '1' is reassinged with "string One"
// the obj[1] is equal to obj["1"]
