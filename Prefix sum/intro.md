

prefix sum is a technique that can be used to solve problems related to subarrays.

like sum

for(let i=1;i<arr.length;i++){
    arr[i]=arr[i]+arr[i-1]
}

first problem to find the equal sum partition
let arr=[3,4,-2,5,8,20,-10,8]
let prefix_sum=arr[0]
let total_sum=0
for(let i of arr)
{
    total_sum+=i
}
for(let i=1;i<arr.length-1;i++)
{prefix_sum+=arr[i]
    if(prefix_sum===(total_sum-prefix_sum))
    {
        console.log('equal sum present',prefix_sum,total_sum,i)
    }
    
    console.log('prefix_sum',prefix_sum,i)
}
console.log('no match')

first find total sum and compare with the prefix sum till 0 to i