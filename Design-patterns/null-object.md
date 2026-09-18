Null object pattern is used when as function is like 

function getUser(id) : User | null{
    if (id === null) {
        return null;
    }
    return { id, name: "John" };
}

if there is chances of paramter can be null we can not make everytime add a null check right so we came up with this 

NULL OBJECT PATTERN

replaces null return type by NULL object
and no need to put the null check (if condition)
null object reflects do nothing or default behavour

like this we make one simple interface and make one real object and null object

interface Vehicle{
    seatCapacity(): number;
    fuelTankCapacity():number;
}

class Car implements Vehicle{
    seatCapacity(): number {
        return 4;
    }
    fuelTankCapacity():number{
        return 50;
    }
}

class NullVehicle implements Vehicle{
    seatCapacity(): number {
        return 0;
    }
    fuelTankCapacity():number{
        return 0;
    }
}



function vehicleFactory(id: string): Vehicle {
    if (!id) {
        return new NullVehicle();
    }
    return new Car();
}

function main() {
    const vehicle = vehicleFactory(null);
    console.log(vehicle.seatCapacity());
    console.log(vehicle.fuelTankCapacity());
}