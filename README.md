# Countingup
Countingup is a 10x math library. It provides a Counter class to count up and down with customizations. There are also math utilities that you can use with it.
## Installation
Using npm:
```sh
npm install countingup
```

In Node.js
```javascript
const countingup = require('countingup')
```

## Counter class
The ``Counter`` class provides a tool to count numbers.

Initializing
```javascript
const Counter = countingup.Counter
const myCounter = new Counter()
```

Counting
```javascript
myCounter.count()
console.log(myCounter.getCurrentNumber()) // 1
```

Resetting
```javascript
myCounter.reset()
console.log(myCounter.getCurrentNumber()) // 0
```

### Bonus Features
Customizing the Increment
```javascript
myCounter.count()
console.log(myCounter.getCurrentNumber()) // 1
myCounter.count(3)
console.log(myCounter.getCurrentNumber()) // 4
```

Customizing the Direction

This allows you to change the direction so it counts down and subtracts
```javascript
myCounter.reset()
myCounter.count(5)
console.log(myCounter.getCurrentNumber()) // 5
myCounter.count(5, countingup.Counter.DIRECTION.REVERSE) // 0
```
By default it will be forwards (countingup.Counter.DIRECTION.FORWARDS)

Customizing the Starting Number

```javascript
const myCounter2 = new Counter(4)
console.log(myCounter2.getCurrentNumber()) // 4
myCounter2.reset(3)
console.log(myCounter2.getCurrentNumber()) // 3
```

## Math Utilities
Countingup includes a suite of math functions that power the underlying logic and can be used for standalone calculations. These utilities handle both numbers and numeric strings.

### Basic Operations
```js
const { add, subtract, multiply, divide } = require("countingup")

console.log(add(5, 10))       // 15
console.log(subtract(20, 5))  // 15
console.log(multiply(3, 4))   // 12
console.log(divide(100, 4))   // 25
```

### Advanced Operations
```js
const { modulo, pow } = require("countingup")

console.log(modulo(10, 3)) // 1
console.log(pow(2, 3))    // 8
```