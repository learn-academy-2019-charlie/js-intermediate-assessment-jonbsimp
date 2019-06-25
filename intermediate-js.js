// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const reverseArray = (arr) => arr.reverse()

console.log(reverseArray(originalArray) + '\n')

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type + '\n')

// Log the bell:
console.log(bicycle.gear[2] + '\n')

// Log the PSI:
console.log(bicycle.wheels.specs[2] + '\n')


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

const letterCounter = (str, letter) => {
	let count = 0
	str = str.toLowerCase()
	for (let i = 0; i<str.length;i++) {
		if (str.charAt(i) === letter) {
			count = count + 1 
		}
	}
	return count
}

console.log(letterCounter(ourString, 'l') + '\n')


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = (num) => {
	var newFib = [1,1]
	for(let i=2; i<10; i++){
		newFib[i] = newFib[i-2] + newFib[i-1]
	}
	return newFib
}
console.log(getFib(10) + '\n')


//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const oddChecker = (arr) => {
	let newArr = []
	for (let i=0; i<arr.length; i++) {
		if (typeof arr[i] === "number" && arr[i] % 2 !== 0) {
		newArr.push(i)
		}
	}
	return newArr
}

console.log(oddChecker(fullArr))
