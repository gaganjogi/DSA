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


// while(curre)