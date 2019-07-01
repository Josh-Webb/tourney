import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import './tourney.css';
class TourneyCard extends Component {
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
        <h2>{this.props.tourneys.name}</h2>
        <h6>{this.props.tourneys.game}</h6>
        <h3>{this.props.tourneys.date}</h3>
        
        <h5>{this.props.tourneys.locationAddress}</h5>
        
        <br/>
        {/* <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button> */}
        <br/><br/>
      </div>
    );
  }
}

export default withRouter (TourneyCard);
