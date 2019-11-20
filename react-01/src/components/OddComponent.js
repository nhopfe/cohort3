import React from 'react';

class Odd extends React.Component {

    render() {
                if (this.props.count % 2 === 0)
                    return null;
                return (
                    <div>
                        <h1>Hello World from Odd</h1>
                    </div>
                )
    }
}

export default Odd;