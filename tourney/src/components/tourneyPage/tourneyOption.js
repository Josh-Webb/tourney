import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class TourneyOption extends Component {
    handleClick = e => {
        console.log('click', e, this.props.monday.address);
        this.setState({
            saveDisabled: true
        });

    };

    render() {
        return (
            <option className="monday">{this.props.monday.address}</option>
        )
    }
}

export default withRouter (TourneyOption);