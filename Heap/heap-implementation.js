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