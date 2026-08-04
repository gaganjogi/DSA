Selection sort
first think like this what is selection means
Selecting the minimum element and placing it at the beginning(means swap)
let us assume first element as minimum and traverse the array with j pointer from i+1 to n-1 to find the minimum element
after that we swap with the i th element from 0 to n-1


JS Code:-

selectionSort(arr) {
        // your code here
        for(let i=0;i<arr.length;i++){
            let min=i
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]<arr[min])
                {
                    min=j
                }
            }
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }


    Selection sort pushed min to front in first iteration we will get the smallest element of the array