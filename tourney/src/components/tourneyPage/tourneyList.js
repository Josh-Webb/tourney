import React, { Component } from 'react';
// import './tourney.css';
import { Link } from 'react-router-dom';
import TourneyCard from './tourneyCard';
import TourneyManager from '../../modules/TourneyManager';
import TourneyInvite from './tourneyInvite';
import LocationsManager from '../../modules/LocationsManager';

export default class TourneyList extends Component {
  state = {
    tourneys: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };

  addTourney = (tourney) =>{
    const newState = {}
    TourneyManager.post(tourney)
    .then(TourneyManager.getAll)
    .then(tourneys => {
      console.log('tourneys', tourneys);
      newState.tourneys = tourneys;
      this.setState(newState)
    })
  }

  componentDidMount() {
    const newState = {};
    TourneyManager.getAll()
      .then(tourneys => (newState.tourneys = tourneys))
      LocationsManager.getDays('monday')
      .then(mondays => (newState.monday = mondays))
      LocationsManager.getDays('tuesday')
      .then(tuesdays => (newState.tuesday = tuesdays))
      LocationsManager.getDays('wednesday')
      .then(wednesdays => (newState.wednesday = wednesdays))
      LocationsManager.getDays('thursday')
      .then(thursdays => (newState.thursday = thursdays))
      LocationsManager.getDays('friday')
      .then(fridays => (newState.friday = fridays))
      LocationsManager.getDays('saturday')
      .then(saturdays => (newState.saturday = saturdays))
      LocationsManager.getDays('sunday')
      .then(sundays => (newState.sunday = sundays))
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
