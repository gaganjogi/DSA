class Elevator{
  private direction: "UP" | "DOWN" | "IDLE"
  constructor(private floor:number,private door:boolean){this.direction='IDLE'}



  public goToFloor(floor:number):void{
   if(floor>0 && !this.door){
 let res= Math.abs(this.floor-floor)
    if(this.floor<floor){
      this.direction='UP'
      for(let i=0;i<res;i++)
      {this.goUp()}
      }
    else{
      this.direction='DOWN'
      for(let i=0;i<res;i++){this.goDown()}}   
   }
   if(this.floor===floor){this.direction='IDLE'}
  }


  private goUp():void{
   this.floor+=1
  }

  private goDown():void{
this.floor-=1
  }
 public isDoorOpen():boolean{
    return this.door
  }
  public currentFloor():number{
    return this.floor
  }
  public openDoor():void{
     this.door=true
  }
  public closeDoor():void{
     this.door=false
  }

  public getDirection():string{
     return this.direction
  }
}


class CarButton{
  constructor(private elevator:Elevator,private floor:number){}
  press():void{
     this.elevator.goToFloor(this.floor)
  }
}

class HallwayButton{
  constructor(private elevatorController:ElevatorManager,private floor:number,private direction:'UP' | 'DOWN'){}
  press():void{
      this.elevatorController.dispatch(this.floor)
  }
}

class Floor{
  constructor(private floor_no:number,private upButton:HallwayButton| null,private downButton:HallwayButton|null){}

  getFloor():number{
    return this.floor_no
  }
  getUpButton():HallwayButton| null{
    return this.upButton
  }
  getDownButton():HallwayButton|null{
    return this.downButton
  }
}
class Building{
  constructor(private floors:Floor[],private elevators:Elevator[]){}
 
    getFloors():Floor[]{
     return this.floors 
    }
    getElevators():Elevator[]{
      return this.elevators
    }
    getMaxFloor():number{
      let maximum=Number.MIN_SAFE_INTEGER
      this.getFloors().forEach((floor)=>{
        let count=floor.getFloor()
        maximum=Math.max(count,maximum)
      })
      return maximum
    }
  }

  class ElevatorManager{
    constructor(private building:Building){}
 
    findNearestElevator(floor:number):Elevator{
      let nearest_distance=Number.MAX_SAFE_INTEGER
      let nearest_elevator:Elevator=this.building.getElevators()[0]
     this.building.getElevators().forEach((elevator)=>{
        let least=Math.abs(elevator.currentFloor()-floor)
        if(least<nearest_distance){
          nearest_distance=least
          nearest_elevator=elevator
        }
      })
      
      return nearest_elevator
  }

  dispatch(floor:number):void{
    let elevator=this.findNearestElevator(floor)
    elevator.goToFloor(floor)
  }

  }
let ele=new Elevator(1,false)
ele.goToFloor(10)
console.log(ele.getDirection())
console.log(ele.currentFloor())