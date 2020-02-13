import React from 'react';
import { serverFunctions } from './api.js';

class CityCard extends React.Component {

    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleMovedIn = this.handleMovedIn.bind(this);
        this.handleMovedOut = this.handleMovedOut.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            changePopulation: "",
            infoDisplay: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleShow(key) {
        this.setState({
            infoDisplay: this.props.citiesArr[key].show()
        })
    }

    handleMovedIn(i) {
        if (this.state.changePopulation < 0) {
            alert("Please enter a number greater than zero!");
        }
        else {
            this.props.citiesArr[i].movedIn(Number(this.state.changePopulation));
            serverFunctions.updateServer(this.props.citiesArr[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.props.citiesArr);
    }

    handleMovedOut(i) {
        if (this.state.changePopulation < 0 || this.state.changePopulation >= this.props.population) {
            alert("Please enter a number greater than zero or less than current population!");
        }
        else {
            this.props.citiesArr[i].movedOut(Number(this.state.changePopulation));
            serverFunctions.updateServer(this.props.citiesArr[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.props.citiesArr);
    }

    handleHowBig(i) {
        this.setState({
            infoDisplay: this.props.citiesArr[i].howBig(),
        })
    }

    handleWhichSphere(i) {
        this.setState({
            infoDisplay: this.props.citiesArr[i].whichSphere(),
        })
    }

    render() {
        return (
            <div className="city-card" name="selectedCity" key={this.props.key}>
                <label className="city-card-name">
                    {this.props.name}
                </label>
                <label className="city-show">
                    {this.state.infoDisplay}
                </label>
                <input type="number" name="changePopulation" value={this.state.changePopulation} className="city-population-input" onChange={this.handleOnChange} />
                <div className="buttons-container">
                    <input type="button" value="Show" className="show-button city-button" onClick={() => this.handleShow(this.props.index)} />
                    <input type="button" value="Move In" className="movedin-button city-button" onClick={() => this.handleMovedIn(this.props.index)} />
										<input type="button" value="How Big" className="how-big-button city-button" onClick={() => this.handleHowBig(this.props.index)} />
                    <input type="button" value="Move Out" className="movedout-button city-button" onClick={() => this.handleMovedOut(this.props.index)} />
                    <input type="button" value="Show Hemisphere" className="hemisphere-show city-button" onClick={() => this.handleWhichSphere(this.props.index)} />
                    <input type="button" value="Delete City" className="delete-button city-button" onClick={() => this.props.handleDelete(this.props.index)} />
                </div>
            </div>
        )
    }
}

export default CityCard;