import React, { Component } from 'react';
// import './tourney.css';
import { Link } from 'react-router-dom';
import TourneyCard from './tourneyCard';
import TourneyManager from '../../modules/TourneyManager';
// import TourneyInvite from './tourneyPage/tourneyInvite';

export default class TourneyList extends Component {
  state = {
    tourneys: []
  };


  componentDidMount() {
    const newState = {};
    TourneyManager.getAll('articles')
      .then(tourneys => (newState.tourneys = tourneys))
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <div className="tourneyList">
        <section className="tourneyCard">
          {this.state.tourneys.map(item => {
            return (
              <TourneyCard
                key={item.id}
                tourneys={item}
                {...this.props}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
