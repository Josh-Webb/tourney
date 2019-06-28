//game library cards. Generator button goes here.
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './library.css';
import collectSessStorage from '../../modules/UpdateProfileButton'
import ConnectionManager from '../../modules/ConnectionManager'


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

  addConnection = connection => 
    ConnectionManager.post(connection);


  handleOtherClick = e => {
      console.log('click', e, this.props.games.id);
      this.setState({
          saveDisabled: true
      });
      const connectionInfo = {
          game_id: this.props.games.id,
          user_id: collectSessStorage()
      }
      this.addConnection(connectionInfo);
  }

  render() {
    return (
      <div className="library-card">
        <h2>{this.props.games.gameName}</h2>
        <h6>{this.props.games.gameConsole}</h6>
        <button type="button" className="btn btn-success" onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <button type="button" className="btn btn-success" onClick={this.handleOtherClick} disabled={this.state.saveDisabled}>
          Add Game to Games Played
        </button>
        <br/><br/>
      </div>
    );
  }
}

export default withRouter (LibraryCard);
