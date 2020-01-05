import React from 'react';
import './lifofifo.css';

const MyLifo = (props) => {
    const lifoDisplay = props.lifo.list.map((item, i) => {
        return (
            <div className={`lifo-card` + ((item === props.lifoNextItem) ? "last-added-lifo-card" : null)} key={i}>
                <span className="lifo-card-text">{item}</span>
            </div>
        )
    });

    return (
        <div className="lifo-display">
            {lifoDisplay}
        </div>
    )
};

export default MyLifo;