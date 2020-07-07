---
id: caesarCE
title: Caesar Cipher Encryptor
---

## Problem

Given lowercase letters and an integer that represents a key, return a new string created by shifting every letter in the input string by *k* positions in the alphabet, where *k* is the key.

:::important

Letters should "wrap" around the alphabet.

i.e. The letter `z` shifterd by one returns the letter `a`.

:::

---

## Code

### Python

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```python
def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26
    for letter in string:
        newLetters.append(getNewLetter(letter, newKey))
    return "".join(newLetters)
​
​
def getNewLetter(letter, key):
    newLetterCode = ord(letter) + key
    return chr(newLetterCode) if newLetterCode <= 122 else chr(96 + newLetterCode % 122)
```

</TabItem>
<TabItem value="s2">

```python
def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26
    alphabet = list("abcdefghijklmnopqrstuvwxyz")
    for letter in string:
        newLetters.append(getNewLetter(letter, newKey, alphabet))
    return "".join(newLetters)
​
​
def getNewLetter(letter, key, alphabet):
    newLetterCode = alphabet.index(letter) + key
    return alphabet[newLetterCode] if newLetterCode <= 25 else alphabet[-1 + newLetterCode % 25]
```

</TabItem>
<TabItem value="s3">

```python
def caesarCipherEncryptor(string, key):
	return_str = ""
	new_key = key % 26
    for letter in string:
		new_unicode = ord(letter) + new_key
		if new_unicode > 122:
			distance = new_unicode % 122
			new_unicode = 96 + distance
		return_str += chr(new_unicode)
	return return_str
```

</TabItem>
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```javascript
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}
​
function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}
​
exports.caesarCipherEncryptor = caesarCipherEncryptor;
```

</TabItem>
<TabItem value="s2">

```javascript
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}
​
function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return newLetterCode <= 25 ? alphabet[newLetterCode] : alphabet[-1 + (newLetterCode % 25)];
}
​
exports.caesarCipherEncryptor = caesarCipherEncryptor;
```

</TabItem>
<TabItem value="s3">

```javascript
function caesarCipherEncryptor(string, key) {
  let returnStr = "";
	const newKey = key % 26;	
	for (const letter of string) {
		let newUnicode = letter.charCodeAt() + newKey;
		if (newUnicode > 122) {
			const distance = newUnicode % 122;
			newUnicode = 96 + distance;
		}
		returnStr += String.fromCharCode(newUnicode);
	}
	return returnStr;
}

exports.caesarCipherEncryptor = caesarCipherEncryptor;
```

</TabItem>
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
    { label: 'Solution 3', value: 's3', },
  ]
}>
<TabItem value="s1">

```typescript
export function caesarCipherEncryptor(string: string, key: number) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}
​
function getNewLetter(letter: string, key: number) {
  const newLetterCode = letter.charCodeAt(0) + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}
```

</TabItem>
<TabItem value="s2">

```typescript
export function caesarCipherEncryptor(string: string, key: number) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}
​
function getNewLetter(letter: string, key: number, alphabet: string[]) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return newLetterCode <= 25 ? alphabet[newLetterCode] : alphabet[-1 + (newLetterCode % 25)];
}
```

</TabItem>
<TabItem value="s3">

```typescript
export function caesarCipherEncryptor(string: string, key: number) {
  let returnStr = "";
	const newKey = key % 26;
	
	for (const letter of string) {
		let newUnicode = letter.charCodeAt(0) + newKey;
		if (newUnicode > 122) {
			const distance = newUnicode % 122;
			newUnicode = 96 + distance;
		}
		returnStr += String.fromCharCode(newUnicode);
	}
	return returnStr;
}
```

</TabItem>
</Tabs>

### Java

<Tabs
  groupId="solutions_caesarCE"
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
  public static String caesarCypherEncryptor(String str, int key) {
    char[] newLetters = new char[str.length()];
    int newKey = key % 26;
    for (int i = 0; i < str.length(); i++) {
      newLetters[i] = getNewLetter(str.charAt(i), newKey);
    }
    return new String(newLetters);
  }
​
  public static char getNewLetter(char letter, int key) {
    int newLetterCode = letter + key;
    return newLetterCode <= 122 ? (char) newLetterCode : (char) (96 + newLetterCode % 122);
  }
}
```

</TabItem>
<TabItem value="s2">

```java
class Program {
  public static String caesarCypherEncryptor(String str, int key) {
    char[] newLetters = new char[str.length()];
    int newKey = key % 26;
    String alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (int i = 0; i < str.length(); i++) {
      newLetters[i] = getNewLetter(str.charAt(i), newKey, alphabet);
    }
    return new String(newLetters);
  }
​
  public static char getNewLetter(char letter, int key, String alphabet) {
    int newLetterCode = alphabet.indexOf(letter) + key;
    return newLetterCode <= 25
        ? alphabet.charAt(newLetterCode)
        : alphabet.charAt(-1 + newLetterCode % 25);
  }
}
```

</TabItem>
<TabItem value="s3">

```java
class Program {
  public static String caesarCypherEncryptor(String str, int key) {
    String returnStr = "";
		int newKey = key % 26;
		for (int i = 0; i < str.length(); i++) {
			int newUnicode = str.charAt(i) + newKey;
			if (newUnicode > 122) {
				int distance = newUnicode % 122;
				newUnicode = 96 + distance;
			}
			returnStr += (char) newUnicode;
		}	
    return returnStr;
  }
}
```

</TabItem>
</Tabs>

### C++

<Tabs
  groupId="solutions_caesarCE"
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
#include <numeric>
using namespace std;
​
char getNewLetter(char letter, int key);
​
string caesarCypherEncryptor(string str, int key) {
  vector<char> newLetters;
  int newKey = key % 26;
  for (int i = 0; i < str.length(); i++) {
    newLetters.push_back(getNewLetter(str[i], newKey));
  }
  return string(newLetters.begin(), newLetters.end());
}
​
char getNewLetter(char letter, int key) {
  int newLetterCode = letter + key;
  return newLetterCode <= 122 ? newLetterCode : 96 + newLetterCode % 122;
}
```

</TabItem>
<TabItem value="s2">

```cpp
#include <vector>
#include <numeric>
using namespace std;
​
char getNewLetter(char letter, int key, string alphabet);
​
string caesarCypherEncryptor(string str, int key) {
  vector<char> newLetters;
  int newKey = key % 26;
  string alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (int i = 0; i < str.length(); i++) {
    newLetters.push_back(getNewLetter(str[i], newKey, alphabet));
  }
  return string(newLetters.begin(), newLetters.end());
}
​
char getNewLetter(char letter, int key, string alphabet) {
  int newLetterCode = alphabet.find(letter) + key;
  return newLetterCode <= 25 ? alphabet[newLetterCode]
                             : alphabet[-1 + newLetterCode % 25];
}
```

</TabItem>
<TabItem value="s3">

```cpp
using namespace std;

string caesarCypherEncryptor(string str, int key) {
  string returnStr = "";
	int newKey = key % 26;
	for (int i = 0; i < str.length(); i++) {
		int newUnicode = str[i] + newKey;
		if (newUnicode > 122) {
			int distance = newUnicode % 122;
			newUnicode = 96 + distance;
		}
		returnStr += newUnicode;
	}
  return returnStr;
}
```

</TabItem>
</Tabs>

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input string

---

## Notes

### Letter -> Unicode -> Character Approach

:::tip solution 1

Create an array to contain all of our new letters, and iterate through the input string

At each letter, apply algorithm to shift letter by the key, get a new letter, and then throw that new letter into return array

Once you're done building the array, you join it all together into a string, and return that string


```py
nLC = ord(letter) + key

if nLC <= 122:
    return chr(nLC)
else:
    return chr(96 + nLC % 122)
```

e.g. Let's say we do `z` + 2, which is 122 + 2

We divide 124 by 122 and get the remainder (mod %), which is going to be 2. Then, we add this to 96 which is the unicode that comes right before `a`

**What happens if the key is a big number?**

e.g. key = 54

You would end up calling the `chr()` on something that's greater than 122. And, that's not what you want. You want to wrap around the alphabet

So, what we can do is that at the very beginning of our algorithm, instead of dealing with a big number like 54, what we can do is say `key = key % 26`, because 26 is the number of letters in our alphabet

By doing this, we don't end up in the situation where our key is outside of our alphabet size

:::

### Alphabet Array Approach

:::tip solution 2

Create an array with all the letters in the alphabet, the index that each letter is at is their corresponding "unicode" value

e.g. the letter `a` would be at index 0, and the letter `z` would be at index 25, and that would be their corresponding code value

i.e. instead of `a` => 97 it'll be `a` => 0, and instead of `z` => 122 it'll be `z` => 25

Our algorithm would then change to:

```py
nLC = al_arr.index(letter) + key

if nLC <= 25:
    return al_arr[nLC]
else:
    return al_arr[-1 + nLC % 25]
```

:::