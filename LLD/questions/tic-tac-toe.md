class Cell{

    private value : 'X' | 'O' | null
    constructor(private row:number,private column:number){
        this.value=null
    }

    getCellValue(){
        return this.value
    }
    setCellValue(val:'X' | 'O'){
        if(this.value===null){
        this.value=val
        }
        
    }

    getRow():number{
        return this.row
    }

    getColumn():number{
        return this.column
    }
}

class Game{
    private status:'X_WINS' | 'O_WINS' | 'DRAW' | 'IN_PROGRESS'
    private grid:Cell[][]
    private currentTurn:'X'|'O'
    constructor(){
        this.status='IN_PROGRESS'
          this.grid=[]
          this.currentTurn='O'

          for(let i=0;i<3;i++){
            let currentRow:Cell[]=[]
            for(let j=0;j<3;j++){
                currentRow.push(new Cell(i,j))
            }
            this.grid.push(currentRow)
          }
    }

    getGrid():Cell[][]{
        return this.grid
    }
     getCurrentTurn():'X' | 'O'{
        return this.currentTurn
    }
    getStatus():'X_WINS' | 'O_WINS' | 'DRAW' | 'IN_PROGRESS'{
        return this.status
    }

    makeMove(row:number,column:number):string{
        if(this.grid[row][column].getCellValue()===null){
        this.grid[row][column].setCellValue(this.currentTurn)
         let result=this.checkWin()
         if(result){
            let player=this.currentTurn
            if(player==='X'){
                 this.status='X_WINS'
                 return 'X_WINS'
            }
            if(player==='O'){
                this.status='O_WINS'
                 return 'O_WINS'
            }
        }
    
        if(this.currentTurn==='X'){
            this.currentTurn='O'
        }
        else{
            this.currentTurn='X'
        }

         if(this.isBoardFull()){
           this.status='DRAW'
           return 'DRAW'
        }
        return `${this.currentTurn} moves to ${row} row ${column} column`
        }
        return `${row} row ${column} column is not empty`

    }
    
    private threeInRow(a:Cell[]):boolean{
         let i=0
 if(a[i].getCellValue()===a[i+1].getCellValue() && a[i+1].getCellValue()===a[i+2].getCellValue() && a[i].getCellValue()!=null){
            return true
        }
    return false
         }

     

        private checkWin():boolean{
    
            for(let j=0;j<3;j++){
                if(this.threeInRow(this.grid[j])){
                    return true
                }
        }
    

        for(let i=0;i<3;i++){
            let colCell:Cell[]=[]
            for(let j=0;j<3;j++){
                colCell.push(this.grid[j][i])
            }
            if(this.threeInRow(colCell)){
                return true
            }

        }


        if(this.threeInRow([this.grid[0][0],this.grid[1][1],this.grid[2][2]]))
        {
            return true
        }
        if(this.threeInRow([this.grid[0][2],this.grid[1][1],this.grid[2][0]]))
        {
            return true
        }
      

return false

       
    
    }

    private isBoardFull():boolean{

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(this.grid[i][j].getCellValue()==null){
                    return false
                }
            }
        }
        return true
    }
}


let game=new Game()
console.log(game.getGrid())