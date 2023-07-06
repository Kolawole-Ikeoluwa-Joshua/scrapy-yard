// classes
class Vehicle {
    protected honk(): void {
        console.log('beep');
    }
}

// basic inheritance
class Car extends Vehicle {
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