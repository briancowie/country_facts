import React from 'react';


const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
        
    
    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.common}</option>
    }) 
    // console.log(countryOptions);
    
    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" disabled>Choose a country</option>
            {countryOptions}
        </select>
    )

}

export default CountrySelector;


















//LABEL
// const CountryDropdown = () => {
//     <label for='countries'>Choose a country:</label>
// }