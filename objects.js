// 1. Write a JavaScript program to list the properties of a JavaScript object.

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

keys = Object.keys(student);

for (let index = 0; index < keys.length; index++) {
  const element = keys[index];
  console.log(element);
}

// 2.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

delete student.rollno;
console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const studentLength = Object.keys(student).length;
console.log(studentLength);

// 4. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let index = 0; index < library.length; index++) {
  const KeysArr = Object.keys(library[index]);
  for (let i = 0; i < KeysArr.length; i++) {
    const element = KeysArr[i];
    console.log(library[index][element]);
  }
}

// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data:
// dog
// Expected Output:
// ["d", "do", "dog", "o", "og", "g"]

const text = "eli";
const subset = [];

for (let index = 0; index < text.length; index++) {
  for (let i = index + 1; i <= text.length; i++) {
    subset.push(text.slice(index, i));
  }
}

console.log(subset);

// 10. Write a JavaScript program to sort an array of JavaScript objects.

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

// Function to sort keys in an object
function sortObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((sortedObj, key) => {
      sortedObj[key] = obj[key];
      return sortedObj;
    }, {});
}

for (var i = 0; i < library.length; i++) {
  library[i] = sortObjectKeys(library[i]);
}

console.log(library);

// 11. Write a JavaScript function to print all the methods in a JavaScript object.

const returnMethods = (arr = {}) => {
  const members = Object.getOwnPropertyNames(arr);
  const methods = members.filter((method) => {
    return typeof arr[method] === "function";
  });
  return methods;
};
console.log(returnMethods(Array.prototype));
// 12. Write a JavaScript function to parse an URL.
const url1 = "http://example.com/path/index.html?message=hello&who=world";

function parseUrl(url1) {
  const newurl = new URL(url1);
  try {
    return newurl.protocol === "http:" || newurl.protocol === "https:";
  } catch (error) {
    return false;
  }
}

console.log(parseUrl(url1));

// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
const obj = {
  ownedProperty: "owned property",
};

const parentObj = {
  inheritedProperty: "inherited property",
};

Object.setPrototypeOf(obj, parentObj);

function allPropertyNames(obj) {
  const propertyNames = [];
  let currentObj = obj;
  while (currentObj) {
    propertyNames.push(...Object.getOwnPropertyNames(currentObj)); // Returns the names of the own properties of an object
    currentObj = Object.getPrototypeOf(currentObj); // returns the prototype of an object(inherited properties)
  }
  return propertyNames;
}

console.log(allPropertyNames(obj));

// 14. Write a JavaScript function to retrieve all the values of an object's properties.
var person = {
  name: "eliud muriithi", //string
  age: 25,
  marks: [51, 78, 60],
};

function objValues(obj) {
  const values = [];

  for (const key in obj) {
    values.push(obj[key]);
  }
}

objValues(person);

// 15 Write a JavaScript function to convert an object into a list of `[key, value]` pairs

const fullName = {
  fName: "Eliud",
  sirName: "Muriith",
};

function objectToList(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

console.log(objectToList(fullName));

// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

var person = {
  name: "eliud muriithi", //string
  age: 25,
  marks: [51, 78, 60],
};

function reverseObject(person) {
  const reversedObject = {};
  for (const key in person) {
    // console.log(key);
    if (person.hasOwnProperty(key)) {
      console.log(person[key]);
      reversedObject[person[key]] = key;
    }
  }
  return reversedObject;
}

console.log(reverseObject(person));

// 17. Write a JavaScript function to check whether an object contains a given property.
var person = {
  name: "eliud muriithi", //string
  age: 25,
  marks: [51, 78, 60],
};

function hasKey(person, key) {
  return person != null && hasOwnProperty.call(person, key);
}
console.log(hasKey(person, "name"));
