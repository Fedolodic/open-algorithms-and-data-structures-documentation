---
id: twoNS
title: Two Number Sum
---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```python
def twoNumberSum(array, targetSum):
    for i in range(len(array) - 1):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []
```

</TabItem>
<TabItem value="s2">

```python
def twoNumberSum(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []
```

</TabItem>
<TabItem value="s3">

```python
def twoNumberSum(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] + array[right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1
    return []
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```javascript
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

exports.twoNumberSum = twoNumberSum;
```

</TabItem>
<TabItem value="s2">

```javascript
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

exports.twoNumberSum = twoNumberSum;
```

</TabItem>
<TabItem value="s3">

```javascript
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

exports.twoNumberSum = twoNumberSum;
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    for (int i = 0; i < array.length - 1; i++) {
      int firstNum = array[i];
      for (int j = i + 1; j < array.length; j++) {
        int secondNum = array[j];
        if (firstNum + secondNum == targetSum) {
          return new int[] {firstNum, secondNum};
        }
      }
    }
    return new int[0];
  }
}
```

</TabItem>
<TabItem value="s2">

```java
import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    Map<Integer, Boolean> nums = new HashMap<>();
    for (int num : array) {
      int potentialMatch = targetSum - num;
      if (nums.containsKey(potentialMatch)) {
        return new int[] {potentialMatch, num};
      } else {
        nums.put(num, true);
      }
    }
    return new int[0];
  }
}
```

</TabItem>
<TabItem value="s3">

```java
import java.util.Arrays;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    Arrays.sort(array);
    int left = 0;
    int right = array.length - 1;
    while (left < right) {
      int currentSum = array[left] + array[right];
      if (currentSum == targetSum) {
        return new int[] {array[left], array[right]};
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
    return new int[0];
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```cpp
#include <vector>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  for (int i = 0; i < array.size() - 1; i++) {
    int firstNum = array[i];
    for (int j = i + 1; j < array.size(); j++) {
      int secondNum = array[j];
      if (firstNum + secondNum == targetSum) {
        return vector<int>{firstNum, secondNum};
      }
    }
  }
  return {};
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  unordered_set<int> nums;
  for (int num : array) {
    int potentialMatch = targetSum - num;
    if (nums.find(potentialMatch) != nums.end()) {
      return vector<int>{potentialMatch, num};
    } else {
      nums.insert(num);
    }
  }
  return {};
}
```

</TabItem>
<TabItem value="s3">

```cpp
#include <vector>
#include <algorithm>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  sort(array.begin(), array.end());
  int left = 0;
  int right = array.size() - 1;
  while (left < right) {
    int currentSum = array[left] + array[right];
    if (currentSum == targetSum) {
      return {array[left], array[right]};
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return {};
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Best**| O(n) | O(1) |
|**Average**| O(n<sup>2</sup>) | O(1) |
|**Worse**| O(n<sup>2</sup>) | O(1) |