import React from 'react'
import logo from 'C:/code/cohort3/react-02/src/logo.svg';
import { ThemeContext } from '../MyTheme.js';

class Homepage extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <div className="Homepage" style={{ background: theme.background }}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                    </a>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Homepage;