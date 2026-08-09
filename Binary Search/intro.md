If in questiuon it is given something like sorted array or something like that think it is of binary search

if array is not sorted then think of binary search on answer

order agnostic binary search
order of the sorted array is not given
first check first and last element in an array asc arr[mid]<target low=mid+1
desc arr[mid]>target low=mid+1

first and last occurrence of an element in an array

first try to find the first_index
first we get the element then we search for the left side of the array for the first occurrence
then we search for the right side of the array for the last occurrence
first_index=mid
high=mid-1 for first occurrence
last_index=mid
low=mid+1 for last occurrence


let diff=xor & (-xor) (two's complement to find out rightmost bit)

try to find the minimum in rotated sorted array

if(arr[mid]>arr[high])
{
    low=mid+1
}
else
{
    high=mid
}

and one more thing when we think that array is getting out of bound use %n(lenght of the array)


find key in infinite sorted array

so to find this the main problem was where actually the end element will come so that we can check in bound right..

to fix this we can take start=0 and end=1 and then we can check if target is greater than end element then we can do 
start=end
end=end*2
and when doing this if we get end element greater than target then we can apply binary search in this range