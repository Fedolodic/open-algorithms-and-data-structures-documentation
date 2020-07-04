---
id: node_depths
title: Node Depths Code Structure
author: J. David Martinez
author_title: Open DS&A Founder
author_url: https://github.com/Fedolodic
author_image_url: https://avatars1.githubusercontent.com/u/12787345?s=460&u=cfe07b63a9e857c72fdac84b425244c9f5c013e0&v=4
tags: [code structure, node depths]
---

Honestly, I think that the node depths code should look like this:

```python
def nodeDepths(root):
	sumOfDepths = 0
	stack = [{
		"node": root,
		"depth": 0
	}]
	
	while len(stack) > 0:
		obj = stack.pop()
		node = obj["node"]
		depth = obj["depth"]
		#node, depth = obj["node"], obj["depth"]
		
		if node is None:
			continue
			
		sumOfDepths += depth
		
		stack.append({"node": node.left, "depth": depth + 1})
		stack.append({"node": node.right, "depth": depth + 1})
	return sumOfDepths

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

It's much more appealing to the eyes, and it shows the different parts of the algorithm.