Stack is a linear data structure that follows the LIFO (Last In First Out) principle. 
Brute Force Approach:

Identify the problem: 
array-stack or heap(sort)

O(n2) - brute force

if there is something like O(n2) like 
i-0->n
j-0->i j++
j-i->0 j--
j-i->n j++
j-n->i j--

if j is like function of i there is better chance using a stack
j is depended on i then pakka stack is used


identify pattern