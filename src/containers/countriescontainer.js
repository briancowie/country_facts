import React, {useEffect, useState} from "react";
import CountriesHeader from '../components/header.js';
import CountrySelector from '../components/countryselector.js';
import CountryDetails from '../components/countrydetails.js';
//import CountryBorders from '../components/countryborders.js';

const CountriesContainer = () => {
    const [countryFacts, setCountryFacts] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)


    useEffect (() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountryFacts(data))
        
    }, [])

    const onCountrySelected = function(country) {
        setSelectedCountry(country)
    }

    // if (countryFacts.length>0) {
    //  console.log(countryFacts[0].name)
    // }






    return (
        <div>
            <CountriesHeader/>
            <CountrySelector countries={countryFacts} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetails selectedCountry={selectedCountry} countries={countryFacts}/>  : null}
            
        </div>
        
    )
   
}

export default CountriesContainer;