import { LifoOrFifoParent, Lifo, Fifo, LifoFifoItemList } from './lifofifo.js';

describe('testing LifoOrFifoParent class', () => {
    test('testing add function', () => {
        const testParent = new LifoOrFifoParent();
        expect(testParent.list[testParent.list.length -1]).toBe("truffles");
        testParent.add("Item1");
        expect(testParent.list[testParent.list.length -1]).toBe("Item1");
    });
});

describe('testing Lifo class', () => {
    test('test remove function', () => {
        const testLifo = new Lifo();
        testLifo.add("Item1");
        testLifo.add("Item2");
        expect(testLifo.remove()).toBe("Item2");
        expect(testLifo.remove()).toBe("Item1");
    });

    test('test nextInLine function', () => {
        const testLifo = new Lifo();
        testLifo.add("Item1");
        expect(testLifo.nextInLine()).toBe("Item1");
        testLifo.add("Item2");
        expect(testLifo.nextInLine()).toBe("Item2");
    });
});

describe('testing Fifo class', () => {
    test('test remove function', () => {
        const testFifo = new Fifo();
        expect(testFifo.list[0]).toBe("jellyroll");
        expect(testFifo.remove()).toBe("jellyroll");
        expect(testFifo.list[0]).toBe("key lime pie");        
    });

    test('test nextInLine function', () => {
        const testFifo = new Fifo();
        expect(testFifo.nextInLine()).toBe("jellyroll");
        testFifo.list.unshift("Item1");
        expect(testFifo.nextInLine()).toBe("Item1");
    });
});

describe('testing LifoFifoItemList class', () => {
    test('test add function', () => {
        const testList = new LifoFifoItemList();
        expect(testList.add("Item1")).toBe("Item1");
        expect(testList.add("Item2")).toBe("Item2");
        expect(testList.list[testList.list.length -1]).toEqual("Item2");
    });
    
    test('test remove function', () => {
        const testList = new LifoFifoItemList();
        testList.list.unshift("Item1");
        testList.list.unshift("Item2");
        expect(testList.list[0]).toEqual("Item2");
        expect(testList.remove()).toBe("Item2");
        expect(testList.remove()).toBe("Item1");
    });
    
    test('test nextInLine function', () => {
        const testList = new LifoFifoItemList();
        expect(testList.nextInLine()).toBe("almond cookie");
        testList.list.unshift("Item1");
        expect(testList.nextInLine()).toBe("Item1");
    });
});