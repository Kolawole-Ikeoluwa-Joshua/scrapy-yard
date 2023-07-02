# TypsScript 101
Types = Shortcuts or Labels that describe the different properties + functions that an object/value has in JS, every single object/value has a type.
##### examples of types
```
# primitive types
const today = new Date();
today.getMonth();

# object types
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

