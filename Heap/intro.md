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



heap is nothing but should be complete binary tree(all levels filled and next level left to right)

heap dsa need to satisfy two conditions
1. structural property - complete binary tree (almost)
2. heap property - parent should be greater than children (max heap) or parent should be smaller than children (min heap)

binary tree to array
when deleting the value
we first swap the last element with the root and then heapify the array


to get the parent index in the heap we use (i-1)/2
to get the left child index in the heap we use 2*i+1
to get the right child index in the heap we use 2*i+2