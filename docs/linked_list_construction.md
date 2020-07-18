---
id: linkedLC
title: Linked List Construction
---

## Problem

Create a doubly linked list class that supports:

* Setting the head and the tail of the linked list
    * i.e. Grab an existing node and set it to be the head/tail. Or, create a new node and set it to be the head/tail
* Inserting nodes before and after other nodes, as well as at given positions
    * i.e. Insert a given node before a given node, existing or not. Or, insert a given node at a given position
* Removing given nodes and removing nodes with given values
    * i.e. Remove a node from a given value. Or, remove all nodes that have a given value
* Searching for nodes with given values
    * i.e. Look through the linked list and return a boolean value if the linked list contains a node with a given value

---

## Code

### Python

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None
​
​
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
​
    def setHead(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insertBefore(self.head, node)
​
    def setTail(self, node):
        if self.tail is None:
            self.setHead(node)
            return
        self.insertAfter(self.tail, node)
​
    def insertBefore(self, node, nodeToInsert):
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
        if node.prev is None:
            self.head = nodeToInsert
        else:
            node.prev.next = nodeToInsert
        node.prev = nodeToInsert

    def insertAfter(self, node, nodeToInsert):
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)
        nodeToInsert.prev = node
        nodeToInsert.next = node.next
        if node.next is None:
            self.tail = nodeToInsert
        else:
            node.next.prev = nodeToInsert
        node.next = nodeToInsert
​
    def insertAtPosition(self, position, nodeToInsert):
        if position == 1:
            self.setHead(nodeToInsert)
            return
        node = self.head
        currentPosition = 1
        while node is not None and currentPosition != position:
            node = node.next
            currentPosition += 1
        if node is not None:
            self.insertBefore(node, nodeToInsert)
        else:
            self.setTail(nodeToInsert)

    def removeNodesWithValue(self, value):
        node = self.head
        while node is not None:
            nodeToRemove = node
            node = node.next
            if nodeToRemove.value == value:
                self.remove(nodeToRemove)
​
    def remove(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail = self.tail.prev
        self.removeNodeBindings(node)
​
    def containsNodeWithValue(self, value):
        node = self.head
        while node is not None and node.value != value:
            node = node.next
        return node is not None
​
    def removeNodeBindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None
```

### JavaScript

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
​
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
​
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }
​
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }
​
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
​
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
​
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
​
  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
​
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
```

### TypeScript

```typescript
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;
​
  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
​
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
​
  constructor() {
    this.head = null;
    this.tail = null;
  }
​
  setHead(node: Node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }
​
  setTail(node: Node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }
​
  insertBefore(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }
​
  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
​
  removeNodesWithValue(value: number) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }
​
  remove(node: Node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
​
  containsNodeWithValue(value: number) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
​
  removeNodeBindings(node: Node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
```

### Java

```java
class Program {
  static class DoublyLinkedList {
    public Node head;
    public Node tail;
​
    public void setHead(Node node) {
      if (head == null) {
        head = node;
        tail = node;
        return;
      }
      insertBefore(head, node);
    }
​
    public void setTail(Node node) {
      if (tail == null) {
        setHead(node);
        return;
      }
      insertAfter(tail, node);
    }
​
    public void insertBefore(Node node, Node nodeToInsert) {
      if (nodeToInsert == head && nodeToInsert == tail) return;
      remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      if (node.prev == null) {
        head = nodeToInsert;
      } else {
        node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert;
    }
​
    public void insertAfter(Node node, Node nodeToInsert) {
      if (nodeToInsert == head && nodeToInsert == tail) return;
      remove(nodeToInsert);
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      if (node.next == null) {
        tail = nodeToInsert;
      } else {
        node.next.prev = nodeToInsert;
      }
      node.next = nodeToInsert;
    }
​
    public void insertAtPosition(int position, Node nodeToInsert) {
      if (position == 1) {
        setHead(nodeToInsert);
        return;
      }
      Node node = head;
      int currentPosition = 1;
      while (node != null && currentPosition++ != position) node = node.next;
      if (node != null) {
        insertBefore(node, nodeToInsert);
      } else {
        setTail(nodeToInsert);
      }
    }
​
    public void removeNodesWithValue(int value) {
      Node node = head;
      while (node != null) {
        Node nodeToRemove = node;
        node = node.next;
        if (nodeToRemove.value == value) remove(nodeToRemove);
      }
    }
​
    public void remove(Node node) {
      if (node == head) head = head.next;
      if (node == tail) tail = tail.prev;
      removeNodeBindings(node);
    }
​
    public boolean containsNodeWithValue(int value) {
      Node node = head;
      while (node != null && node.value != value) node = node.next;
      return node != null;
    }
​
    public void removeNodeBindings(Node node) {
      if (node.prev != null) node.prev.next = node.next;
      if (node.next != null) node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }
  }
​
  static class Node {
    public int value;
    public Node prev;
    public Node next;
​
    public Node(int value) {
      this.value = value;
    }
  }
}
```

### C++

```cpp
using namespace std;
​
class Node {
public:
  int value;
  Node *prev;
  Node *next;
​
  Node(int value);
};
​
class DoublyLinkedList {
public:
  Node *head;
  Node *tail;
​
  DoublyLinkedList() {
    head = NULL;
    tail = NULL;
  }
​
  void setHead(Node *node) {
    if (head == NULL) {
      head = node;
      tail = node;
      return;
    }
    insertBefore(head, node);
  }
​
  void setTail(Node *node) {
    if (tail == NULL) {
      setHead(node);
      return;
    }
    insertAfter(tail, node);
  }
​
  void insertBefore(Node *node, Node *nodeToInsert) {
    if (nodeToInsert == head && nodeToInsert == tail)
      return;
    remove(nodeToInsert);
    nodeToInsert->prev = node->prev;
    nodeToInsert->next = node;
    if (node->prev == NULL) {
      head = nodeToInsert;
    } else {
      node->prev->next = nodeToInsert;
    }
    node->prev = nodeToInsert;
  }

  void insertAfter(Node *node, Node *nodeToInsert) {
    if (nodeToInsert == head && nodeToInsert == tail)
      return;
    remove(nodeToInsert);
    nodeToInsert->prev = node;
    nodeToInsert->next = node->next;
    if (node->next == NULL) {
      tail = nodeToInsert;
    } else {
      node->next->prev = nodeToInsert;
    }
    node->next = nodeToInsert;
  }
​
  void insertAtPosition(int position, Node *nodeToInsert) {
    if (position == 1) {
      setHead(nodeToInsert);
      return;
    }
    Node *node = head;
    int currentPosition = 1;
    while (node != NULL && currentPosition++ != position)
      node = node->next;
    if (node != NULL) {
      insertBefore(node, nodeToInsert);
    } else {
      setTail(nodeToInsert);
    }
  }
​
  void removeNodesWithValue(int value) {
    Node *node = head;
    while (node != NULL) {
      Node *nodeToRemove = node;
      node = node->next;
      if (nodeToRemove->value == value)
        remove(nodeToRemove);
    }
  }
​
  void remove(Node *node) {
    if (node == head)
      head = head->next;
    if (node == tail)
      tail = tail->prev;
    removeNodeBindings(node);
  }
​
  bool containsNodeWithValue(int value) {
    Node *node = head;
    while (node != NULL && node->value != value)
      node = node->next;
    return node != NULL;
  }
​
  void removeNodeBindings(Node *node) {
    if (node->prev != NULL)
      node->prev->next = node->next;
    if (node->next != NULL)
      node->next->prev = node->prev;
    node->prev = NULL;
    node->next = NULL;
  }
};
```

---

## Space-Time Complexity

`setHead()`, `setTail()`, `insertBefore()`, `insertAfter()`, and `remove()`:

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(1) | O(1) |

`insertAtPosition()`:

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*p*) | O(1) |

where *p* is the input position

`removeNodesWithValue()`, `containsNodeWithValue()`:

| | Time | Space |
|:---:|:---:|:---:|
|**Worse**| O(*n*) | O(1) |

where *n* is the number of nodes in the linked list

---

## Notes

:::note keep in mind

You'll only ever have direct access to the `head` or to the `tail` of a linked list. Then, you can go in either direction that you want. Because of this, you should be able to set both the `head` and the `tail` of the linked list in any point in time

We can use a lot of our methods to implement other methods. i.e. We are going to have building blocks in the construction of our linked list to make implementation of other methods a lot easier

:::

### Contains Node With Value

:::tip Contains node with value

The first method that we'll implement is our searching method, `containsNodeWithValue()`

The way that we're going to implement it is start at the `head`, traverse the linked linked list and do the check 

The psuedocode would be be, so long as the current node that we're at is not the null/None value, and so long as the current node's value is not equal to the node that we're looking for, set our pointer to our current `node.next`

:::

### Remove

:::tip Remove

Now we can move on to our removal methods. The first method that we're going to start with is the one that we'll be able to use afterwards in other methods. This method will be the simple removal of a node, `remove()`

The way that we're going to implement it is first check if `node.prev` or `node.next` are not null/None, because if we're dealing with the null/None sides of the `head` or the `tail` then we're not going to be able to access properties of those null/None, those null/None won't have a `.next` or `.prev` property, and we want to do work on the pointers so that we don't lose access to them. So, if we're dealing with the `head`, then set the `head` of the linked list to be the `.next` node of the linked list, `head = head.next`. Then, the opposite would be done for the `tail`

Next, if `node.prev` is not null/None then we'll grab it's `.next` pointer and set it to whatever node our current node's `.next` is pointing at. i.e. Go to the `.prev` node of our current node, update it's `.next` pointer to be the `.next` node of our current node. Then, do exactly the opposite, go to the `.next` node of our current node, go to it's `.prev` pointer, and update it to be the `.prev` pointer of of current node

Finally, we can set both the `.prev` and `.next` pointers of our current node to null/None

:::

### Remove Nodes With Value

:::tip Remove nodes with value

Now we're going to do the remove nodes with value, `removeNodesWithValue()`

We're going to do something similar to the searching method, we're going to start at the head of the node and we're going to say, so long as our node is not null/None, explore it. This means, look at the value of the current node and if it's not the value that we're trying to remove then we'll move along, but if it is then we're going to call our `remove()` method on it

The key point here is that we need to keep track of the node that we're about to remove, move on to the `.next` node, check if the node that we're about to remove is the same as the given node to remove, and then remove it. We basically want to be careful about losing access to nodes by removing too fast

:::

### Insert Before

:::tip Insert before

Now we move on to the insertion methods. We'll start with `insertBefore()`. So you're given a node that you want to insert before the following given node, `node`, and then you're given the actual node that you want to insert, `nodeToInsert`

The first thing that we want to do is check if we're dealing with a linked list with only one node, we'll do this by checking if `nodeToInsert` is equal to `head` and `tail`, if this is true then don't do anything. Now, if we aren't dealing with a linked list with one node then we have to account for the case that `nodeToInsert` is already in our linked list, if this is the case then we want to remove `nodeToInsert` from our linked list using our `remove()` method that we already implemented

Then, we want to set `nodeToInsert`'s `.prev` pointer to `node`'s `.prev` pointer, since remember, we have access to both nodes, then we want to set `nodeToInsert`'s `.next` pointer to `node`

So now, we need to update `node`. The first thing that we have to do is check if `node` is the `head` of the linked list because if it is and we want to insert `nodeToInsert` before `node`, then `nodeToInsert` better become the `head`

So how do we check if `node` is the head? We do this by checking if `node`'s `.prev` pointer is pointing to null/None, and if it is, then set the `head` to `nodeToInsert`. If it's not then take `node`'s `.prev.next` pointer, which normally points to `node`, and make it point to `nodeToInsert`

Finally, make `node`'s `.prev` pointer point to `nodeToInsert`. Realize that the order of operations is really important

:::

### Insert After

:::tip Insert after

The `insertAfter()` method will be exactly the same as the `insertBefore()` method except we're going to be dealing with the `tail` and be doing the opposite of the operations

:::

### Set Head

:::tip Set head

Next, we'll work on the `setHead()` method, which is sort of the main method

The first thing we'll check is if we're dealing with an empty linked list; `if head = null/None`. If this is true then we'll say `head = node` and `tail = node`

Now, if we're not dealing with an empty linked list, then we'll want to set the `head`. We just created an `insertBefore()` method so we can literally say "insert before the head of our linked list", `insertBefore(head, node)`

:::

### Set Tail

:::tip Set tail

Similarly, for the `setTail()` method we'll first check if our tail is null/None, because if it is then that means that our `head` is also null/None and that means that our linked list is empty. So, we'll just call the `setHead()` method with the `node`, `setHead(node)`

Otherwise, if it's not an empty linked list, call our `insertAfter()` method and insert the `node` after the `tail`, `insertAfter(tail, node)`. Now our implementation starts to be really clean

:::

### Insert At Position

:::tip Insert at position

Finally, we'll work on the `insertAtPosition()` method, where we're given a node that we want to insert, `nodeToInsert`, and we're given a position that we want to insert at, `position`. We're going to make use of all of our methods, so our implementation is going to be very clean

The first thing we'll check is if the `position` is equal to 1, if true then we're effectively inserting at the position of the `head` i.e. We're setting the `head`, thus making use of our `setHead()` method on our `nodeToInsert`, `setHead(nodeToInsert)`

Otherwise, if the position is not 1 then we'll set a pointer at the head of the linked list, start moving the pointer through the linked list, once we reach the `position` check if we're pointing at a node or if we're at the end of the linked list

If we're pointing at a node then this is the position that we want to insert our `nodeToInsert` at, so insert `nodeToInsert` before the `node` using our `insertBefore` method, `insertBefore(node, nodeToInsert)`

If our pointer is at the end of the linked list then now we're dealing with the `tail` and thus we'll call our `setTail()` method on `nodeToInsert`, `setTail(nodeToInsert)`

:::