---
id: permutations
title: Permutations
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_permutations"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def getPermutations(array):
    permutations = []
    permutationsHelper(array, [], permutations)
    return permutations


def permutationsHelper(array, currentPermutation, permutations):
    if not len(array) and len(currentPermutation):
        permutations.append(currentPermutation)
    else:
        for i in range(len(array)):
            newArray = array[:i] + array[i + 1 :]
            newPermutation = currentPermutation + [array[i]]
            permutationsHelper(newArray, newPermutation, permutations)
```

</TabItem>
<TabItem value="s2">

```python
def getPermutations(array):
    permutations = []
    permutationsHelper(0, array, permutations)
    return permutations


def permutationsHelper(i, array, permutations):
    if i == len(array) - 1:
        permutations.append(array[:])
    else:
        for j in range(i, len(array)):
            swap(array, i, j)
            permutationsHelper(i + 1, array, permutations)
            swap(array, i, j)


def swap(array, i, j):
    array[i], array[j] = array[j], array[i]
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_permutations"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

exports.getPermutations = getPermutations;
```

</TabItem>
<TabItem value="s2">

```javascript
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

exports.getPermutations = getPermutations;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_permutations"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array: number[], currentPermutation: number[], permutations: number[][]) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i: number, array: number[], permutations: number[][]) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_permutations"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
import java.util.*;

class Program {
  public static List<List<Integer>> getPermutations(List<Integer> array) {
    List<List<Integer>> permutations = new ArrayList<List<Integer>>();
    getPermutations(array, new ArrayList<Integer>(), permutations);
    return permutations;
  }

  public static void getPermutations(
      List<Integer> array, List<Integer> currentPermutation, List<List<Integer>> permutations) {
    if (array.size() == 0 && currentPermutation.size() > 0) {
      permutations.add(currentPermutation);
    } else {
      for (int i = 0; i < array.size(); i++) {
        List<Integer> newArray = new ArrayList<Integer>(array);
        newArray.remove(i);
        List<Integer> newPermutation = new ArrayList<Integer>(currentPermutation);
        newPermutation.add(array.get(i));
        getPermutations(newArray, newPermutation, permutations);
      }
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```java
import java.util.*;

class Program {
  public static List<List<Integer>> getPermutations(List<Integer> array) {
    List<List<Integer>> permutations = new ArrayList<List<Integer>>();
    getPermutations(0, array, permutations);
    return permutations;
  }

  public static void getPermutations(int i, List<Integer> array, List<List<Integer>> permutations) {
    if (i == array.size() - 1) {
      permutations.add(new ArrayList<Integer>(array));
    } else {
      for (int j = i; j < array.size(); j++) {
        swap(array, i, j);
        getPermutations(i + 1, array, permutations);
        swap(array, i, j);
      }
    }
  }

  public static void swap(List<Integer> array, int i, int j) {
    Integer tmp = array.get(i);
    array.set(i, array.get(j));
    array.set(j, tmp);
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_permutations"
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

void permutationsHelper(vector<int> array, vector<int> currentPermutation,
                        vector<vector<int>> *permutations);

vector<vector<int>> getPermutations(vector<int> array) {
  vector<vector<int>> permutations;
  permutationsHelper(array, {}, &permutations);
  return permutations;
}

void permutationsHelper(vector<int> array, vector<int> currentPermutation,
                        vector<vector<int>> *permutations) {
  if (array.size() == 0 && currentPermutation.size() > 0) {
    permutations->push_back(currentPermutation);
  } else {
    for (int i = 0; i < array.size(); i++) {
      vector<int> newArray;
      newArray.insert(newArray.end(), array.begin(), array.begin() + i);
      newArray.insert(newArray.end(), array.begin() + i + 1, array.end());
      vector<int> newPermutation = currentPermutation;
      newPermutation.push_back(array[i]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
using namespace std;

void permutationsHelper(int i, vector<int> &array,
                        vector<vector<int>> &permutations);

vector<vector<int>> getPermutations(vector<int> array) {
  vector<vector<int>> permutations;
  permutationsHelper(0, array, permutations);
  return permutations;
}

void permutationsHelper(int i, vector<int> &array,
                        vector<vector<int>> &permutations) {
  if (i == array.size() - 1) {
    permutations.push_back(array);
  } else {
    for (int j = i; j < array.size(); j++) {
      swap(array[i], array[j]);
      permutationsHelper(i + 1, array, permutations);
      swap(array[i], array[j]);
    }
  }
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_permutations"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Upper Bound**| O(*n*<sup>2</sup>**n*!) | O(_n_**n*!) |
|**Worse**| O(_n_**n*!) | O(_n_**n*!) |

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(_n_**n*!) | O(_n_**n*!) |

</TabItem>
</Tabs>