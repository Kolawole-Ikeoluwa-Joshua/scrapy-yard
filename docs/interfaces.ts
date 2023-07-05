// Interfaces
/*
Writing reusablecode using typescript interfaces:

1. CREATE FUNCTIONS THAT ACCEPT ARGUMENTS THAT ARE TYPED WITH INTERFACES
2. OBJECTS/CLASSES CAN DECIDE TO IMPLEMENT A GIVEN INTERFACE TO WORK
WITH A FUNCTION

*/

//singe interface
interface Reportable {
    summary(): string;
}

// function takes interface type as an argument
const printSummary = (item: Reportable): void => {
    console.log(item.summary());

};

// we can use a single interface to describe different properties of different objects
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
printSummary(oldCivic);
printSummary(drink);