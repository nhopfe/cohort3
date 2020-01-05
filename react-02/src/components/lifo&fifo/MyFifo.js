import React from 'react';
import './lifofifo.css';

const MyFifo = (props) => {
    const fifoDisplay = props.fifo.list.map((item, i) => {
        return (
            <div className={`fifo-card` + ((item === props.fifoLastAddedItem) ? "last-added-fifo-card" : null)} key={i}>
                <span className="fifo-card-text">{item}</span>
            </div>
        )
    });

    return (
        <div className="fifo-display">
            {fifoDisplay}
        </div>
    )
};

export default MyFifo;