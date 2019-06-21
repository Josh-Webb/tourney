import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import GameOption from './option';

class LibraryOption extends Component {

    render() {
        return (
            <option
            key={this.props.gameArray.gameName}>{this.props.gameArray.gameName}</option>
        )
    }
}
export default LibraryOption