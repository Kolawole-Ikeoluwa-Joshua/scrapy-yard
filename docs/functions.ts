
// Type Annotations and Inference - Functions

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
