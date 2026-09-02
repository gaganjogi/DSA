class Snake{
    constructor(public head_value:number,public tail_value:number){}
}

class Ladder {
  constructor(public down_value:number,public up_value:number) {}
}

class Board {
  public jumpMap: Map<number, number>;

  constructor(
    public size: number,
    public snakes: Snake[],
    public ladders: Ladder[]
  ) {
    this.jumpMap = new Map();
    for(let snake of snakes){
        this.jumpMap.set(snake.head_value,snake.tail_value)
    }
    for(let ladder of ladders)
        this.jumpMap.set(ladder.down_value,ladder.up_value)
    }

    getFinalPosition(cell:number):number{
      if(this.jumpMap.has(cell)){
          return this.jumpMap.get(cell)!
      }
      return cell
    }
    
}

class Dice {
    constructor(public count: number) {}

    private rollOneDice():number{
        return Math.floor(Math.random()*6)+1
    } 
    
    rollDice():number{
        let total=0
        for(let i=0;i<this.count;i++){
            total+=this.rollOneDice()
        }
        return total
    }
    
}

class Player{
    constructor(public name:string,public pos:number){}
    setPos(cell:number){
       return this.pos=cell
    }

}

class Game{
    constructor(public players:Player[],public board:Board,public dice:Dice){}

    playTurn(player: Player): void {
    const diceValue = this.dice.rollDice();
    const currentPos=player.pos+diceValue
    if(currentPos<=this.board.size){player.setPos(this.board.getFinalPosition(currentPos))}
  }

  startGame():Player{
 let currentPlayerIndex = 0;

   while(true){
    let player=this.players[currentPlayerIndex]
    this.playTurn(player)

    if(player.pos===this.board.size){
      return player
      }
      currentPlayerIndex++
    currentPlayerIndex=currentPlayerIndex%this.players.length
   }

  }
}






