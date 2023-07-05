// Interfaces
// writing reusable code using typescript interfaces

// we can use a single interface to describe different properties of different objects

//singe interface
interface Reportable {
    summary(): string;
}

// two different objects
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

// different objects can interact with different functions
const printSummary = (item: Reportable): void => {
    console.log(item.summary());

};

printSummary(oldCivic);
printSummary(drink);