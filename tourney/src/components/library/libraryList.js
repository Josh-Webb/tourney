//home for library cards and form.
import React, { Component } from 'react';
import './library.css';
import { Link } from 'react-router-dom';
import LibraryCard from './libraryCard';
import LibraryForm from './libraryForm'
import LibraryManager from '../../modules/LibraryManager';

export default class LibraryList extends Component {
  state = {
    games: []
  };

  deleteGame = id => {
    const newState = {};
    LibraryManager.deleteGame(id)
      .then(LibraryManager.getAll)
      .then(games => {
        console.log('games', games);
        newState.games = games;
        this.setState(newState);
      });
  };

  componentDidMount() {
    const newState = {};
    LibraryManager.getAll('games')
      .then(games => (newState.games = games))
      .then(() => this.setState(newState));
  }

  render() {
    return (
        <div className="library">
            <section className="libraryForm">
                <LibraryForm />
            </section>
        <section className="libraryCard">
          {this.state.games.map(item => {
            return (
              <LibraryCard
                key={item.id}
                games={item}
                {...this.props}
                deleteGame={this.deleteGame}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
