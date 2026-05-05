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

function groupAnagram(arr){
 
    let mapping=new Map()
    
    for(let i=0;i<arr.length;i++){
      let key=arr[i].split('').sort().join('')
      if(mapping.has(key)){
          mapping.get(key).push(arr[i])
      }else{
            mapping.set(key,[arr[i]])
      }
    }
    return [...mapping.values()]
    }
     
    function validParenthesis(s){
        let stack=[]
        let mapping=new Map()
        mapping.set('}','{')
        mapping.set(']','[')
        mapping.set(')','(')
        for(let i=0;i<s.length;i++){
        if(stack.length!=0 && stack.at(-1)==mapping.get(s[i])){
               stack.pop()
            }
            else{
                stack.push(s[i])
            }
        }
        return stack.length===0
        
    }

    function nextGreaterElement(arr) {
        const stack = [];
        const result = [];
    
        for (let i = arr.length - 1; i >= 0; i--) {
            while (stack.length !== 0 && stack.at(-1) <= arr[i]) {
                stack.pop();
            }
    
            if (stack.length === 0) {
                result[i] = -1;
            } else {
                result[i] = stack.at(-1);
            }
    
            stack.push(arr[i]);
        }
    
        return result;
    }

    function binarySearch(arr,target){
        let left=0
        let right=arr.length-1
        
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]===target){
                return mid
            }
            else if(arr[mid]<target){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
        return -1
    }
    
    

    function binarySearchInRotatedArray(arr,target){
        let left=0
        let right=arr.length-1
       
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]==target){
                return mid
            }
            
           if(arr[left]<=arr[mid]){
                if(arr[left]<=target && target<=arr[mid]){
                right=mid-1
            }
               else{
                   left=mid+1
               }
           }
           else
            { if(arr[mid]>=target && target<=arr[right]){
                            left=mid+1
    
            }
            else
            {
                right=mid-1
            }
            }
        }
        return -1
    }

    var dailyTemperatures = function(temperatures) {
        const stack=[]
        const result=new Array(temperatures.length).fill(0) 
    
        for(let i=0;i<temperatures.length;i++){
    
            while(stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]]){
                 const index= stack.pop()
                  result[index]=i-index
            }
            stack.push(i)
        }
        return result
    };

    var maxDepth = function(root) {
        if(root===null) return 0;
    
        const left_subtree = maxDepth(root.left)
      const right_subtree =  maxDepth(root.right)
    
        return 1+Math.max(left_subtree,right_subtree)
    };


    var levelOrder = function(root) {
        if(root===null) return [];
    
        const result_queue = [root]
         const result = []
    
         while(result_queue.length > 0){
            let queue_size=result_queue.length
            let curr_value=[]
            
             
    
            for(let i=0;i<queue_size;i++){
                let node=result_queue.shift()
                
                curr_value.push(node.val)
                if(node.left) result_queue.push(node.left)
            if(node.right) result_queue.push(node.right)
            }
    
            
             
             result.push(curr_value)
    
         }
    
         return result
    };