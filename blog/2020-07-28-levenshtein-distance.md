---
id: levenshtein_distance
title: Levenshtein Distance Code Structure
author: J. David Martinez
author_title: Open DS&A Founder
author_url: https://github.com/Fedolodic
author_image_url: https://avatars1.githubusercontent.com/u/12787345?s=460&u=cfe07b63a9e857c72fdac84b425244c9f5c013e0&v=4
tags: [code structure, levenshtein distance]
---

I believe the code for the levenshtein minimum edit distance is much more readable in this fashion, albeit not following PEP 8 style guide and using two extra variables.

Solution 1:

```python
def levenshteinDistance(str1, str2):
	# Create empty string row
    edits_table = [[x for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]
	
	# Create empty string column
	for row in range(1, len(str2) + 1):
		edits_table[row][0] = edits_table[row - 1][0] + 1
	
	# Main algorithm
	for row in range(1, len(str2) + 1):
		for col in range(1, len(str1) + 1):
			# Extra variables to make work being done in string more clear
			i = row
			j = col
			if str2[i - 1] == str1[j - 1]:
				edits_table[row][col] = edits_table[row - 1][col - 1]
			else:
				edits_table[row][col] = 1 + min(edits_table[row - 1][col], edits_table[row - 1][col - 1], edits_table[row][col - 1])
	return edits_table[-1][-1]
```

Solution 2:

```python
def levenshteinDistance(str1, str2):
	# Find small and big strings
    small = str1 if len(str1) < len(str2) else str2
	big = str1 if len(str1) >= len(str2) else str2
	
	# Create even and odd edit table rows
	even_edits = [x for x in range(len(small) + 1)]
	odd_edits = [None for x in range(len(small) + 1)]
	
	# Main algorithm
	for row in range(1, len(big) + 1):
		# Extra variable to make value of beginning of current edits row clear
		i = row
		
		# Swap current and previous edit rows
		if row % 2 == 1:
			current_edits = odd_edits
			previous_edits = even_edits
		else:
			current_edits = even_edits
			previous_edits = odd_edits
		current_edits[0] = i
		
		for col in range(1, len(small) + 1):
			# Extra variable to make work being done in string more clear
			j = col
			
			if big[i - 1] == small[j - 1]:
				current_edits[col] = previous_edits[col - 1]
			else:
				current_edits[col] = 1 + min(current_edits[col - 1], previous_edits[col - 1], previous_edits[col])
	return even_edits[-1] if len(big) % 2 == 0 else odd_edits[-1]
```

I hope this helps! I learned so much solving this problem 🧠.