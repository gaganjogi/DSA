Heap identification

Kth element
smallest/largest

types:- min heap and max heap

remember this important
k+smallest - max_heap
k+largest - min_heap


simple solution in heap - sorting 
time complexity O(nlogk)

maximum heap at top we have maximum element
minimum heap at top we have minimum element

mainly we are thinking of kth element

mainly we try to fill the heap and if the heap size try to be greater than k then pop at first and move next till to all element in an array and at least return the top element in the heap

kthSmallest(arr, k) {
        arr.sort((a,b)=>a-b)
        return arr[k-1]
    }

    only sort nlogk not n log n


