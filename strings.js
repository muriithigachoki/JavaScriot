//1: valueof()

//2: sup()
// The sup() method of String values wraps the string in a <sup></sup> element,
// which causes this string to be displayed as superscript.
// example
const fullName = "Eliud Muriithi Gachoki";
console.log(fullName.sup()); //<sup>Eliud Muriithi Gachoki</sup>

//3: sub()
// The sub() method of String values wraps the string in a <sub></sub> element,
// which causes this string to be displayed as subscript.
// example
console.log(fullName.sub()); //<sub>Eliud Muriithi Gachoki</sub>

// 4: slice()
// The slice() method of String values extracts a section of this string without including the charater at endIndex and returns it as a new string,
//  without modifying the original string.  examples
console.log(fullName.slice(0, 7)); //Eliud M

// 5: split()
// The split() method of String values takes a pattern and divides this string into an ordered list
//  of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const str = "hello";
const splitedstr = str.split("");
console.log(splitedstr); // [ 'h', 'e', 'l', 'l', 'o' ]

// 6: repeat() method create and returns a new string which contains the specified number of copies of the string concatinated together.
// examle
const greatings = "Hello";
console.log(`${greatings.repeat(2)} Eliud`); //HelloHello Eliud
// 7: replace() takes two argument the first is the substring to be replaced and the second is the string to be place in place of the first one.
const myName = "John Smith";
const replacedName = myName.replace("John", "Eliud");
console.log(replacedName); // eliud Smith

//8: write a program in javascript to check whether a word ia palindrom
const username = "muM";

function reversingString(str) {
  const splitedstr = str.split("");
  const reversedStr = splitedstr.reverse().join("");
  // the reverse() method return the reversd array
  // The join() method of Array instances creates and returns a new string by concatenating all of the elements in the array
  if (str === reversedStr) {
    console.log(`${str} is a palindrom`);
  } else {
    console.log(`${str} is not a palindrom`);
  }
}

reversingString(username.toLowerCase());
