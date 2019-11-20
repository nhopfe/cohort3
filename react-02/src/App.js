import React from 'react';
import logo from './logo.svg';
import './App.css';
import gears1 from './images/settings-gears.svg'
import gears2 from './images/two-big-gears.svg'


class App extends React.Component {
  navIconMapper = () => {
    const images = [gears1, gears2, gears1, gears2, gears1];
    return images.map((image, i) => <img key={i} name={image} src={image} tabIndex={0} className={`Icon Img${i}`} alt={`Icon ${image}`} /*onClick={this.selectedElement}*/ />);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Row">
            <div className="Column">
              {this.navIconMapper()}
            </div>
          </div>
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
        </header>
      </div>
    );
  }
}

export default App;
