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

    var invertTree = function(root) {
    
        if(root===null) return root;
        let result_queue=[root]
        while(result_queue.length>0){
            let result_length=result_queue.length
            for(let i=0;i<result_length;i++){
                let node = result_queue.shift()
    
                const temp1=node.left
                node.left=node.right
                node.right=temp1
     if(node.left)
     { 
     result_queue.push(node.left)
     }
    if(node.right)
     {
     result_queue.push(node.right)  
     }
            }
        
        }
    return root
    };
    var diameterOfBinaryTree = function(root) {
        let max_diameter=0
        
            function nodeLengthCheck(node){
                if(node ===null) return 0;
                const left_maxsublength=nodeLengthCheck(node.left)
                const right_maxsublength= nodeLengthCheck(node.right)
                max_diameter=Math.max(max_diameter,left_maxsublength+right_maxsublength)
        
                return 1+(Math.max(left_maxsublength,right_maxsublength))
            }
            nodeLengthCheck(root)
           return max_diameter;
        };


        var isBalanced = function(root) {
            if(!root) return true
        
            function lengthCheck(node){
        
        
            if (node ===null) return 0;
        
            const left_length=lengthCheck(node.left)
            const right_length=lengthCheck(node.right)
             
          if (left_length === false || right_length === false) return false;
            if(Math.abs(left_length-right_length)>=2){
                return false
            }
        
            return 1+Math.max(left_length,right_length);
            }
           return lengthCheck(root)==false?  false :  true  
        
        
        };

        var lengthOfLongestSubstring = function(s) {

            let container= new Set()
            let left=0
            let longest_max_length=0
            for(let right=0;right<s.length;right++){
                  while(container.has(s[right])){
                       container.delete(s[left])
                       left=left+1
                  }
                  container.add(s[right])
                  longest_max_length=Math.max(longest_max_length,right-left+1)
                
            }
            return longest_max_length
        };

        var hasCycle = function(head) {
            let slow=head
            let fast=head
        
            while(fast!==null && fast.next!==null){
                slow=slow.next
                fast=fast.next.next
        
                if(slow==fast) return true
            }
        
            return false
        };