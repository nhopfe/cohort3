import React from 'react';

const MyFifo = (props) => {
    const fifoDisplay = props.fifo.list.map((item, i) => {
        return (
            <div className={((item === props.fifoLastAddedItem) ? "last-added-fifo-card" : "fifo-card")} key={i}>
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