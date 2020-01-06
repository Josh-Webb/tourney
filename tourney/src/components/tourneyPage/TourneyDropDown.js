import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import tourneyCard from './tourneyCard';

class LocationDropdown extends Component {
    render(){
        return (
            <option>{this.props.locationOption.address}</option>
        )
    }
}

export default withRouter (LocationDropdown);


