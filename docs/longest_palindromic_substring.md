---
id: longestPS
title: Longest Palindromic Substring
---

## Problem

Write a function that returns the longest substring, in a given string, that is a palindrome

A palindrome is defined as a string that is written the same forward as backward

:::important

A single character is considered a palindrome

:::

---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```python
def longestPalindromicSubstring(string):
    longest = ""
    for i in range(len(string)):
        for j in range(i, len(string)):
            substring = string[i : j + 1]
            if len(substring) > len(longest) and isPalindrome(substring):
                longest = substring
    return longest
​
​
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
<TabItem value="s2">

```python
def longestPalindromicSubstring(string):
    currentLongest = [0, 1]
    for i in range(1, len(string)):
        odd = getLongestPalindromeFrom(string, i - 1, i + 1)
        even = getLongestPalindromeFrom(string, i - 1, i)
        longest = max(odd, even, key=lambda x: x[1] - x[0])
        currentLongest = max(longest, currentLongest, key=lambda x: x[1] - x[0])
    return string[currentLongest[0] : currentLongest[1]]
​
​
def getLongestPalindromeFrom(string, leftIdx, rightIdx):
    while leftIdx >= 0 and rightIdx < len(string):
        if string[leftIdx] != string[rightIdx]:
            break
        leftIdx -= 1
        rightIdx += 1
    return [leftIdx + 1, rightIdx]
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```javascript
function longestPalindromicSubstring(string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}
​
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
exports.longestPalindromicSubstring = longestPalindromicSubstring;
```

</TabItem>
<TabItem value="s2">

```javascript
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}
​
function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
​
exports.longestPalindromicSubstring = longestPalindromicSubstring;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```typescript
export function longestPalindromicSubstring(string: string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}
​
function isPalindrome(string: string) {
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
<TabItem value="s2">

```typescript
export function longestPalindromicSubstring(string: string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}
​
function getLongestPalindromeFrom(string: string, leftIdx: number, rightIdx: number) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```java
class Program {
  public static String longestPalindromicSubstring(String str) {
    String longest = "";
    for (int i = 0; i < str.length(); i++) {
      for (int j = i; j < str.length(); j++) {
        String substring = str.substring(i, j + 1);
        if (substring.length() > longest.length() && isPalindrome(substring)) {
          longest = substring;
        }
      }
    }
    return longest;
  }
​
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
<TabItem value="s2">

```java
class Program {
  public static String longestPalindromicSubstring(String str) {
    int[] currentLongest = {0, 1};
    for (int i = 1; i < str.length(); i++) {
      int[] odd = getLongestPalindromeFrom(str, i - 1, i + 1);
      int[] even = getLongestPalindromeFrom(str, i - 1, i);
      int[] longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      currentLongest =
          currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
              ? currentLongest
              : longest;
    }
    return str.substring(currentLongest[0], currentLongest[1]);
  }
​
  public static int[] getLongestPalindromeFrom(String str, int leftIdx, int rightIdx) {
    while (leftIdx >= 0 && rightIdx < str.length()) {
      if (str.charAt(leftIdx) != str.charAt(rightIdx)) {
        break;
      }
      leftIdx--;
      rightIdx++;
    }
    return new int[] {leftIdx + 1, rightIdx};
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

```cpp
using namespace std;
​
bool isPalindrome(string str);
​
string longestPalindromicSubstring(string str) {
  string longest = "";
  for (int i = 0; i < str.length(); i++) {
    for (int j = i; j < str.length(); j++) {
      string substring = str.substr(i, j + 1 - i);
      if (substring.length() > longest.length() && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}
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
<TabItem value="s2">

```cpp
#include <vector>
using namespace std;
​
vector<int> getLongestPalindromeFrom(string str, int leftIdx, int rightIdx);
​
string longestPalindromicSubstring(string str) {
  vector<int> currentLongest{0, 1};
  for (int i = 1; i < str.length(); i++) {
    vector<int> odd = getLongestPalindromeFrom(str, i - 1, i + 1);
    vector<int> even = getLongestPalindromeFrom(str, i - 1, i);
    vector<int> longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
        currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
            ? currentLongest
            : longest;
  }
  return str.substr(currentLongest[0], currentLongest[1] - currentLongest[0]);
}
​
vector<int> getLongestPalindromeFrom(string str, int leftIdx, int rightIdx) {
  while (leftIdx >= 0 && rightIdx < str.length()) {
    if (str[leftIdx] != str[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }
  return vector<int>{leftIdx + 1, rightIdx};
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

<Tabs
  groupId="solutions_longestPS"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
  ]
}>
<TabItem value="s1">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*<sup>3</sup>) | O(1) |

Where *n* is the length of the input string

To generate all the substrings you have to do a double for loop. You have to loop through the string once, and at each time that you're looping, you have to loop yet another time to generate substrings, which already takes O(*n*<sup>2</sup>)-time. Then, for each substring you most likely call an `isPalindrome()` function that checks the palindromicity of a string, and that is an O(*n*)-time operation, that's the best time you can get for palindrome checking. So these operations will give us a total runtime of O(*n*<sup>3</sup>)-time

</TabItem>
<TabItem value="s2">

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*<sup>2</sup>) | O(1) |

Where *n* is the length of the input string

We iterate once through the array, O(*n*)-time, and at each point in the array we do two expansions. We do one expansion where we center at the given letter, and we do one expansion where we center between the given letter and the previous letter. Those two expansions take at most O(*n*)-time, and since you're doing them at each point which takes O(*n*)-time we get an overall O(*n*<sup>2</sup>)-time complexity for our algorithm

Our space complexity will be O(1) because we're not storing anything. You might think that we're storing the palindromes that we find somewhere, but we can come up with a clever way of never having to store the palindromes anywhere, we can actually just store the start of the palindrome and the end of the palindrome. I.e. We only store the index of the first letter and the index of the last letter of our palindrome. At the end, we just return the string built from these index values  

</TabItem>
</Tabs>

---

## Notes

:::note keep in mind

Not only do you have to know how to find if a string is a palindrome, but you also have to manipulate the string to find the longest palindromic substring

It's important to note that a palindrome can be either of even length or of odd length

:::

:::tip solution 1

Get all the possible substrings of the input string, and for each one check if it's a palindrome

Then, store the current longest palindrome and replace it whenever you find a longer palindrome

This method works, but it runs in O(*n*<sup>3</sup>)-time

:::

:::tip solution 2

The idea is, iterate through our input string and at each point, treat the given point as if it **could** be the center of a palindrome. Then, expand and check if there is a substring that centers at our current point, that is indeed a palindrome. If there is, then update our current longest palindrome accordingly

If our palindrome is of odd length, then the center of the palindrome is a letter

If our palindrome is of even length, then the center of the palindrome is in between two letters

To implement this solution we first define our current longest palindromic substring, `currentLongest`, this will be the value that we're going to update throughout the algorithm. Here we don't actually need to store the palindromes, we just need to store an array, or a list, or a tuple of two values: the starting index and the ending index of our palindrome. So, we're going to initialize our variable to `[0, 1]`, because at the very least, our longest palindromic substring of a string  is the first letter of the string. We write our list in this way, so at the end of our function we'll be able to slice that substring our of the string, slicing from index `0` all the way to index `1` exclusive

Then, we iterate through the string, `for i in range(1, len(string))`, and start at `1` because there's no need to start at `0` since we know that the first letter is a palindrome, and we know that if we start expanding to the left of the first letter we're already going to be out of the string

Inside of our *for* loop, we'll define a variable called `odd`, which is going to be the palindrome of odd length that is centered at the letter that we're at. This variable is going to be equal to our helper function, `getLongestPalindromeFrom()`, that takes in 3 variables. Our string that we'll get the longest palindromic substring from, `string`, the starting left index of our current index, `i - 1`, and the ending right index of our current index, `i + 1`

Next, we'll define a variable called `even`, which is going to be the palindrome of even length that is centered in between the previous letter and the current letter. This variable is going to be equal to our helper function, `getLongestPalindromeFrom()`, with parameters `string`, the starting left index of our current index, `i - 1`, and the ending current index, `i`.

Then, we'll pick the longest string between the `odd` and `even` palindromes, `longest = max(odd, even)`, by looking at `odd`, looking at `even`, both of which are in the same form of arrays of two values, and taking the difference of the value at index `1` in them and the value at index `0` in them, `longest = max(odd, even, key = lambda x: x[1] - x[0])`

Next, similar as `longest`, we'll update the current longest palindromic substring to be equal to the maximum of the longest string between `odd` and `even` palindromes and current longest palindrome, using the same key as before, `currentLongest = max(longest, currentLongest, key = lambda x: x[1] - x[0])`

Now that we're done with the *for* loop, we're going to return and slice our given string using the current longest array that we have, `return string[currentLongest[0]:currentLongest[1]]`

Here, we'll work on our helper function `getLongestPalindromeFrom()`, it'll take in a string, `string`, a left index, `leftIdx`, and a right index, `rightIdx`, so we'll say, `getLongestPalindromeFrom(string, leftIdx, rightIdx)`. Inside of our function we'll say, while we're still in our string and we're not expanding outside of it, so long as the left index is greater than or equal to zero and the right index is less than the length of our string, `while leftIdx >= 0 and rightIdx < len(string)`, if the letter at the left index of the string doesn't equal to the letter at the right index of the string then we don't need to expand any longer, we break, `if string[leftIdx] != string[rightIdx]: break`. Otherwise, we move the index, or the left pointer, one more to the left, `leftIdx -= 1`, and we move the right index, or right pointer, one more to the right, `rightIdx += 1`. Then, once we break out of this *while* loop, we'll return an array that's the same format as our current longest palindromic substring, `currentLongest`, so we'll say `return [leftIdx + 1, rightIdx]` 

Let's dive deeper as to why we'll return in this way, and why this makes sense. Once we break out of our `while` loop that means that we are either past the indicies of our string, we've got a left index that's too far to the left, that is `-1`, or we've got a right index that's too far to the right, that is equal to the length of the string, or we're at a letter in the left index that's just not equal to the letter at the right index, we've hit the *if* condition and broken out of the *while* loop. So, in either of those 2 cases, the current left index that we're at is one index too far to the left, meaning the longest palindrome that we have starts at the current left index plus 1, `leftIdx + 1`

:::