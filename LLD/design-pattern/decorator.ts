///decorator pattern
//decorator pattern is a structural design pattern that allows you to dynamically add new functionality to objects by placing them inside special wrapper objects that contain the new functionality.
// in this abstract decorator class will be having is a and has a relationship with character

// Key phrase for interviews: "Favors composition over inheritance" — instead of making FireCharacter extends Character, WaterCharacter extends Character, FireWaterCharacter extends Character (combinatorial explosion), you wrap objects at runtime.
// Base Decorator	CharacterDecorator	Implements Character, holds a reference to a Character, delegates calls to it

interface Character {
    name: string;
  getSpecialAbility():string
}

class ConcreteCharacter implements Character {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
  getSpecialAbility(): string {
    return `${this.name} has`;
  }
}

class CharacterDecorator implements Character {
  protected character: Character;   
  name: string;
  
  constructor(character: Character) {
    this.character = character;
    this.name = character.name;
  }
  
  getSpecialAbility(): string {
    return this.character.getSpecialAbility();
  }
}

class FireDecorator extends CharacterDecorator {
  constructor(character: Character) {
    super(character);
  }
  
  getSpecialAbility(): string {
    return super.getSpecialAbility()+' with fire';
  }
}
class WaterDecorator extends CharacterDecorator {
  constructor(character: Character) {
    super(character);
  }
  
  getSpecialAbility(): string {
    return super.getSpecialAbility()+' with water';
  }
}

// let character = new ConcreteCharacter();
// console.log(character.getSpecialAbility());

// let fireDecorator = new FireDecorator(character);
// console.log(fireDecorator.getSpecialAbility());

let waterDecorator = new WaterDecorator(new FireDecorator(new CharacterDecorator(new ConcreteCharacter('John'))));
console.log(waterDecorator.getSpecialAbility());
console.log(waterDecorator.name);
