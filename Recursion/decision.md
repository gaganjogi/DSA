four approaches to solve recursion

recursive tree input output method (if we find out decision)

base condition -> induction -> hypothesis (make input small)

when decision is there - only recursive tree 
or making input smaller - bc- induction - hypothesis
choice diagram

induction -> base condition -> hypothesis (IBH method)
for every recursive problem we first need to write hypothesis

induction step very important 
then base condition
so print 1-> n means print(n)
for print(n-1) console.log(n) 1 -> n-1

if(n==1) return 1 - base condition smallest valid input
print(n-1) hypothesis
console.log(n) induction


if decision is there then only input output method 
if not try to make the input smaller

simple problems:- induction base condition hypothesis method

medium - recursive tree input output method

hard - choice diagram


in one function we can do things depends upon how actually we write induction logic and hypothesis

for input and output method 
if it print all subsets subsequences power set

IBH comes when there in tree or linked list question 

induction step is very important 

hypothesis will check n-1

in recursive tree will check till last

but not in IBH if it works for n-1 means fine

whatever we need to do in that step you do in induction step

hypothesis is our function 

root ka height and apply it for smaller input for left and right

and in induction what we get like height of max tree +1 we need to add the existing layer also right

first check for hypothesis-> induction -> base condition no root so null