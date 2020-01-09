import React, { Component } from 'react';
// import './tourney.css';
import { Link } from 'react-router-dom';
import TourneyCard from './tourneyCard';
import TourneyManager from '../../modules/TourneyManager';
import TourneyInvite from './tourneyInvite';

export default class TourneyList extends Component {
  state = {
    tourneys: [],

  };

  addTourney = (tournament) => {
    const newState = {};
    TourneyManager.post(tournament)
    .then(TourneyManager.getAll)
    .then(tournaments => {
      newState.tourneys = tournaments;
      this.setState(newState);
    });
  }

  deleteTourney = (id) => {
    const newState = {};
    TourneyManager.deleteTourney(id)
      .then(TourneyManager.getAll)
      .then(tourneys => {
        newState.tourneys = tourneys;
        this.setState(newState);
      });
  }


  componentDidMount() {
    const newState = {};
    TourneyManager.getAll('tourneys')
      .then(tourneys => (newState.tourneys = tourneys))
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <div className="tourneyList">
          <section className="tourneyInvite">
              <TourneyInvite
              {...this.props}
              addTourney={this.addTourney}
              
              />
          </section>
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
