import React from 'react';

const MyLifo = (props) => {
    const lifoDisplay = props.lifo.list.map((item, i) => {
        return (
            <div className={`lifo-card` + ((item === props.nextInLine) ? "next-lifo-card" : null)} key={i}>
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