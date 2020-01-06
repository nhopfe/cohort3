import React, { useState } from 'react';
import { Lifo, Fifo, LifoFifoItemList } from './lifofifo.js';
import MyLifo from './MyLifo.js';
import MyFifo from './MyFifo.js';
import './lifofifo.css';
import { ThemeContext } from '../MyTheme.js';

const itemList = new LifoFifoItemList();
const lifo = new Lifo();
const fifo = new Fifo();

const LifoFifoDisplay = () => {
    let [itemBeingAdded, setItemBeingAdded] = useState(itemList.nextInLine());
    let [fifoNextItem, setFifoNextItem] = useState(fifo.nextInLine());
    let [lifoNextItem, setLifoNextItem] = useState(lifo.nextInLine());
    let [fifoLastAddedItem, setFifoLastAddedItem] = useState(fifo.lastAdded());
    let [fifoItemRemoved, setFifoItemRemoved] = useState("");
    let [lifoItemRemoved, setLifoItemRemoved] = useState("");

    const handleAddItem = () => {
        fifo.add(itemBeingAdded);
        lifo.add(itemBeingAdded);
        itemList.remove(itemBeingAdded);
        setItemBeingAdded(itemBeingAdded = itemList.nextInLine());
        setFifoNextItem(fifoNextItem = fifo.nextInLine());
        setLifoNextItem(lifoNextItem = lifo.nextInLine());
        setFifoLastAddedItem(fifoLastAddedItem = fifo.lastAdded());
    }

    const handleRemoveItem = () => {
        fifo.remove(fifoNextItem);
        lifo.remove(lifoNextItem);
        itemList.add(fifoNextItem);
        setFifoItemRemoved(fifoItemRemoved = fifoNextItem);
        setLifoItemRemoved(lifoItemRemoved = lifoNextItem);
        setFifoNextItem(fifoNextItem = fifo.nextInLine());
        setLifoNextItem(lifoNextItem = lifo.nextInLine());
    }


    return (
        <div className="lifofifo-wrapper">
            <div className="container">
                <div className="lifo-column">
                    <span className="lifo-header">LIFO</span><br></br><br></br>
                    <div className="lifo-list">
                        < MyLifo lifo={lifo} lifoNextItem={lifoNextItem} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="item-list-column">
                    <span className="item-list-header">Add/Remove Items</span><br></br><br></br>
                    <span className="item-text">Next Item to be Added: {itemBeingAdded}</span><br></br><br></br>
                    <button className="add-item-button" onClick={() => handleAddItem()}>Add Item to LIFO and FIFO</button><br></br><br></br>
                    <span className="item-text">Next Item to be Removed from LIFO: </span><br></br>
                    <span className="item-text">{lifoNextItem}</span><br></br>
                    <span className="item-text">Next Item to be Removed from FIFO: </span><br></br>
                    <span className="item-text">{fifoNextItem}</span><br></br><br></br>
                    <button className="remove-item-button" onClick={() => handleRemoveItem()}>Remove Next Item from LIFO and FIFO</button><br></br><br></br>
                    <span className="item-text">Last Item Removed from LIFO: </span><br></br>
                    <span className="item-text">{lifoItemRemoved}</span><br></br>
                    <span className="item-text">Last Item Removed from FIFO: </span><br></br>
                    <span className="item-text">{fifoItemRemoved}</span>
                </div>
            </div>
            <div className="container">
                <div className="fifo-column">
                    <span className="fifo-header">FIFO</span><br></br><br></br>
                    <div className="fifo-list">
                        < MyFifo fifo={fifo} fifoLastAddedItem={fifoLastAddedItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifoFifoDisplay;