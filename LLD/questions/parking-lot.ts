// enum VehicleType { MOTORCYCLE, CAR, TRUCK }
// enum SpotType { SMALL, MEDIUM, LARGE }

// const vehicleSizeRank: Record<VehicleType, number> = {
//   [VehicleType.MOTORCYCLE]: 0,
//   [VehicleType.CAR]: 1,
//   [VehicleType.TRUCK]: 2,
// };
// const spotSizeRank: Record<SpotType, number> = {
//   [SpotType.SMALL]: 0,
//   [SpotType.MEDIUM]: 1,
//   [SpotType.LARGE]: 2,
// };

// class Vehicle {
//   constructor(public licensePlate: string, public type: VehicleType) {}
// }

// class Spot {
//   constructor(
//     public spotId: string,
//     public spotType: SpotType,
//     public isAvailable: boolean = true,
//     public vehicle: Vehicle | null = null
//   ) {}

//   canFit(vehicleType: VehicleType): boolean {
//     return spotSizeRank[this.spotType] >= vehicleSizeRank[vehicleType];
//   }

//   occupy(vehicle: Vehicle): void {
//     this.isAvailable = false;
//     this.vehicle = vehicle;
//   }

//   vacate(): void {
//     this.isAvailable = true;
//     this.vehicle = null;
//   }
// }

// class Ticket {
//   public ticketId: string;

//   constructor(
//     public vehicle: Vehicle,
//     public spot: Spot,
//     public entryTime: Date,
//     public exitTime: Date | null = null
//   ) {
//     this.ticketId = crypto.randomUUID();
//   }

//   calculateFee(): number {
//     if (!this.exitTime) throw new Error("Vehicle has not exited yet");
//     const durationMs = this.exitTime.getTime() - this.entryTime.getTime();
//     const durationHours = durationMs / (1000 * 60 * 60);
//     return durationHours * 20;
//   }
// }

// class Floor {
//   constructor(public floorId: string, public spots: Spot[]) {}

//   findAvailableSpot(vehicleType: VehicleType): Spot | null {
//     for (const spot of this.spots) {
//       if (spot.isAvailable && spot.canFit(vehicleType)) return spot;
//     }
//     return null;
//   }
// }

// class ParkingLot {
//   private static instance: ParkingLot;
//   private floors: Floor[] = [];

//   private constructor() {}

//   static getInstance(): ParkingLot {
//     if (ParkingLot.instance === null || ParkingLot.instance === undefined) {
//       ParkingLot.instance = new ParkingLot();
//     }
//     return ParkingLot.instance;
//   }

//   initialize(floors: Floor[]): void {
//     this.floors = floors;
//   }

//   findAvailableSpot(vehicleType: VehicleType): Spot | null {
//     for (const floor of this.floors) {
//       const spot = floor.findAvailableSpot(vehicleType);
//       if (spot) return spot;
//     }
//     return null;
//   }

//   parkVehicle(vehicle: Vehicle): Ticket | null {
//     const spot = this.findAvailableSpot(vehicle.type);
//     if (!spot) return null;
//     spot.occupy(vehicle);
//     return new Ticket(vehicle, spot, new Date());
//   }

//   unparkVehicle(ticket: Ticket): number {
//     if (ticket.exitTime) throw new Error("Ticket already closed");
//     ticket.exitTime = new Date();
//     const fee = ticket.calculateFee();
//     ticket.spot.vacate();
//     return fee;
//   }
// }

class Vehicle{
  constructor(private vehicle_number:number,private type:'MOTORCYCLE'| 'CAR'| 'TRUCK'){}

getVehicleNumber():number{
  return this.vehicle_number
  }

  getVehicleType(){
   return this.type
  }  

}


class Spot{

  private vehicle:Vehicle | null
  constructor(private isAvailable:boolean,private size:'SMALL' | 'MEDIUM' | 'LARGE',private spot_id:number){
    this.vehicle=null
  }

  getSpotStatus():boolean{
    return this.isAvailable
  }
  
  getSpotSize(){
    return this.size
  }

  setSpotStatus(status:boolean):void{
    this.isAvailable=status
  }

  parkVehicle(vehicle:Vehicle):void{
    this.vehicle= vehicle
    this.setSpotStatus(false)
  }

  unpark():void{
    this.vehicle=null
    this.setSpotStatus(true)
  }

  getVehicle():Vehicle | null{
  return this.vehicle

  }
 canFit(type:'MOTORCYCLE' | 'CAR'|'TRUCK'):boolean{
   if(type === 'MOTORCYCLE'){
    return this.size==='SMALL' || this.size ==='MEDIUM' || this.size==='LARGE'
   }
   else if(type ==='CAR'){
    return this.size ==='MEDIUM' || this.size==='LARGE'
   }
   else
   {
    return this.size==='LARGE'
   }
 }


}


class Floor{
  constructor(private floor_id:number,private spots:Spot[]){ }

   findAvailableSpot(vehicle:Vehicle):Spot | null{
    for(let spot of this.spots){
      let fit=spot.canFit(vehicle.getVehicleType())
        if(spot.getSpotStatus() && fit){
          return spot
        }
    }
    return null
  }

  getFloorId(){
    return this.floor_id
  }
  getSpots(){
    return this.spots
  }
}

class Ticket{
   private static nextId: number = 1
  private ticket_id:number
  private exitTime:Date | null
  constructor(private vehicle:Vehicle,private spot:Spot,private entryTime:Date){
    this.ticket_id=Ticket.nextId
    Ticket.nextId+=1
    this.exitTime=null
  }

  getTicketId(){
    return this.ticket_id
  }
  getEntryTime(){
    return this.entryTime
  }
  getVehicle(){
    return this.vehicle
  }
  getExitTime(){
    return this.exitTime
  }

  getSpot(){
    return this.spot
  }

  closeTicket():Date{
    return this.exitTime=new Date()
  }
  calculateFee():number{
    if(this.exitTime===null){
      return 0
    }
   let time= Math.abs(this.exitTime.getTime()-this.entryTime.getTime())/(1000*60*60)
   return time*10
  }

}
class ParkingLot{
  constructor(private floors:Floor[]){}

  getFloors(){
    return this.floors
  }
  
  findAvailableSpot(vehicle:Vehicle): Spot| null{
    for(let floor of this.floors){
      let spot=floor.findAvailableSpot(vehicle)
        if(spot) return spot
      }
     return null
    }

    parkVehicle(vehicle:Vehicle):Ticket | null{
      let spot=this.findAvailableSpot(vehicle)
      if(!spot) return null
      spot.parkVehicle(vehicle)
      return new Ticket(vehicle,spot,new Date())
    }

    unParkVehicle(ticket:Ticket){
      let vacate_spot=ticket.getSpot()
      vacate_spot.unpark()
      ticket.closeTicket()
     return ticket.calculateFee()
    }
  }
