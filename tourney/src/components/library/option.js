import React from 'react';

class GameOption extends React.Component {
    constructor() {
        super();
    }

    render () {
        let options = this.props.state.planets;
        let optionItems = options.map((option) =>
                <option key={option.gameName}>{option.gameName}</option>
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

export default GameOption;