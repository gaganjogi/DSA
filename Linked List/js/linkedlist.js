// get length
class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
                this.length=0

    }

    append(val){
        let node = new Node(val)
        if(!this.head){
            this.head=node
            this.tail=node
        }
        else{
this.tail.next=node
this.tail=node
        }
this.length++
        return this
    }

     search(value){ //// search an element

        let traveral=this.head
    
        while(traveral.next){
            if(traveral.data==value){
return true
            }
            traveral=traveral.next
        }
        return false
    }


}

let arr=[3,4,5,6,7]
let linkedlist=new LinkedList()

for(let i of arr){
    linkedlist.append(i)
}

/// arr to linked list 