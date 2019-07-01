//home for library cards and form.
import React, { Component } from 'react';
// import './library.css';
import { Link } from 'react-router-dom';
import LibraryCard from './libraryCard';
import LibraryForm from './libraryForm'
import LibraryManager from '../../modules/LibraryManager';
import ConnectionManager from '../../modules/ConnectionManager'

export default class LibraryList extends Component {
  state = {
    games: [],
    users: [],
    addressArray: [],
    
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

  addGame = (game) => {
    const newNewState = {};
    LibraryManager.post(game)
    .then(LibraryManager.getAll)
    .then(games => {
      console.log('games', games);
      newNewState.games = games;
      this.setState(newNewState);
    });
}
// componentDidMount() {

//     LibraryManager.getAll().then(allGames => {
//         console.log(allGames);
//         const storedData = sessionStorage.getItem('credentials');
//         const storedObject = JSON.parse(storedData);
//         const connection = ConnectionManager.getAll().then(allConnections => {
//                 return allConnections
//             });
//         const connectionsObj = JSON.parse(connection);
//         const userGames = allGames.filter(games => {
//             return connectionsObj.game_id === games.id
//         })
//         console.log(storedObject, userGames)
//         this.setState({
//             games: userGames
//         })
//     })
      
//   }

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
                <LibraryForm
                {...this.props}
                addGame={this.addGame} />
            </section>
        <section className="libraryCard">
          {this.state.games.map(item => {
            return (
              <LibraryCard
                key={item.id}
                games={item}
                {...this.props}
                deleteGame={this.deleteGame}
                addGame={this.addGame}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
