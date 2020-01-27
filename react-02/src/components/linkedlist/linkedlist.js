export class ListNode {

    constructor(subject, amount) {
        this.subject = subject;
        this.amount = Number(amount);
        this.forwardNode = null;
        this.backwardNode = null;
    }

    show() {
        return `Current Item: ${this.subject} Current Item's Amount: ${this.amount}.`
    }
};

export class LinkedList {

    // -- Chose Doubly-LinkedList --- 
    // Reasoning:   Doubly-liked allows searches in both directions, imroving both
    //              functionality and performance. 

    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    insert(subject, amount) {
        let newListNode = new ListNode(subject, amount);
        if (!this.current) {
            this.head = newListNode;
            this.tail = newListNode;
            this.current = newListNode;
            return newListNode;
        } else if (this.current === this.tail) {
            this.current.forwardNode = newListNode;
            newListNode.backwardNode = this.current;
            this.tail = newListNode;
            this.current = newListNode;
            newListNode.forwardNode = null;
            return newListNode;
        } else {
            newListNode.backwardNode = this.current;
            newListNode.forwardNode = this.current.forwardNode;
            this.current.forwardNode = newListNode;
            newListNode.forwardNode.backwardNode = newListNode;
            this.current = newListNode;
            return newListNode;
        }
    }

    delete(node) {
        if (!node) {
            return null
        }
        else {
            let newNext = node.forwardNode;
            let newPrev = node.backwardNode;
            if (node === this.head && node === this.tail) {
                this.head = null;
                this.tail = null;
                this.current = null;
                node = null;
                return "";
            }
            if (node === this.head) {
                this.head = newNext;
                this.head.backwardNode = null;
                this.current = this.head;
                node = null;
                return this.head;
            }
            if (node === this.tail) {
                this.tail = newPrev;
                this.tail.forwardNode = null;
                this.current = this.tail;
                node = null;
                return this.tail;
            }
            else {
                let newCurrentNode = newPrev;
                newCurrentNode.forwardNode = newNext;
                newNext.backwardNode = newCurrentNode;
                this.current = newCurrentNode;
                node = null;
                return newCurrentNode;
            }
        }
    }

    first() {
        if (!this.head) {
            return null;
        }
        this.current = this.head;
        return this.head;
    }

    last() {
        if (!this.tail) {
            return null;
        }
        this.current = this.tail;
        return this.tail;
    }

    next(node) {
        if (!node) {
            return null;
        }
        else if (!node.forwardNode) {
            this.current = node;
            return node;
        }
        else {
            let nextNode = node.forwardNode;
            this.current = nextNode;
            return nextNode;
        }
    }

    previous(node) {
        if (!node) {
            return null;
        }
        else if (!node.backwardNode) {
            this.current = node;
            return node;
        }
        else {
            let prevNode = node.backwardNode;
            this.current = prevNode;
            return prevNode;
        }
    }

    total() {
        if (!this.head) {
            return 0;
        }
        else {
            let currentNode = this.head;
            let totalNumber = 0;
            while (currentNode) {
                totalNumber += currentNode.amount;
                currentNode = currentNode.forwardNode;
            }
            return totalNumber;
        }
    }
};