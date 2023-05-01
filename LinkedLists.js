"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    const previous = this.get(index - 1);
    const temp = previous.next;
    previous.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = previous;
      previous = temp;
      temp = next;
    }
    return this;
  }
}

// Testing push()
let myLinkedList1 = new LinkedList(7);
myLinkedList1.push(4);

// Testing pop()
let myLinkedList2 = new LinkedList(5);
myLinkedList2.push(7);
myLinkedList2.pop();

// Testing Unshift()
let myLinkedList3 = new LinkedList(11);
myLinkedList3.push(3);
myLinkedList3.push(23);
myLinkedList3.push(7);
myLinkedList3.unshift(4);


// Testing shift()
let myLinkedList4 = new LinkedList(2);
myLinkedList4.push(1);
myLinkedList4.shift();


// Testing get()
let myLinkedList5 = new LinkedList(0);
myLinkedList5.push(1);
myLinkedList5.push(2);
myLinkedList5.push(3);
myLinkedList5.get(2);


// Testing set()
let myLinkedList6 = new LinkedList(11);
myLinkedList6.push(3);
myLinkedList6.push(23);
myLinkedList6.push(7);
myLinkedList6.set(1, 4);


// Testing insert()
let myLinkedList7 = new LinkedList(0);
myLinkedList7.push(2);
myLinkedList7.insert(1, 1);


// Testing remove()
let myLinkedList8 = new LinkedList(11);
myLinkedList8.push(3);
myLinkedList8.push(23);
myLinkedList8.push(7);
myLinkedList8.remove(2);


// Testing reverse()
let myLinkedList9 = new LinkedList(1);
myLinkedList9.push(2);
myLinkedList9.push(3);
myLinkedList9.reverse();
