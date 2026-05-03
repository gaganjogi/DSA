function newNode(val){
    return {val,next: null}
}

const first_node=newNode(3)
const second_node=newNode(4)
const third_node=newNode(5)

first_node.next=second_node
second_node.next=third_node

const list={head:first_node}
let current=list.head

while(current!=null){
    console.log(current.val)
    current=current.next
}


class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    addfirst(data){
        const new_node = new Node(data)
        new_node.next=this.head
        this.head=new_node
        this.size++
    }
    
    addlast(data){
        const new_node=new Node(data)
        
        if(!this.head){
            this.head=new_node
            return
        }
        let current=this.head
        
        while(current.next){
            current=current.next
        }
        current.next=new_node
        
    }
}