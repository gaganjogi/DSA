Bubble sort
opposite of selection sort - it pushes large element to the last
in first at last there will largest element in an array

JS code:-
bubbleSort(arr) {
        // code here
        let n=arr.length
        for(let i=n-1;i>=0;i--){
            for(let j=0;j<i;j++){
                if(arr[j]>arr[j+1])
                {
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                }
            }
        }
        return arr
    }