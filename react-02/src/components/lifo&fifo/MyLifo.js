import React from 'react';

const MyLifo = (props) => {
    const lifoDisplay = props.lifo.list.map((item, i) => {
        return (
            <div className={((item === props.lifoNextItem) ? "last-added-lifo-card" : "lifo-card")} key={i}>
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