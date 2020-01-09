import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import './tourney.css';
class TourneyCard extends Component {
  state = {
    saveDisabled: false
  };


  handleClick = e => {
    console.log('click', e, this.props.tourneys.id);
    this.setState({
      saveDisabled: true
    });
    this.props.deleteTourney(this.props.tourneys.id);
  };

  render() {
    return (
      <div className="tourney-card">
        <h2 className="tourneyName">{this.props.tourneys.name}</h2>
        <h6 className="tourneyGame">{this.props.tourneys.game}</h6>
        <h3 className="tourneyDate">{this.props.tourneys.date}</h3>
        
        <h5 className="tourneyAddress">{this.props.tourneys.locationAddress}</h5>
        
        
         <button onClick={this.handleClick} disabled = {this.state.saveDisabled}>
          Delete
        </button> 
        
      </div>
    );
  }
}

export default withRouter (TourneyCard);
