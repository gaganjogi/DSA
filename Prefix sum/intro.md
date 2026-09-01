

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

two pointers only between two points in an array
sliding window when we required in a block

kadane algorithm only to get the maximum sub array sum

in maximum subarray count having count k first use prefix sum
and then check if the difference of prefix sum - k is present in map 
then get the value of that key and add that to the count
and then set to the map

if not set the key with prefix_sum and increment count of that

arr=[1,2,3,4,5]
if u want sum from index(2,3) then do prefix_sum[3] - prefix_sum[1] why because
prefix_sum[3] = 1+2+3+4 = 10
prefix_sum[1] = 1+2 = 3
so 10-3 = 7 which is 3+4 = 7
3 is having from 0,1,2,3
1 is having from 0,1 
remaining (2,3)
so 3-1 = 2 which is 2,3



