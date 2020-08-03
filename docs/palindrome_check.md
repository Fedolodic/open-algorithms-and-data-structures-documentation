---
id: palindromeC
title: Palindrome Check
---

## Problem

Write a function that determines whether or not a given a string of characters is a palindrome

A palindrome is defined as a string that is written the same forward as backward

---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```python
def isPalindrome(string):
    reversedString = ""
    for i in reversed(range(len(string))):
        reversedString += string[i]
    return string == reversedString
```

</TabItem>
<TabItem value="s2">

```python
def isPalindrome(string):
    reversedChars = []
    for i in reversed(range(len(string))):
        reversedChars.append(string[i])
    return string == "".join(reversedChars)
```

</TabItem>
<TabItem value="s3">

```python
def isPalindrome(string, i=0):
    j = len(string) - 1 - i
    return True if i >= j else string[i] == string[j] and isPalindrome(string, i + 1)
```

</TabItem>
<TabItem value="s4">

```python
def isPalindrome(string):
    leftIdx = 0
    rightIdx = len(string) - 1
    while leftIdx < rightIdx:
        if string[leftIdx] != string[rightIdx]:
            return False
        leftIdx += 1
        rightIdx -= 1
    return True
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```javascript
function isPalindrome(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
<TabItem value="s2">

```javascript
function isPalindrome(string) {
  const reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join('');
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
<TabItem value="s3">

```javascript
function isPalindrome(string, i = 0) {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
<TabItem value="s4">

```javascript
function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
​
exports.isPalindrome = isPalindrome;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```typescript
export function isPalindrome(string: string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function isPalindrome(string: string) {
  const reversedChars: string[] = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join('');
}
```

</TabItem>
<TabItem value="s3">

```typescript
export function isPalindrome(string: string, i = 0): boolean {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
```

</TabItem>
<TabItem value="s4">

```typescript
export function isPalindrome(string: string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static boolean isPalindrome(String str) {
    String reversedString = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      reversedString += str.charAt(i);
    }
    return str.equals(reversedString);
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static boolean isPalindrome(String str) {
    StringBuilder reversedString = new StringBuilder();
    for (int i = str.length() - 1; i >= 0; i--) {
      reversedString.append(str.charAt(i));
    }
    return str.equals(reversedString.toString());
  }
}
```

</TabItem>
<TabItem value="s3">

```java
class Program {
  public static boolean isPalindrome(String str) {
    return isPalindrome(str, 0);
  }
​
  public static boolean isPalindrome(String str, int i) {
    int j = str.length() - 1 - i;
    return i >= j ? true : str.charAt(i) == str.charAt(j) && isPalindrome(str, i + 1);
  }
}
```

</TabItem>
<TabItem value="s4">

```java
class Program {
  public static boolean isPalindrome(String str) {
    int leftIdx = 0;
    int rightIdx = str.length() - 1;
    while (leftIdx < rightIdx) {
      if (str.charAt(leftIdx) != str.charAt(rightIdx)) {
        return false;
      }
      leftIdx++;
      rightIdx--;
    }
    return true;
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

```cpp
using namespace std;
​
bool isPalindrome(string str) {
  string reversedString = "";
  for (int i = str.length() - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return str == reversedString;
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
#include <numeric>
using namespace std;
​
bool isPalindrome(string str) {
  vector<char> reversedChars;
  for (int i = str.length() - 1; i >= 0; i--) {
    reversedChars.push_back(str[i]);
  }
  return str == string(reversedChars.begin(), reversedChars.end());
}
```

</TabItem>
<TabItem value="s3">

```cpp
using namespace std;
​
bool helper(string str, int i);
​
bool isPalindrome(string str) { return helper(str, 0); }
​
bool helper(string str, int i) {
  int j = str.length() - 1 - i;
  return i >= j ? true : str[i] == str[j] && helper(str, i + 1);
}
```

</TabItem>
<TabItem value="s4">

```cpp
using namespace std;
​
bool isPalindrome(string str) {
  int leftIdx = 0;
  int rightIdx = str.length() - 1;
  while (leftIdx < rightIdx) {
    if (str[leftIdx] != str[rightIdx]) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_palindromeC"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
    { label: 'Solution 4', value: 's4', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*<sup>2</sup>) | O(*n*) |

Where *n* is the length of the input string

When we build our reversed string and do `reversedString += string[i]`, at each iteration in the *for* loop, we're rebuilding a new string. In most languages where strings are immutable, if you do `new += string[i]`, adding a character to a string, you're actually re-creating the entire `new` string, iterating through every character in `new`, and adding `string[i]`; This is an O(*n*)-time operation. Since we're performing an O(*n*)-time operation at each iteration in the *for* loop, this will turn our function into an O(*n*<sup>2</sup>)-time algorithm overall

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input string

Appending to a list is a constant time operation, O(1), and at the end, `"".join(reversedChars)` is an O(*n*)-time operation. Thus our algorithm will run in O(*n*)-time

</TabItem>
<TabItem value="s3">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input string

In terms of time, we're doing O(*n*/2) time operations which converges to O(*n*)

When we're dealing with recursion there's always additional memory usage, because of the call stack. When you call a function it goes on the call stack to store the state of that function while it's being called. So when that function calls itself you're adding a frame to the call stack. So here, our memory usage will converge to O(*n*) space

:::caution

You might have heard of something called tail recursion or tail calls, which is a notion in programming that says if you call a function at the very end of a function, then sometimes the location of the call stack where your function is stored can just be replaced with that final function that you're calling in the function. So, in recursion, oftentimes it's said if your recursive call is the absolute final thing in your function, then you don't actually need to store the state of your original function, and you can just replace that frame on the call stack with the new recursive call

In our situation, you might think if we put our `isPalindrome()` function on the very last line of our function, then we might not actually need to store all the different recursive calls in the call stack at the same time, we can just keep replacing them, and turn the space complexity into O(1) space

The thing about tail recursion is that it's a bit tricky, because some people will even claim that a non tail recursive function can be turned into a tail recursive function by the compiler. i.e. If you're doing the recursive `isPalindrome()` function and your `isPalindrome()` function is not the absolute last line in your function, if you have a good compiler, the compiler might turn this into a tail recursive call; it might interpret the code in a certain way that brings the `isPalindrome()` function down to the last line, and turn the function into a tail recursive call which would optimize your algorithm in your code

The thing is, it's hard to say whether or not that is the case all the time

::: 

</TabItem>
<TabItem value="s4">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

Where *n* is the length of the input string

This solution will use just O(1) space, because we're not storing anything apart from our pointers. This will be the most optimal way of solving this problem 

</TabItem>
</Tabs>

---

## Notes

:::tip solution 1

Create a new string that's going to be the reversed version of our input string, compare that new string with the input string, and see if they're equal to each other

To do this we'll create a variable called `reversedString`, initialize it to the empty string, then iterate through the reversed version of our given string, meaning we'll start at the last index of our string and go all the way to index zero
 
 At every point in the iteration, we'll build the `reversedString` by adding the letter at index `i` in the given string, `reversedString += string[i]`

Once we're done building the reversed string, we'll do the palindrome comparison by testing weather or not our given string is equal to the reversed string we just built, `return string == reversedString`

:::

:::tip solution 2

Instead of creating a new string, let's just store everything in a list, an array, and at the end we join the list into one string and do the palindrome comparison

To do this instead of initializing `reversedString` to an empty string, we'll initialize it to an empty list, an empty array, `reversedChars`, and when we do our iteration backwards through the given string, instead of saying `reversedString += string[i]`, we'll say `reversedChars.append(string[i])`, or `.push` or whatever it is in your language of choice. This will keep pushing our string letters into the array, and at the very end instead of returning `reversedString == string[i]` we'll return `"".join(reversedChars) == string`

:::

:::tip solution 3

This will be the recursive way to solve this problem, it won't be a better solution that solution 2, but it'll be a different approach

Notice that when you're looking at a string and you want to know if it's a palindrome, you basically ask if the first letter is equal to the last letter, and if the string in the middle, the substring, is a palindrome as well. By applying this logic and approaching the problem in this way, assuming we have an `isPalindrome()` function, we can solve this problem recursively

In our calling function, `isPalindrome()` apart from taking in a string we can also take in the first index that we're looking at in the recursive call, `i`

To dynamically calculate `j` the last index that we're looking at, at each recurisve call we can say, `j = len(string) - 1 - i` 

Our base case will be whenever we arrive at the middle of our string or we're past the middle point, we'll just `return i >= j`. Otherwise, return true if the first letter is equal to the last letter, and `isPalindrome()` called on the string in the middle is true, `return string[i] == string[j] and isPalindrome(mid)`. We can show off our recursive skills and do both of these checks in one line, `return True if i >= j else string[i] == string[j] and isPalindrome(string, i + 1)`

:::

:::tip solution 4

This solutiuon will involve an iterative approach. The idea is that we've come up with algorithms that take O(*n*)-time, and it's obvious that we're not going to do better than that. We have to iterate through our given string to determine if it's a palindrome. But, as we've seen in solution 3, we don't have to store a new string and use recursion that might end up using additional space

To do this we initialize two pointers, one at our first letter and another pointer at our last letter. We then compare both letters, and if they're equal to each other we keep moving towards the middle of the string, otherwise we don't have a palindrome and we return false. If the pointers overlap then we're done, return true

In the actual implementation we'll first initialize the left pointer at the first index, `leftIdx = 0`, and initialize the right pointer at the last index, `rightIdx = len(string) - 1`

Then, while our left pointer comes before the right pointer, `while leftIdx < rightIdx`, if the two letters at both pointers are not equal to each other, `if string[leftIdx] != string[rightIdx]`, return false, `return False`. Otherwise, if both letters are equal to each other, then increment the left pointer, `leftIdx += 1`, and decrement the right pointer, `rightIdx -= 1`

Once you get to the point where both pointers point to the same letter, in an odd string, or are past each other, in an even string, then you're out of the while loop and you're dealing with a palindrom so you're officially done, `return True` 
 
:::