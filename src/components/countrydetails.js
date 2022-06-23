import React from 'react';
import CountriesContainer from '../containers/countriescontainer.js';

const CountryDetails = ({selectedCountry, countries}) => {
    
    const borders = selectedCountry.borders

    const bordersList = borders.map((border, index) => {
        
        return (
            <li key={index}>{border}</li>
        )
    })
    
    return (
        <div>
            <p>{selectedCountry.flag}</p>
            <h1>{selectedCountry.name.common}</h1>
            <h2>{selectedCountry.name.official}</h2>
            <ul>{bordersList}</ul>
        </div>
    )

}

export default CountryDetails;