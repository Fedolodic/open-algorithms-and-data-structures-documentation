---
id: twoP
title: Two Pointers
---

## Strategy

Create two pointers that will run over your data until one, or both, pointers reach a certain condition

Useful when searching pairs, such as, comparing each index value in an array with its other indices

In some cases, you will use a uniform directional traversal approach, meaning, one pointer will start at the beginning of your data, and the other pointer will be *n*-offset. i.e. One will be the fast-runner, and the other the slow-runner, and both will move in the same direction. Used in [sliding window pattern][1] and [fast and slow pointers pattern][2]

![alt text][twoPU]

[twoPU]: /img/Two-P-U-Optimized.gif 'Uniform!'

In other cases, you will use an opposite directional traversal approach, meaning, both pointers will start in the middle of your data, and move away from each other. Or, one pointer will start at the beginning of your data, the other at the end, and both pointers will move toward each other until they meet, or a certain condition is reached

![alt text][twoPOM] ![alt text][twoPOE]

[twoPOM]: /img/Two-P-O-M-Optimized.gif 'Opposite Middle!'
[twoPOE]: /img/Two-P-O-E-Optimized.gif 'Opposite End!'

[1]: sliding_window.md
[2]: fast_and_slow_pointers.md

---

## Identification

* You're given a sorted array, or linked list
    * You need to find a pair, triplet, or subarray of elements that will satisfy certain constraints
* You need to match a target value, or remove duplicates
 
---

## Space-Time Complexity

Usually, problems can be solved in O(*n*)-time and O(1), or O(*n*)-space

---

## Common Problems

### Easy

* Squaring A Sorted Array
* Pair With Target Sum (Two Number Sum)
* Remove Duplicates
* Remove Element (Remove Kth Node From End)
* Valid Palindrome (Palindrome Check)
* Intersection Of Two Arrays

### Medium

* Triplets That Sum To Zero
* Comparing Strings That Contain Backspaces
* Triplets That Sum Close To A Target (Three Number Sum)
* Triplets With Smaller Sum
* Subarrays With Product Less Than A Target (Smallest Difference)
* Dutch National Flag Problem

### Hard

* Trapping Rain Water (Water Area)