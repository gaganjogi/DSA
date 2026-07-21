any thing pre computation wrok is there is sliding window

mainly if any repititive computation is there is sliding window as we need to optimise this solution

identify

array  or string
subarrray or substring
largest maximum or minimum
k - window size


types
fixed and variables sized

largest or smallest window(variable sized)
subjected to a condition

question like largest subbarray sum
largest sum in k window size 
or vice versa like largest subarray having max sum

while calculating do not modify the maximum_sum or anything take extra variable to compute and store the value in maximum_sum


maxSubarraySum(arr, k) {
        let sum=0;
        let maximum_sum=0;
        
        for(let i=0,j=0;j<arr.length;j++){
            if(j-i+1>k){
                sum-=arr[i]
                i++
            }
            sum+=arr[j]
            maximum_sum=Math.max(maximum_sum,sum)
        }
        return maximum_sum
        
    } in this sum is the window' sum

    (j-i+1) - window size increment end pointer untill j<size of an array


    aditya bro 
    use while loop
    and j should be less than arr.length
    add the arr[j] to sum

    Yes, that formula is correct — n - k + 1 gives you the number of possible windows of size k in an array of length n, assuming k ≤ n.


mainly things in sliding window first slightly extend the window size using j and then do calculation part and then resize the window size using i

i variable size sliding window we will get given k value as sum or some other thing ok


<!-- while(j<n){
    if(condition<k){
        increment
    }
    if(condition===k){
    cal
    increment
    }
    if(cond>k){
        while(cond>k){
            remove
            i++(increment)
        }
    }
} -->


in variable size sliding window it is difficult to maintain the size of the window so we need to find condition for expanding and shrinking the window(>k) also we need to write as this is not like fixed k
as we are not able to maintain the size of the window there will be case where condition will be greater than k right
so untill condition should be less than k so we try to remove elements from start using i pointer
and increment i pointer untill condition becomes less than k

That's four pops to fix a single violation caused by adding one new element. An if would only do one pop and then move on with an invalid window still in place. A while keeps popping until the invariant (countd <= k) is actually restored. 

this is the reason of the while loop in condition > k

in variale size try to find the condition first and try to represent in mathematical form