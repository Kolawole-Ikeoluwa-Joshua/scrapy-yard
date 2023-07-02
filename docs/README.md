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

### Type Annotations and Inference

##### type annotations

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

// annotations around functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};


// when to use annotations
// 1) A function returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); //JSON.parse() function returns any
console.log(coordinates);
```

##### type inference

```
# variable declared on same line, typescript guesses the type

const apples = 5;

```
