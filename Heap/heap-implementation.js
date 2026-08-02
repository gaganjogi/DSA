class MinHeap{
    constructor(compareFuntion=(a,b)=>a-b){
        this.heap=[]
        this.compare=compareFuntion
    }

    parent(i){return Math.floor((i-1)/2)}
    leftChild(i){return 2*i+1}
    rigthChild(i){return 2*i+2}

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    push(value){
        this.heap.push(value)
        let i=this.heap.length-1

        while(i>0 && this.compare(this.heap[i],this.heap[this.parent(i)]) < 0)
        {
            this.swap(i,this.parent(i))
            i=this.parent(i)
        }
    }

    bubbleDown(index){
        let n=this.heap.length
        while(true){
            let smallest=index
            let left=this.leftChild(index)
            let right=this.rigthChild(index)
            if(left<n && this.compare(this.heap[left],this.heap[smallest]) < 0){smallest=left}
            if(right<n && this.compare(this.heap[right],this.heap[smallest]) < 0){smallest=right}
            if(smallest===index) break
            this.swap(index,smallest)
            index=smallest
        }
    }

    pop(){
        if(this.heap.length==0) return undefined
        let min=this.heap[0]
        let last=this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=last
            this.bubbleDown(0)
        }
        return min
    }

    peek(){
        return this.heap[0]
    }
}

class MaxHeap{
constructor(compareFunction=(a,b)=>b-a){
    this.heap=[]
    this.compare=compareFunction
}

parent(index)
{
    return Math.floor((index-1)/2)
}

leftChild(index)
{
    return 2*index+1
}

rightChild(index)
{
    return 2*index+2
}

swap(i,j)
{
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
}

push(value)
{
   this.heap.push(value)
   let i=this.heap.length-1

   while(i>0 &&  this.compare(this.heap[i],this.heap[this.parent(i)])<0){
    this.swap(i,this.parent(i))
    i=this.parent(i)
   }

}

downFunction(index)
{
   let n=this.heap.length
   while(true)
   {
      let largest=index
      let left=this.leftChild(index)
      let right=this.rightChild(index)
      if(left<n && this.compare(this.heap[left],this.heap[largest])<0){largest=left}
      if(right<n && this.compare(this.heap[right],this.heap[largest])<0){largest=right}

      if(largest===index)break

      this.swap(largest,index)
      index=largest
   }
}

pop()
{
    if(this.heap.length===0){return undefined}

    let max_value=this.heap[0]
    let last =this.heap.pop()

    if(this.heap.length>0)
    {
       this.heap[0]=last
       this.downFunction(0)
    }

    return max_value
}

peek()
{
    return this.heap[0]
}

}

let heap=new MaxHeap()

heap.push(3)
heap.push(9)
heap.push(10)
heap.push(20)
heap.push(30)
console.log(heap)


heap.pop()
heap.pop()
heap.push(100)
console.log('popped heap',heap)
console.log(heap.peek())