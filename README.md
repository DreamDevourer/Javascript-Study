<h1 align="center">Javascript Fundamentals Study 📖</h1>

<p align="center">This repository is dedicated to my fundamental knowledge in modern ES6 Javascript. I intend to work on this repository monthly.</p>

<p align="center">
  <a href="./LICENSE">License</a>
</p>

<!-- <img src="./sample.svg" alt="Shell script sample made inside this repository."> -->

<p>In this repository I study the practical application of:</p>
<ul>
  <li>ES6 functions</li>
  <li>Types of numeric data (such as int and float)</li>
  <li>Strings Formatting</li>
  <li>ES6 Variables</li>
  <li>Mathematical operations</li>
  <li>Libraries, Frameworks and ES6 features</li>
  <li>Decision making (if, else)</li>
  <li>Repetitions (while, for)</li>
  <li>User-defined functions</li>
  <li>My knowledge of English and general JS usage.</li>
  <li>Advanced use cases</li>
</ul>

## 🗺 Directory Map

<ol>
<li><a href="#conversion">Conversion Scripts</a></li>
<li><a href="#math">Math Scripts</a></li>
<li><a href="#problemSolving">Problem Solving Scripts</a></li>
<li><a href="#string">String Based Scripts</a></li>
<li><a href="#web">Web Based Scripts</a></li>
</ol>

<h4 id="conversion">2. Conversion Scripts</h4>
<p>Scripts with focus on conversion operations, using part of practical application topics</p>

<h4 id="math">3. Math Scripts</h4>
<p>Mathematical operations scripts to calculate and/or give mathematical results.</p>

<h4 id="problemSolving">4. Problem Solving Scripts</h4>
<p>These scripts are daily general problem solving scripts, like an investment calculator, a salary bonus calculation, price per quantity, etc.</p>

<h4 id="string">5. String Based Scripts</h4>
<p>Simple and direct strings scripts with minimal interaction with the user.</p>

<h4 id="web">6. Web Based Scripts</h4>
<p>Simple and direct strings scripts with minimal interaction with the user.</p>

## 💡 Useful Snippets and study pieces

<p>Here are some useful snippets to use daily for boosting code efficiency. Every single snippet is coming from a study script that I made from this repository.</p>

<h3>Variable types</h3>
<p>The recommended way to use variables is to follow ES6 convention.</p>

```javascript

// Basic ways to declare variables
var oldVariable = "String";
let letVar = 10;
const constVar = true;

// Types
let str = "String";
let int = 10;
let float = 10.5;
let bool = true;
let obj = {};
let arr = [];

```

<h3>Print Methods</h3>
<p>In JS there are a couple ways to print variables, these are the basics.</p>

```javascript
const str = "String";

// Using Alert (Web Browsers)
alert(str);

// Using console.log (Node.js)
console.log(str);

```

<h3>If Statement</h3>
<p>Very often when you write code, you want to perform different actions for different decisions.</p>

```javascript
let time = 14;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

```

<h3>Switch Statement</h3>
<p>The switch statement is used to perform different actions based on different conditions.</p>

```javascript

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

```

<h3>For loop</h3>
<p>Loops can execute a block of code a number of times.</p>

```javascript

// Let Sample:

let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

```

```javascript

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

```

```javascript

// Var Sample:

var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10

```

<h3>For In loop</h3>
<p>The JavaScript for in statement loops through the properties of an Object</p>

```javascript

// Syntax:

for (key in object) {
  // code block to be executed
}

// Example:
const person = {fname:"Nick", lname:"Can", age:19};

let text = "";
for (let x in person) {
  text += person[x];
}

```

<h3>For Of loop</h3>
<p>The JavaScript for of statement loops through the values of an iterable object.</p>

```javascript

// Syntax:

for (variable of iterable) {
  // code block to be executed
}

// Example:
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

```

<h3>While Loop</h3>
<p>Loops can execute a block of code as long as a specified condition is true.</p>

```javascript

var i = 0;

while (i < 10) {
  text += "The number is " + i;
  i++;
}

```

<h3>Functions</h3>
<p>A JavaScript function is a block of code designed to perform a particular task.</p>

```javascript

let x = 10;
let y = 20;

myFunction(x, y);

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

```

<h3>Functions</h3>
<p>A JavaScript function is a block of code designed to perform a particular task.</p>

```javascript

let x = 10;
let y = 20;

myFunction(x, y);

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

```

<h3>Arrow Function</h3>
<p>Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.</p>

```javascript

// Normal function:
hello = function() {
  return "Hello World!";
}

// Arrow function
hello = () => {
  return "Hello World!";
}

// Other sample:
hello = (val) => "Hello " + val;

```

<h3>Class</h3>
<p>JavaScript Classes are templates for JavaScript Objects.</p>

```javascript

// Syntax:
class ClassName {
  constructor() { ... }
}

// Sample:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Using:
const person = new Person("Nick", 19);

```

<h3>Regular Expression</h3>
<p>A regular expression is a sequence of characters that forms a search pattern.</p>

```javascript

let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");

```

<h3>Try Catch (Errors)</h3>
<p>A regular expression is a sequence of characters that forms a search pattern.</p>

```javascript

// Syntax:
try {
  //Block of code to try
}
catch(err) {
  //Block of code to handle errors
}

// Sample:
try {
  throw "Error";
}
catch(err) {
  console.log(err);
}

```

## 📄 License

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

| Permissions | Restrictions | Conditions
| --- | --- | --- 
&check; Commercial Use | &times; Liability | &#x1f6c8; License and Copyright Notice
&check; Modification   | &times; Warranty | &#x1f6c8; State changes
&check; Distribution |  | &#x1f6c8; Disclose source
&check; Patent Use |  | &#x1f6c8; Same license
&check; Private Use
