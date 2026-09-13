
class Locations{
    private vehicles:Vehicle[]
    constructor(private id:number,private name:string){
        this.vehicles=[]
    }

    getId():number{
        return this.id
    }
    getName():string{
        return this.name
    }

    addVehicle(vehicle:Vehicle):void{
      this.vehicles.push(vehicle)
    }

    getVehicles():Vehicle[]{
        return this.vehicles
    }

}


class Vehicle{
    constructor(private id:number,private type:'ECONOMY' | 'SUV' | 'LUXURY',private dailyRate:number,private location:Locations){}

    getId():number{
        return this.id
    }
    getType(){
        return this.type
    }
    getRate(){
        return this.dailyRate
    }
    getLocation(){
        return this.location
    }
}

class Customer{
    // attributes
    constructor(private name:string,private id:number){}
//  responsibilities
    getName(){
      return this.name
    }
  
    getId(){
        return this.id
    }
  
}

class Reservation {
    private status: 'CONFIRMED' | 'CANCELLED'

    constructor(private customer: Customer, private vehicle: Vehicle, private start_date: Date, private end_date: Date) {
        this.status = 'CONFIRMED'
    }

    cancel(): void {
        this.status = 'CANCELLED'
    }

    noOverLap(new_start_date: Date, new_end_date: Date): boolean {
        if (new_start_date < this.end_date && new_end_date > this.start_date) {
            return false
        }
        return true
    }

    getCustomer(): Customer {
        return this.customer
    }
    getVehicle(): Vehicle {
        return this.vehicle
    }
    getStartDate(): Date {
        return this.start_date
    }
    getEndDate(): Date {
        return this.end_date
    }
    getStatus(): 'CONFIRMED' | 'CANCELLED' {
        return this.status
    }
}


class Rental{
    private pickUpDate:Date
    private returnDate:Date | null
    constructor(private reservation:Reservation){
        this.pickUpDate=new Date()
        this.returnDate=null
    }

    returnVehicle():void{
        this.returnDate=new Date()
    }
    getReservation():Reservation{
        return this.reservation
    }


    getPickUpDate():Date{
        return this.pickUpDate
    }

    getReturnDate():Date | null{
        return this.returnDate
    }
}


class Bill{
    private static nextId: number = 1
    private late_amount:number
    private damage_amount:number
    private id:number
    constructor(private rental_details:Rental){
       this.id=Bill.nextId
       Bill.nextId+=1
        this.damage_amount=0
        this.late_amount=0
    }

    calculateFee(): number {
    let is_returned = this.rental_details.getReturnDate()
    if (is_returned) {
        let days = is_returned.getTime() - this.rental_details.getPickUpDate().getTime()
        days = Math.abs(days) / (1000 * 60 * 60 * 24)
        let rate = this.rental_details.getReservation().getVehicle().getRate()
        return (days * rate) + this.damage_amount + this.late_amount
    }
    return 0
}
    addLateAmount(amount:number){
        this.late_amount+=amount
    }
    addDamageAmount(amount:number){
        this.damage_amount+=amount
    }
    // late amount fee and damage it should be added by rental or we can intial have them initilaised them to zero right

}



class RentalSystem{
    private locations:Locations[]
    private reservations:Reservation[]
    constructor(){
        this.locations=[]
        this.reservations=[]
    }

    addLocation(location:Locations):void{
        this.locations.push(location)
    }

    
    private isVehicleAvailable(vehicle:Vehicle,start_date:Date,end_date:Date):boolean{

        for (let res of this.reservations){
            if(!res.noOverLap(start_date,end_date) && res.getVehicle()===vehicle){
                return false
            }
        }
       return true
        
    }
    searchAvailableVehicles(location:Locations,start_date:Date,end_date:Date):Vehicle[]{
        let vehicle_list=location.getVehicles()
        let serach_result:Vehicle[]=[]
        for(let vehicle of vehicle_list){
           let res=this.isVehicleAvailable(vehicle,start_date,end_date)
            if(res){
                 serach_result.push(vehicle)
            }
        }
        return serach_result 
    }
    createReservation(customer:Customer,vehicle:Vehicle,start_date:Date,end_date:Date):Reservation | null{
        if(!this.isVehicleAvailable(vehicle,start_date,end_date))
        {
return null
        }
        let reservation=new Reservation( customer,vehicle,start_date,end_date)
        this.reservations.push(reservation)
        return reservation
    }

    startRental(reservation:Reservation):Rental| null{
        let reservation_status=reservation.getStatus()
        if(reservation_status==='CANCELLED'){
            return null
        }
        let rental=new Rental(reservation)
        return rental
    }

    completeRental(rental:Rental):Bill| null{
        let is_already_returned=rental.getReturnDate()
        if(is_already_returned!=null){
            return null
        }
        rental.returnVehicle()
        return new Bill(rental)
    }
}