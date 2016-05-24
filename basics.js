//This is a general practice file for JavaScript Basics. Please follow the instructions thoughout the sheet. Do not uncomment the commented out spaces.

// Create the variable arr and assign it an array with the following list of numbers 12, 42, 36, 51, 96

var arr = [12,42,36,51,96];

// Create a function called findTwo that takes in the arr array and returns the value at index 2.

var findTwo = function(arr) {
  return arr[2];
};

//Create a function called pusher that takes in an array and a number and positions the number at the end of the array. Return the new array.

var pusher = function(arr, num) {
  var newArr = arr.push(num);
  return newArr;
};

//Create a function called upFront that takes in an array and a number and positions the number in beginning of the array. Return the new array.

var upFront = function(arr, num) {
  var newArr = arr.unshift(num);
  return newArr;
};

//Create a function called remover that takes in an array and removes the value at the end of the array. Return the new array.

var remover = function(arr) {
  var newArr = arr.pop();
  return newArr;
};

//Create a function called noMore that takes in an array and a number and positions the number in beginning of the array. Return the new array.

var noMore = function(arr) {
  var newArr = arr.shift();
  return newArr;
};

//Create a function called copyCat that takes in an array, copies, and returns the second and third index values.

var copyCat = function(arr) {
  var newArr = arr.slice(2,4);
  return newArr;
};

//Create a function called chopIt that takes in an array and two numbers, then inserts the two numbers into the array after the second index value and deletes the original third index value.

var chopIt = function(arr, num1, num2) {
  var newArr = arr.splice(2, 1, num1, num2);
  return newArr;
};

// Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.

var sumIt = function(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values.
//Hint: Use the modulus operator

var evenOdd = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[1]%2 === 0) {
      newArr.push("even");
    }
    else {
      newArr.push("odd");
    }
  }
  return newArr;
};

// Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
//Hint: Use the map method

var timesTen = function(arr) {
  var newArr = arr.map(function(val){
    return val * 10;
  });
  return newArr;
};

//Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.

var animal = {
  species: "monkey",
  name: "bobo",
  age: 12,
  gender: "male",
  favoriteFood: "cheerios",
  speech: function() {
    return "moo";
  }
};

//Create a function called findAge that takes in an object and returns the age key value.

var findAge = function(obj) {
  return obj.age;
};

//Create a function called getKeys that takes in an object and returns all of the key names (not values!).

var getKeys = function(obj) {
  return Object.keys(obj);
};

//Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.

var changeName = function(obj, name) {
  obj.name = name;
  return obj;
};

//Create a function called speechMaker that takes in an object and returns the response from calling the speech method.

var speechMaker = function(obj) {
  return obj.speech();
};

//Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.

var addKey = function(obj) {
  obj.bedtime = "10pm";
  return obj;
};

//Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".

var keyLoop = function(obj) {
  for (var prop in obj) {
    if (prop === "monkey") {
      return "There's a monkey!";
    }
  }
  return "There's no monkey here!";
};

//Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.

var cars = [{
  make: "Honda",
  model: "Civic",
  year: 1999
},{
  make: "Mercury",
  model: "Tracer",
  year: 1990
},{
  make: "Chevy",
  model: "Volt",
  year: 2005
}];

//Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.

var findModels = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].model);
  }
  return newArr;
};
