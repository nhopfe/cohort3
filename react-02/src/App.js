import React from 'react';
import './App.css';
import Homepage from './components/MyHomepage.js';
import TicTacToeGame from './components/MyTicTacToe.js';
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListApp from "./components/linkedlist/MyLinkedList.js"

import gears1 from './images/settings-gears.svg'
import gears2 from './images/two-big-gears.svg'
import listIcon from './images/list-svgrepo-com.svg'
import ticTacToe from './images/tic-tac-toe.svg'
import home from './images/house.svg'
import coins from './images/coins.svg'
import city from './images/modern-city.svg'


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
    const images = [home, ticTacToe, coins, city, listIcon];
    return images.map((image, i) => 
    <img key={i} name={image} src={image} tabIndex={0} className={`Icon Img${i}`} alt={`Icon ${image}`} onClick={this.selectedElement} />);
  }

  pageDisplayed = () => {
    if (this.state.selected === home) {
      return < Homepage />;
    } if (this.state.selected === ticTacToe) {
      return < TicTacToeGame />;
    } if (this.state.selected === coins) {
      return < Accounts />;
    } if (this.state.selected === city) {
      return < Cities />;
    } if (this.state.selected === listIcon) {
      return < LinkedListApp />;
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
