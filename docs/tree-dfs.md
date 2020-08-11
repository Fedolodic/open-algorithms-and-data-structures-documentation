---
id: treeDFS
title: Tree DFS
---

## Strategy

Depth First Search (DFS) is a technique used to traverse a tree

Use recursion, or a stack for the iterative approach, to keep track of all previous, parent, nodes while traversing

First, start at the root of the tree, if the node is not a leaf then:

* Decide whether to process the current node now, pre-order, or between processing both children, in-order, or after processing both children, post-order
* Make two recursive calls passing both children of the current node to process them

---

## Identification

* You need to traverse a tree in-order, pre-order, or post-order
* You need to search for something where the node is close to a leaf

---

## Space-Time Complexity

Usually, problems can be solved in O(*n*)-time and O(*h*)-space, but we could have O(*n*)-space in the worst case if the given tree is a linked list

From a graph perspective, problems can be solved in O(*v* + *e*)-time, where *v* is the number of vertices, or nodes, in the graph, and *e* is the number of edges connecting those nodes

This is because we usually traverse every vertex, and on top of every vertex we iterate through the children nodes of that vertex and call the dfs() function. And, when we iterate through those children nodes, we're probably going to be using a *for* loop, and the length of that *for* loop will be however many children nodes we have, that is how many edges are coming out of the current node.  

In terms of space complexity, problems can be solved in O(*v*)-space, because in the worst case, when we're given a linked list, we would reach a point where we'd have *v* frames on the call stack  

---

## Common Problems

### Easy

* Binary Tree Path Sum
* Balanced Binary Tree

### Medium

* Sum Of All Path Numbers
* All Paths For A Sum
* Paths With Given Sequence
* Count Paths For A Sum
* Number Of Islands