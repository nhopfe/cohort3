import React, { useState } from 'react';
import './linkedlist.css';
import { ThemeContext } from '../MyTheme.js';
import { AppContext } from '../AppContext.js';

const LinkedListApp = () => {
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");

    const themeContext = React.useContext(ThemeContext);
    const appContext = React.useContext(AppContext);

    const handleInsert = (event) => {
        if (subject === "" || amount === "") {
            alert("Please enter a subject and/or amount!");
            event.preventDefault();
        }
        else {
            appContext.handleStateChange([{ state: "current", newState: appContext.linkedList.insert(subject, amount) }])
            setSubject("");
            setAmount("");
            event.preventDefault();
        }
    }

    const displayNodes = (list) => {
        if (!list.head) {
            return null;
        }
        else {
            let currentNode = list.head;
            let displayedNodes = [];
            let counter = 1;
            while (currentNode) {
                displayedNodes.push(
                    < ListCard
                        node={currentNode}
                        key={counter}
                    />
                )
                counter++;
                currentNode = currentNode.forwardNode;
            }
            return displayedNodes;
        }
    }

    const ListCard = (props) => (
        <div className={`list-card ` + ((props.node === appContext.linkedList.current) ? "active-list-card" : null)}>
            <span className="list-card-text">Subject: {props.node.subject}</span>
            <span className="list-card-text">Amount: {props.node.amount}</span>
        </div>
    )

    return (
        <div className="list-wrapper" style={{ background: themeContext.theme.background }}>
            <div className="create-node-display-wrapper">
                <div className="create-node-display-header">
                    Add Item to Linked List
            </div>
                <div className="create-node-display">
                    <form onSubmit={(event) => handleInsert(event)}>
                        <label className="create-node-text">Subject:</label>
                        <input type="text" name="nodeSubject" placeholder="subject name" className="create-node-subject-input"
                            value={subject} onChange={(event) => setSubject(event.target.value)} />
                        <label className="create-node-text">Amount:</label>
                        <input type="number" name="nodeAmount" placeholder="item amount" className="create-node-amount-input"
                            value={amount} onChange={(event) => setAmount(event.target.value)} />
                        <input type="submit" value="Create Item" className="list-button create-list-button" />
                    </form>
                </div>
            </div>
            <div className="list-info">
                <div className="list-current-show">
                    {(appContext.linkedList.current) ? appContext.linkedList.current.show() : null}
                </div>
                <div className="list-total-amounts">
                    Total of All Amounts: {appContext.linkedList.total()}
                </div>
            </div>
            <div className="list-navbar">
                <input type="submit" value="First Item" className="list-button"
                    onClick={() => appContext.handleStateChange([{ state: "current", newState: appContext.linkedList.first() }])}
                />
                <input type="submit" value="Previous Item" className="list-button"
                    onClick={() => appContext.handleStateChange([{ state: "current", newState: appContext.linkedList.previous(appContext.linkedList.current) }])}
                />
                <input type="submit" value="Delete Current Item" className="list-button delete-button"
                    onClick={() => appContext.handleStateChange([{ state: "current", newState: appContext.linkedList.delete(appContext.linkedList.current) }])}
                />
                <input type="submit" value="Next Item" className="list-button"
                    onClick={() => appContext.handleStateChange([{ state: "current", newState: appContext.linkedList.next(appContext.linkedList.current) }])}
                />
                <input type="submit" value="Last Item" className="list-button"
                    onClick={() => appContext.handleStateChange([{ state: "current", newState: appContext.linkedList.last(appContext.linkedList.current) }])}
                />
            </div>
            <div className="list-display">
                {displayNodes(appContext.linkedList)}
            </div>
        </div>
    )
}

export default LinkedListApp;