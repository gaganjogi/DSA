enum VehicleType { MOTORCYCLE, CAR, TRUCK }
enum SpotType { SMALL, MEDIUM, LARGE }

const vehicleSizeRank: Record<VehicleType, number> = {
  [VehicleType.MOTORCYCLE]: 0,
  [VehicleType.CAR]: 1,
  [VehicleType.TRUCK]: 2,
};
const spotSizeRank: Record<SpotType, number> = {
  [SpotType.SMALL]: 0,
  [SpotType.MEDIUM]: 1,
  [SpotType.LARGE]: 2,
};

class Vehicle {
  constructor(public licensePlate: string, public type: VehicleType) {}
}

class Spot {
  constructor(
    public spotId: string,
    public spotType: SpotType,
    public isAvailable: boolean = true,
    public vehicle: Vehicle | null = null
  ) {}

  canFit(vehicleType: VehicleType): boolean {
    return spotSizeRank[this.spotType] >= vehicleSizeRank[vehicleType];
  }

  occupy(vehicle: Vehicle): void {
    this.isAvailable = false;
    this.vehicle = vehicle;
  }

  vacate(): void {
    this.isAvailable = true;
    this.vehicle = null;
  }
}

class Ticket {
  public ticketId: string;

  constructor(
    public vehicle: Vehicle,
    public spot: Spot,
    public entryTime: Date,
    public exitTime: Date | null = null
  ) {
    this.ticketId = generateUUID();
  }

  calculateFee(): number {
    if (!this.exitTime) throw new Error("Vehicle has not exited yet");
    const durationMs = this.exitTime.getTime() - this.entryTime.getTime();
    const durationHours = durationMs / (1000 * 60 * 60);
    return durationHours * 20;
  }
}

class Floor {
  constructor(public floorId: string, public spots: Spot[]) {}

  findAvailableSpot(vehicleType: VehicleType): Spot | null {
    for (const spot of this.spots) {
      if (spot.isAvailable && spot.canFit(vehicleType)) return spot;
    }
    return null;
  }
}

class ParkingLot {
  constructor(public floors: Floor[]) {}

  findAvailableSpot(vehicleType: VehicleType): Spot | null {
    for (const floor of this.floors) {
      const spot = floor.findAvailableSpot(vehicleType);
      if (spot) return spot;
    }
    return null;
  }

  parkVehicle(vehicle: Vehicle): Ticket | null {
    const spot = this.findAvailableSpot(vehicle.type);
    if (!spot) return null;
    spot.occupy(vehicle);
    return new Ticket(vehicle, spot, new Date());
  }

  unparkVehicle(ticket: Ticket): number {
    ticket.exitTime = new Date();
    const fee = ticket.calculateFee();
    ticket.spot.vacate();
    return fee;
  }
}