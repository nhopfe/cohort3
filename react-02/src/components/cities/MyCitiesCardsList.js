import React from 'react';
import CityCard from "./MyCitiesCard.js";

class CityCardsList extends React.Component {

    render() {
        const cityList = this.props.citiesArr.map((city, i) => {
            return <CityCard
                citiesArr={this.props.citiesArr}
                index={i}
                key={city.key}
                name={city.name}
                latitude={city.latitude}
                longitude={city.longitude}
                population={city.population}
                handleDelete={this.props.handleDelete}
                cityChecker={this.props.cityChecker}
            />
        })

        return (
            <div className="city-display">
                {cityList}
            </div>
        )
    }
}

export default CityCardsList;