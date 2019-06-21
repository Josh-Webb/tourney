//game library cards. Generator button goes here.
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './library.css';

class LibraryCard extends Component {
    state = {
        saveDisabled: false
    };
  
  handleClick = e => {
    console.log('click', e, this.props.games.id);
    this.setState({
      saveDisabled: true
    });
    this.props.deleteGame(this.props.games.id);
  };

  render() {
    return (
      <div className="library-card">
        <h2>{this.props.games.gameName}</h2>
        <h6>{this.props.games.gameConsole}</h6>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push(`/events/${this.props.games.id}/edit`)
          }}>Edit</button>
        <br/><br/>
      </div>
    );
  }
}

export default withRouter (LibraryCard);
