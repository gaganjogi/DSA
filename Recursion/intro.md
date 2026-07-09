Recursion:- 
why input get shorter due to some decisions taken during solving the problem

input is automatically reduced

how to identify the problem is solved by decision space

choice + decision -> then recursion

if we design recursive tree the code is cake walk

based on the choice then decision will be made

primary -decision
secondary - smaller input

recursive tree (representation of decisions taken)

input output method

number of branches is equal to number of choices made
op->in  op:"" input : "ab"
/  \
/   \            
op1 smaller input   op2 smaller input
/ \
/  \
op1' smaller input' op2' smaller input'

we get answer when we get the input as empty then least node is answer


2 steps to solve recursive tree

design recursive tree
fuck the problem (write the code)

if you want to compare values inside set convert them to string and compare using json.stringify and easily convert into again array using array.from(result_arr,(item)=>json.parse(item))