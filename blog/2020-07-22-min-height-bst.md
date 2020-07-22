---
id: min_height_bst
title: Min Height BST Code Structure
author: J. David Martinez
author_title: Open DS&A Founder
author_url: https://github.com/Fedolodic
author_image_url: https://avatars1.githubusercontent.com/u/12787345?s=460&u=cfe07b63a9e857c72fdac84b425244c9f5c013e0&v=4
tags: [code structure, min height bst]
---

I think separating out the logic for all 3 solutions makes the code more understandable, even though it's not following the PEP 8 style guide.

Solution 1:

```python
def minHeightBst(array):
	return constructMinHeightBST(array, None, 0, len(array) - 1)
	
def constructMinHeightBST(array, bst, start_index, end_index):
	# Once start index reaches end index
	if start_index > end_index:
		return
	
	middle_index = (start_index + end_index) // 2
	value_to_add = array[middle_index]

	if bst is None:
		bst = BST(value_to_add)
	else:
		bst.insert(value_to_add)
	
	constructMinHeightBST(array, bst, start_index, middle_index - 1)
	constructMinHeightBST(array, bst, middle_index + 1, end_index)
	return bst
	
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)
```

Solution 2:

```python
def minHeightBst(array):
	return constructMinHeightBST(array, None, 0, len(array) - 1)
	
def constructMinHeightBST(array, bst, start_index, end_index):
	# Once start index reaches end index
	if start_index > end_index:
		return
	
	middle_index = (start_index + end_index) // 2
	newBstNode = BST(array[middle_index])
	
	if bst is None:
		bst = newBstNode
	else:
		if array[middle_index] < bst.value:
			bst.left = newBstNode
			bst = bst.left
		else:
			bst.right = newBstNode
			bst = bst.right
		
	constructMinHeightBST(array, bst, start_index, middle_index - 1)
	constructMinHeightBST(array, bst, middle_index + 1, end_index)
	return bst


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

Solution 3:

```python
def minHeightBst(array):
	return constructMinHeightBST(array, 0, len(array) - 1)
	
def constructMinHeightBST(array, start_index, end_index):
	# Once start index reaches end index
	if start_index > end_index:
		return None
	
	middle_index = (start_index + end_index) // 2
	bst = BST(array[middle_index])

	bst.left = constructMinHeightBST(array, start_index, middle_index - 1)
	bst.right = constructMinHeightBST(array, middle_index + 1, end_index)
	return bst

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

I hope this helps! I want to keep best practices in the documentation, thus this seperate blog post 👍.