// classes
class Vehicle {
    // fields in classes
    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// basic inheritance
/*class Car extends Vehicle {
    private drive(): void {
        console.log('vroom');
    }
    // class method modifiers
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }

}

const car = new Car();
car.startDrivingProcess();
*/