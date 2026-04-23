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
        if(stack.at(-1)==mapping.get(s[i]) && stack.length!=0){
               stack.pop()
            }
            else{
                stack.push(s[i])
            }
        }
        return stack.length===0
        
    }