Introduction to binary trees
 Binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

These are like hierarchical data structures where each node can have at most two children.

Terminologies:-
Root
Children
Parent
Leaf
Ancestor
Descendant

Types:-
Full Binary Tree - Every node has 0 or 2 children
Complete Binary Tree - All levels are completely filled except possibly the last level and the last level has all keys as left as possible
Perfect Binary Tree - All internal nodes have two children and all leaf nodes are at the same level
Balanced Binary Tree - The height of the tree is O(log n) where n is the number of nodes (Binary Search Tree)
Degenerate Binary Tree - Each parent node has only one child node


for iterative 
balanced binary tree- height (left) subtree - height (right) subtree <= 1
use of flag to change the direction like zig zag traversal

for boundary traversal first left boundary without leaf node + leaf nodes+ right boundary without leaf node (reverse order)