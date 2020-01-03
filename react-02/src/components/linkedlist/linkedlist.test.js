import { ListNode, LinkedList } from './linkedlist';

test('test ListNode show', () => {
    const testListNode = new ListNode("Test Node", 1);
    expect(testListNode.show()).toBe("Current Item: Test Node, Current Item's Amount: 1.");
});

test('test LinkedList insert', () => {
    const testLinkedList = new LinkedList();
    const testNodeOne = testLinkedList.insert("Test Node One", 1);
    expect(testNodeOne).toBe(testLinkedList.head);
    expect(testNodeOne).toBe(testLinkedList.tail);
    expect(testNodeOne).toBe(testLinkedList.current);
    const testNodeTwo = testLinkedList.insert("Test Node Two", 2);
    expect(testNodeTwo).toBe(testLinkedList.tail);
    expect(testNodeTwo).toBe(testLinkedList.current);
    expect(testNodeTwo.forwardNode).toBe(null);
    expect(testNodeTwo.backwardNode).toBe(testNodeOne);
    const testNodeThree = testLinkedList.insert("Test Node Three", 3);
    expect(testNodeThree).toBe(testLinkedList.tail);
    expect(testNodeThree).toBe(testLinkedList.current);  
    expect(testNodeThree.forwardNode).toBe(null);
    expect(testNodeThree.backwardNode).toBe(testNodeTwo);
});

test('test LinkedList delete', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.delete()).toBe(null);
    const testNodeOne = testLinkedList.insert("Test Node One", 1);
    expect(testLinkedList.delete(testNodeOne)).toBe("");
    const testNodeTwo = testLinkedList.insert("Test Node Two", 2);
    const testNodeThree = testLinkedList.insert("Test Node Three", 3);
    expect(testLinkedList.delete(testNodeTwo)).toBe(testNodeThree);
    expect(testLinkedList.head).toBe(testNodeThree);
    expect(testLinkedList.tail).toBe(testNodeThree);
    expect(testLinkedList.current).toBe(testNodeThree);
    expect(testNodeThree.forwardNode).toBe(null);
    expect(testNodeThree.backwardNode).toBe(null);
});

test('test LinkedList first, previous, next, last functions', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.first()).toBe(null);
    expect(testLinkedList.last()).toBe(null);
    expect(testLinkedList.previous()).toBe(null);
    expect(testLinkedList.next()).toBe(null);
    const testNodeOne = testLinkedList.insert("Test Node One", 1);
    const testNodeTwo = testLinkedList.insert("Test Node Two", 2);
    const testNodeThree = testLinkedList.insert("Test Node Three", 3);
    expect(testLinkedList.first()).toBe(testNodeOne);
    expect(testLinkedList.last()).toBe(testNodeThree);
    expect(testLinkedList.previous(testNodeThree)).toBe(testNodeTwo);
    expect(testLinkedList.next(testNodeTwo)).toBe(testNodeThree);
});

test('test LinkedList total', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.total()).toBe(0);
    testLinkedList.insert("Test Node One", 1);
    expect(testLinkedList.total()).toBe(1);
    testLinkedList.insert("Test Node Two", 10);
    expect(testLinkedList.total()).toBe(11);
    testLinkedList.delete(testLinkedList.head);
    expect(testLinkedList.total()).toBe(10);
});