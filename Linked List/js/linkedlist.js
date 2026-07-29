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

   deleteHead(){
let op=this.head

    op=this.head.next
    this.head=null
    this.head=op
    return this


}





deleteTail()
{
    let tail=this.head
 
if(tail==null || tail.next===null) 
{
    this.head=null
    return null
}

    while(tail.next.next!=null){
        tail=tail.next
    }

    tail.next=null

return this
}

deleteKthElement(k)
{
    let element=this.head
    let prev_element=null
    if(element==null)
    {
        return null
    }
    if(k==1) {
        return this.deleteHead()
        }

       for(let i=1;i<k;i++)
       {

       prev_element=element
        element=element.next
       }
       prev_element.next=element.next
       element.next=null
 return this

}




}

let arr=[3,4,5,6,7]
let linkedlist=new LinkedList()

for(let i of arr){
    linkedlist.append(i)
}

/// arr to linked list 