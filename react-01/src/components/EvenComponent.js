import React from 'react';

class Even extends React.Component {

    render() {
                if (this.props.count % 2 !== 0)
                    return null;
                return (
                    <div>
                        <h1>Hello World from Even</h1>
                    </div>
                )
    }
}

export default Even;