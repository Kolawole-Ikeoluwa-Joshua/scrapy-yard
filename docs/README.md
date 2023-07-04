# TypsScript 101

### Types

Types = Shortcuts or Labels that describe the different properties + functions that an object/value has in JS, every single object/value has a type.

##### examples of types

```
// primitive types
const today = new Date();
today.getMonth();

// object types
const person = {
    age: 20
};

class Color {}
const red = new Color();
```

##### usecase:

```
// interface defines structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

```

### Type Annotations and Inference - Variables

#### type inference

```
# variable declared on same line, typescript infers the type

const apples = 5;

```

#### type annotations

```
// type annotations with variables
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, fasle];

// classes
class Car {

}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// annotations around variables in functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
```

##### when to use annotations

- When a function returns the 'any' type

```
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); //JSON.parse() function returns any
console.log(coordinates);

// solution:
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);
```

- When we declare a variable on one line and initialize it later

```
let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// solution using type annotation:
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// solution 2:
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
```

- Variables whose type cannot be inferred correctly

```
let numbers = [-10, -1, 12];
let numberAboveZero = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) > 0) {
        numberAboveZero = numbers[i];
    }
}

// solution
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) > 0) {
        numberAboveZero = numbers[i];
    }
}
```

### Type Annotations and Inference - Functions

```
// simple type annotation
// type annotation on arguments
// type inference on return value/output
const add = (a: number, b: number) => {
    return a + b;
};

// type annotations for arguments & output
const subtract = (a: number, b: number): number => {
    return a - b;
};



// annotations for anonymous functions
const multiply = function(a: number, b: number): number {
    return a * b;
};



// void and never
const logger = (message: string): void => {
    console.log(message);
};

// when we never want to return a value - rare case
// const throwError = (message: string): never => {
//     throw new Error(message);
// }

// commonly used
const throwError = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }

    return message;
};



// destructuring with annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// retrive attributes you need from object
const logWeather = ({
    date,
    weather
}: {
    date: Date,
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
```

### Type Annotations and Inference - Objects

```
// annotations around objects
// object with function declaration
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// destructuring and annotations
const { age }: { age: number } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number, lng: number } } = profile;
```

### Typed Arrays

```
// Typed Arrays:
// are used anytime you need to represent a collection of records
// with some arbitrary sort order

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[] [] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // typescript throws argument type error

// Help with 'map'
carMakers.map(
    (car: string): string => {
        return car.toUpperCase();
    }
);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());

```

### Typed Tuples

```
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];
```
