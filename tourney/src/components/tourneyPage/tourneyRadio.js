import React from 'react';

class Planet extends React.Component {
    constructor() {
        super();
    }

    render () {
        let planets = this.props.state.addresses;
        let optionItems = planets.map((planet) =>
                <option key={planet.locationAddress}>{planet.locationAddress}</option>
            );

        return (
         <div>
             <select>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Planet;