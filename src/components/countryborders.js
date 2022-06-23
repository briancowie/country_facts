import React from 'react';
import CountriesContainer from '../containers/countriescontainer.js';

const CountryBorders = ({selectedCountry}) => {

    return 
    <div>
    <p>{selectedCountry.borders}</p>
    </div>
    
    
    
    
    // const borders = selectedCountry.borders
    // console.log(borders)

    // return (
    //     <div>
    //         <p>jhgjhg</p>
    //     </div>
    // )

}

export default CountryBorders;