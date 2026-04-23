function groupComplement(arr){
    let result_arr=[]
    let mapping=new Set()
    let second_mapping=new Set()
    
    for(let i=0;i<arr.length;i++){
        let complement=0-arr[i]
        if(mapping.has(complement)&& !second_mapping.has(arr[i])){
            result_arr.push([complement,arr[i]])
            second_mapping.add(arr[i])
            second_mapping.add(complement)
        }
        mapping.add(arr[i])
    }
    
    return result_arr;
}
