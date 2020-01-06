import React from 'react';
import './App.css';
import Homepage from './components/MyHomepage.js';
import TicTacToeGame from './components/MyTicTacToe.js';
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListApp from "./components/linkedlist/MyLinkedList.js";
import LifoFifoDisplay from "./components/lifo&fifo/MyLifoFifo.js";
import Settings from "./components/settings/MySettings.js";
import { themes, ThemeContext } from "./components/MyTheme.js";

import listIcon from './images/list-svgrepo-com.svg'
import ticTacToe from './images/tic-tac-toe.svg'
import home from './images/house.svg'
import coins from './images/coins.svg'
import city from './images/modern-city.svg'
import stack from './images/stack.svg'
import gears from './images/settings-gears.svg'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: home,
      theme: themes.gradient,
      themeValue: "gradient",
    }
  }

  selectedElement = (event) => {
    this.setState({
      selected: event.target.name
    });
  }

  navIconMapper = () => {
    const images = [home, ticTacToe, coins, city, listIcon, stack, gears];
    return images.map((image, i) => 
    <img key={i} name={image} src={image} tabIndex={0} className={`Icon Img${i}`} alt={`Icon ${image}`} onClick={this.selectedElement} />);
  }

  handleSettingsChange = (event) => {
    this.setState({
      theme: themes[event.target.value],
      themeValue: event.target.value,
    })
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
    } if (this.state.selected === stack) {
      return < LifoFifoDisplay />;
    } if (this.state.selected === gears) {
      return < Settings 
        handleSettingsChange={this.handleSettingsChange}
        themeValue={this.state.themeValue}/>;
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
          <ThemeContext.Provider value={this.state.theme}>
            {this.pageDisplayed()}
          </ThemeContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
