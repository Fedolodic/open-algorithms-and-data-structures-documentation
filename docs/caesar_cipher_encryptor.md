---
id: caesarCE
title: Caesar Cipher Encryptor
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
</Tabs>

### JavaScript

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
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
</Tabs>

### TypeScript

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
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
</Tabs>

### Java

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
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
</Tabs>

### C++

<Tabs
  groupId="solutions_caesarCE"
  defaultValue="s1"
  values={[
    { label: 'Solution 1', value: 's1', },
    { label: 'Solution 2', value: 's2', },
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
</Tabs>

---

## Space-Time Complexity

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(*n*) |

Where *n* is the length of the input string