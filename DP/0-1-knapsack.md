First try to indentify that the problem is solved by dp or recursion

first try to identity the problem is solved by dp or recursion

Choice and Optimal (solution)

in recursion try to find out the least valid input (Base condition)

like changing in values length and value
and return value for the base condition

and try to write choice diagram like what happen if we added the value and changing in values

we have choice to add the weight and not add the weight - one condition

or else just skip if condition is not satisfied - second condition

recursion-> memoization -> top down approach

next memoization

first try to create the matrix of the size of value that changes x and y axis like lenght and weight of the bag

for example n->n+1 and w->w+1 matrix of t[n+1][w+1]

at first fill with -1

then add a check like if t[n][w]!=-1 then return the value at t[n][w]

then we can add the value after computing the t[n][w]=max(of the value weight)
