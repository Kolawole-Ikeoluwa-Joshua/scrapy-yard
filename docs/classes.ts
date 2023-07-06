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

// fields with inheritance
class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom');
    }
    // class method modifiers
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }

}

const car = new Car(4, 'red');
car.startDrivingProcess();