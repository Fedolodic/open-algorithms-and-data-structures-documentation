---
id: slidingW
title: Sliding Window
---

## Strategy

Create a window over some subset of your data, this window will run over your data, capturing different portions of it

In some cases, the window size will remain fixed

![alt text][slidingWF]

[slidingWF]: /img/Sliding-W-F-Optimized.gif 'Fixed!'

In other cases, the window size will be dynamic, meaning it will grow or shrink

![alt texto][slidingWD]

[slidingWD]: /img/Sliding-W-D-Optimized.gif 'Dynamic!'

---

## Identification

* You're given a linked list, an array, or a string
    * You need to find the longest/shortest, or *k*-sized substring, subarray, or target value
    * You need to compute a running average
* The word contiguous is used in the problem statement
 
---

## Space-Time Complexity

Usually, problems can be solved in O(*n*)-time and O(1)-space

---
    
## Common Problems

### Easy

* Maximum Sum Subarray Of Size K
* Smallest Subarray With A Given Sum

### Medium

* Longest Substring With K Distinct Characters
* Fruits Into Baskets
* Longest Substring Without Repeating Characters (Longest Substring Without Duplicates)
* Minimum Size Subarray
* Longest Repeating Character Replacement
* Permutation In String

### Hard

* String Anagrams (Group Anagrams)
* No-Repeat Substring
* Longest Substring With Same Letters After Replacement
* Longest Subarray With Ones After Replacement
* Substring With Concatenation Of All Words
* Minimum Window Substring (Smallest Substring Containing)