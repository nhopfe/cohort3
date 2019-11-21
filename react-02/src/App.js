import React from 'react';
import './App.css';
import Homepage from './components/MyHomepage.js'
import TicTacToe from './components/MyTicTacToe.js'

import gears1 from './images/settings-gears.svg'
import gears2 from './images/two-big-gears.svg'
import ticTacToe from './images/tic-tac-toe.svg'
import home from './images/house.svg'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: home
    }
  }

  selectedElement = (event) => {
    this.setState({
      selected: event.target.name
    });
  }

  navIconMapper = () => {
    const images = [home, ticTacToe, gears1, gears2, gears1];
    return images.map((image, i) => 
    <img key={i} name={image} src={image} tabIndex={0} className={`Icon Img${i}`} alt={`Icon ${image}`} onClick={this.selectedElement} />);
  }

  pageDisplayed = () => {
    if (this.state.selected === home) {
      return < Homepage />;
    } if (this.state.selected === ticTacToe) {
      return < TicTacToe />;
    } if (this.state.selected === gears1 || this.state.selected === gears2) {
      return < Homepage />;
    }
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
        </header>
        <div className="App-Display">
          {this.pageDisplayed()}
        </div>
      </div>
    );
  }
}

export default App;
