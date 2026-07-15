//strategy pattern 
//defines a family of algorithm put them into seperate classess so that they can be changed at run time (this pattern hates inheritance )
// favour composition over inheritance
//client has strategy pattern abstract class (has a relationship) then for the abstarct classes we have mulitple concrete classes 
// whose concrete class object will be created those strategy will be called right
//keep it seperate what remains same
// solution to inheritance is not more inheritance
//composition favoured over inheritance
//code to interface not to coconcretion
//Follow DRY

interface Talking{
    talk(): void;
}

interface Moving{
    move(): void;
}

interface Flying{
    fly(): void;
}

class NormalTalk implements Talking{
    talk(): void {
        console.log("Normal talk");
    }
}

class NormalMove implements Moving{
    move(): void {
        console.log("Normal move");
    }
}

class NormalFly implements Flying{
    fly(): void {
        console.log("Normal fly");
    }
}

class Robot {
     talking: Talking;
     moving: Moving;
     flying: Flying;

    constructor(talking: Talking, moving: Moving, flying: Flying) {
        this.talking = talking;
        this.moving = moving;
        this.flying = flying;
    }

    walk():void{
        this.moving.move();
    }
    
    talk():void{
        this.talking.talk();
    }
    
    fly():void{
        this.flying.fly();
    }

    projections(): void {
        console.log("Robot projections");
    }
}

const robot = new Robot(new NormalTalk(), new NormalMove(), new NormalFly());
robot.projections();
robot.talk();
robot.walk();
robot.fly();
