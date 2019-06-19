//library add game form.
import React, { Component } from 'react';
import LibraryManager from '../../modules/LibraryManager';

export default class LibraryForm extends Component {
    state = {
      gameName: '',
      gameConsole: ''
    };

    addGame = game => {
        const newNewState = {};
        LibraryManager.post(game)
        .then(LibraryManager.getAll)
        .then(games => {
          console.log('games', games);
          newNewState.games = games;
          this.setState(newNewState);
        });
    }
    saveNewGame = evt => {
        evt.preventDefault();

        const game = {
            gameName: this.state.gameName,
            gameConsole: this.state.gameConsole
        };

        this.addGame(game)
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    

    render() {
        return(
            <React.Fragment>
                <form className="gameForm">
                    <div className="form-group">
                        <label htmlFor="gameName">Game Title</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="gameName"
                        placeholder="Game Title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gameConsole">Game Console</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="gameConsole"
                        placeholder="Game Console"
                        />
                    </div>
                    
                     <button
                     className="btn btn-primary"
                     onClick={this.saveNewGame}>
                         Submit
                     </button>
                     
                </form>
            </React.Fragment>
        )
    }
}