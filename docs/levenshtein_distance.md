---
id: levenshteinD
title: Levenshtein Distance
---

## Problem

Write a function that finds the minimum number of edit operations that we can perform on one string to turn it into another string

The three edit operations are either an insertion of a letter, a deletion of a letter, or a substitution of a letter for another letter

---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def levenshteinDistance(str1, str2):
    edits = [[x for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]
    for i in range(1, len(str2) + 1):
        edits[i][0] = edits[i - 1][0] + 1
    for i in range(1, len(str2) + 1):
        for j in range(1, len(str1) + 1):
            if str2[i - 1] == str1[j - 1]:
                edits[i][j] = edits[i - 1][j - 1]
            else:
                edits[i][j] = 1 + min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])
    return edits[-1][-1]
```

</TabItem>
<TabItem value="s2">

```python
def levenshteinDistance(str1, str2):
    small = str1 if len(str1) < len(str2) else str2
    big = str1 if len(str1) >= len(str2) else str2
    evenEdits = [x for x in range(len(small) + 1)]
    oddEdits = [None for x in range(len(small) + 1)]
    for i in range(1, len(big) + 1):
        if i % 2 == 1:
            currentEdits = oddEdits
            previousEdits = evenEdits
        else:
            currentEdits = evenEdits
            previousEdits = oddEdits
        currentEdits[0] = i
        for j in range(1, len(small) + 1):
            if big[i - 1] == small[j - 1]:
                currentEdits[j] = previousEdits[j - 1]
            else:
                currentEdits[j] = 1 + min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1])
    return evenEdits[-1] if len(big) % 2 == 0 else oddEdits[-1]
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}
​
exports.levenshteinDistance = levenshteinDistance;
```

</TabItem>
<TabItem value="s2">

```javascript
function levenshteinDistance(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}
​
exports.levenshteinDistance = levenshteinDistance;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function levenshteinDistance(str1: string, str2: string) {
  const edits: number[][] = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row: number[] = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
```

</TabItem>
<TabItem value="s2">

```typescript
export function levenshteinDistance(str1: string, str2: string) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits: number[] = [];
  const oddEdits: number[] = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static int levenshteinDistance(String str1, String str2) {
    int[][] edits = new int[str2.length() + 1][str1.length() + 1];
    for (int i = 0; i < str2.length() + 1; i++) {
      for (int j = 0; j < str1.length() + 1; j++) {
        edits[i][j] = j;
      }
      edits[i][0] = i;
    }
    for (int i = 1; i < str2.length() + 1; i++) {
      for (int j = 1; j < str1.length() + 1; j++) {
        if (str2.charAt(i - 1) == str1.charAt(j - 1)) {
          edits[i][j] = edits[i - 1][j - 1];
        } else {
          edits[i][j] =
              1 + Math.min(edits[i - 1][j - 1], Math.min(edits[i - 1][j], edits[i][j - 1]));
        }
      }
    }
    return edits[str2.length()][str1.length()];
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static int levenshteinDistance(String str1, String str2) {
    String small = str1.length() < str2.length() ? str1 : str2;
    String big = str1.length() >= str2.length() ? str1 : str2;
    int[] evenEdits = new int[small.length() + 1];
    int[] oddEdits = new int[small.length() + 1];
    for (int j = 0; j < small.length() + 1; j++) {
      evenEdits[j] = j;
    }
​
    int[] currentEdits;
    int[] previousEdits;
    for (int i = 1; i < big.length() + 1; i++) {
      if (i % 2 == 1) {
        currentEdits = oddEdits;
        previousEdits = evenEdits;
      } else {
        currentEdits = evenEdits;
        previousEdits = oddEdits;
      }
      currentEdits[0] = i;
      for (int j = 1; j < small.length() + 1; j++) {
        if (big.charAt(i - 1) == small.charAt(j - 1)) {
          currentEdits[j] = previousEdits[j - 1];
        } else {
          currentEdits[j] =
              1 + Math.min(previousEdits[j - 1], Math.min(previousEdits[j], currentEdits[j - 1]));
        }
      }
    }
    return big.length() % 2 == 0 ? evenEdits[small.length()] : oddEdits[small.length()];
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```cpp
#include <vector>
using namespace std;
​
int levenshteinDistance(string str1, string str2) {
  vector<vector<int>> edits(str2.length() + 1,
                            vector<int>(str1.length() + 1, 0));
  for (int i = 0; i < str2.length() + 1; i++) {
    for (int j = 0; j < str1.length() + 1; j++) {
      edits[i][j] = j;
    }
    edits[i][0] = i;
  }
  for (int i = 1; i < str2.length() + 1; i++) {
    for (int j = 1; j < str1.length() + 1; j++) {
      if (str2[i - 1] == str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
            1 + min(edits[i - 1][j - 1], min(edits[i - 1][j], edits[i][j - 1]));
      }
    }
  }
  return edits[str2.length()][str1.length()];
}
```

</TabItem>
<TabItem value="s2">

```cpp
using namespace std;
​
int levenshteinDistance(string str1, string str2) {
  string small = str1.length() < str2.length() ? str1 : str2;
  string big = str1.length() >= str2.length() ? str1 : str2;
  vector<int> evenEdits(small.length() + 1);
  vector<int> oddEdits(small.length() + 1);
  for (int j = 0; j < small.length() + 1; j++) {
    evenEdits[j] = j;
  }
​
  vector<int> *currentEdits;
  vector<int> *previousEdits;
  for (int i = 1; i < big.length() + 1; i++) {
    if (i % 2 == 1) {
      currentEdits = &oddEdits;
      previousEdits = &evenEdits;
    } else {
      currentEdits = &evenEdits;
      previousEdits = &oddEdits;
    }
​
    (*currentEdits)[0] = i;
    for (int j = 1; j < small.length() + 1; j++) {
      if (big[i - 1] == small[j - 1]) {
        (*currentEdits)[j] = previousEdits->at(j - 1);
      } else {
        (*currentEdits)[j] =
            1 + min(previousEdits->at(j - 1),
                    min(previousEdits->at(j), currentEdits->at(j - 1)));
      }
    }
  }
  return big.length() % 2 == 0 ? evenEdits[small.length()]
                               : oddEdits[small.length()];
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_levenshteinD"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*nm*) | O(*nm*) |

Where *n* and *m* are the lengths of the two input strings

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*nm*) | O(min(*n*, *m*)) |

Where *n* and *m* are the lengths of the two input strings

Essentially, since we're only using two rows we can turn the O(*nm*) space into the minimum length of the two strings, O(min(*n*, *m*)) 

</TabItem>
</Tabs>

---

## Notes

:::note keep in mind

This kind of problem becomes exceedingly hard if we have very long strings, thus dynamic programming is going to be a really useful approach for this question. It'll allow us to solve very small parts of our problem and then use these solutions to build our final solution

:::

Our 2D Array, Edits Table, will look like this:

| | " " | o | d | s | a |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **" "** | 0 | 1 | 2 | 3 | 4 |
| **o** | 1 | 0 | 1 | 2 | 3 |
| **s** | 2 | 1 | 1 | 1 | 2 |
| **e** | 3 | 2 | 2 | 2 | 2 |

:::tip solution 1

As with most dynamic programming problems, our general approach will be to build a 2D array (table). Our 2D array will be called, edit table, E, and we need as many columns as there are letters in one of our strings plus one, because we're adding the empty string, and same for rows we will need as many rows are there as letters in our other string plus one

At each index in the 2D array, we're going to store the minimum number of edit operations that we can perform on a sub-string of our first string to turn it into another sub-string of our second string

Our formula will be, if letter of string 1 in row, `str1[r-1]`, is equal to letter of string 2 of column, `str2[c-1]`, then our current value in E will be its diagonal value, `E[r][c] = E[r-1][c-1]`

Otherwise our current value in E is equal to one additional edit operation plus the minimum value of the three neighboring boxes (left, diagonal, up), `E[r][c] = 1 + min(E[r][c-1], E[r-1][c-1], E[r-1][c])`

:::

:::tip solution 2

When we're dealing with dynamic programming problems and we have to build big 2D arrays, you have to ask yourself, do we need this 2D array? If you look at the formula and look at any given iteration, what values that are stored are we using? Notice that in our edit array, E, we're only using values that are located in our current row and our previous row. i.e. We're only using two rows

The first thing that we'll want to do is find the smallest of the two strings, `small = str1 if len(str1) < len(str2) else str2`. And, the biggest of the two strings, `big = str1 if len(str1) >= len(str2) else str2`

Next, we'll initialize our even edits for the zeroth row, the first row, with the length of small, because we want to have the smallest amount of columns in the two rows to store as few things as possible; `evenEdits = [x for x in range(len(small) + 1)]` since we want our first row to look like this: [0, 1, 2, 3, ...]

Then, we'll initialize our odd edits for the next row, the second row, with anything in the length of small, `oddEdits = [None for x in range(len(small) + 1)]`

Now, we'll go into the loops of our formula, `for i in range(1, len(big))`, because we're going to have length of big plus one rows. Inside, we'll have to do some swapping because sometimes our current row, `edit[i]`, is going to be our odd edits row, and sometimes it's going to be our even edits row. So what we're going to do is say, `if i % 2 == 1: currentEdits = oddEdits` and `previousEdits = evenEdits`, `currentEdits`  and `previousEdits` are just going to be variables that are going to swap depending on the evenness of i of the row that we're at. Otherwise, if i is even then we're going to say `currentEdits = evenEdits` and `previousEdits = oddEdits`. Before we can enter our second for loop, we have to say that the first value in our current edits has to be equal to i, `currentEdits[0] = i`, because this will make the first column look like this vertical: [0, 1, 2, 3, ...]; this is our little trick

Jumping into the second for loop, we'll say, `for j in range(1, len(small) + 1)`, if we're looking at the same letter in both strings, `if big[i - 1] == small[i - 1]`, then our current value will be the value of the diagonal of the previous row, `currentEdits[j] = previousEdits[j - 1]`. Otherwise, our current value will be equal to one additional edit operation plus the minimum of the three neighboring boxes (left, diagonal, up), `currentEdits[j] = 1 + min(currentEdits[j - 1], pevioiusEdits[j - 1], previousEdits[j])`

Now that we're done with our for loops we can just return. We want to return the last value of even edits or odd edits depending on the number of rows. We know that we have the same number of rows as the length of our big string, so we can say if our number of rows in total is even, then return the last value in even edits, otherwise return the last value in odd edits, `return evenEdits[-1] if len(big) % 2 == 0 else oddEdits[-1]` 

:::