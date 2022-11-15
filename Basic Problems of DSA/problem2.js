// Problem 12 --- Enter the Spiral Matrix -- Write a function that accept an intger N and return a NXN spiral matrix
// Solution
function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    while (startRow <= endRow && startColumn <= endColumn) {
        // Top Row 
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        // Right Column 
        for (let i = startRow; i <= endRow; i++) {
            result[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // Bottom Row 
        for (let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // Left Column
        for (let i = endRow; i >= startRow; i--) {
            result[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return result;
}
console.log(matrix(5));

// Problem 13 --- Fibonacci Series
// Solution 1
function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        const a = result[i - 2];
        const b = result[i - 1];
        result.push(a + b);
    }
    return result[n];
}
// Solution 2
function fib1(n) {
    if (n <= 2) return 1;
    return fib1(n - 1) + fib1(n - 2);
}
console.log(fib(8));
console.log(fib1(10));

// Problem 14 -- The queue --- Create a queue data structure . The queue should be a class with method "add" & "remove"
// Solution
class Queu {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        return this.data.pop();
    }
}

// Problem 15 -- Underwater Queue Wearing -- Implement the "weave" function. We are recevies two queue as arguments
// and combines the contents of each into a new, third queue
// Solution
class Queue {
    constructor() {
        this.data = [];
    }
    add(val) {
        this.data.unshift(val);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove())
        }
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        }
    }
    return q;
}

// Problem 16 --- The Stack -- Create a stack data structure . The stack should be a class with method "add", "peak" & "remove"
// Solution
class Stack {
    constructor() {
        this.data = [];
    }
    add(val) {
        this.data.push(val);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1]
    }
}

// Problem 17 --- Two stack behave as Queue --- Implement a queue data Structure using two stacks 
// Do not create an array inside of queue class. Queue should implement the methods 'add','remove' && peek
class Queues {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        const record = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        const record = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record;
    }
}

// Problem 18 --- Linked list 
// Solution 
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

// Problem 19 --- Midpoint of a linked list -- Return the middle node of a linked list; If the list has even number
// of elements , return the node at the end of the first half of this list. Do not use the counter variable do not 
// retrieve this size of the list and only iternate through the list one time
// Solution 
function midpoint(list){
    let slow = list.head;
    let fast = list.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Problem 20 --- Detecting Linked List Loops -- Direction => Given a linked list , return true if the list is circular
// false if it not 
function circular (list){
    let slow = list.head;
    let fast = list.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow===fast){
            return true;
        }
    }
    return false;
}

// Problem 21 -- Step back from the tail -- Given a linked list and integer return the element n spaces from the 
// last node in the list. Do not call the size method of the linked list. Assume that n will always be less than 
// the length of the list
// Solution
function fromLast (list,n){
    let slow = list.head;
    let fast = list.head;
    while(n>0){
        fast = fast.next;
        n--
    }
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

// Problem 22 - Sorting
// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // Implement bubblesort
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j+1]) {
          const lesser = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = lesser;
        }
      }
    }
  
    // return the sorted array
    return arr;
  }
  
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
  
      for (let j = i+1; j <arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
          indexOfMin = j;
        }
      }
  
      if (indexOfMin !== i) {
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
  
    return arr;
  }
  
  function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
  
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const results = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }
  
    return [...results, ...left, ...right];
  }