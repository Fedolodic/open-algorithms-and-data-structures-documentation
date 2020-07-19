---
id: smallest_difference
title: Smallest Difference Code Structure
author: J. David Martinez
author_title: Open DS&A Founder
author_url: https://github.com/Fedolodic
author_image_url: https://avatars1.githubusercontent.com/u/12787345?s=460&u=cfe07b63a9e857c72fdac84b425244c9f5c013e0&v=4
tags: [code structure, smallest difference]
---

Here, I think the smallest difference code is more readable but, it might not be following best practices:

```python
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
	arrayTwo.sort()
	ptrOne = 0
	ptrTwo = 0
	smallest = float("inf")
	current_difference = float("inf")

	while ptrOne < len(arrayOne) and ptrTwo < len(arrayTwo):
		x = arrayOne[ptrOne]
		y = arrayTwo[ptrTwo]

		if x < y:
			current_difference = y - x
			ptrOne += 1
		elif y < x:
			current_difference = x - y
			ptrTwo += 1
		else:
			return [x, y]

		if current_difference < smallest:
			smallest = current_difference
			smallest_pair = [x, y]
	return smallest_pair
```

This is just my honest opinion 🙂.