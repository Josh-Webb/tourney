//library add game form.
import React, { Component } from 'react';
// import LibraryList from '/libraryList'
import TourneyManager from '../../modules/TourneyManager';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import LocationsManager from '../../modules/LocationsManager';
import LibraryManager from '../../modules/LibraryManager';


export default class TourneyInvite extends Component {
    state = {
      name: "",
      game: "",
      locationAddress: "",
      date: "",
      addresses: [],
      games: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    
    componentDidMount() {
        LocationsManager.getAll()
            .then(addresses => this.setState({addresses}))
            LibraryManager.getAll()
                .then(games => this.setState({games}))
                
    }
   
    
    saveNewTourney = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.game === "" || this.state.date === "") {
            window.alert("Please input a name, a game, a location and a date.")
        } else {
        const tourney = {
            name: this.state.name,
            game: this.state.game,
            locationAddress: this.state.venue,
            date: this.state.date
        };

        this.props.addTourney(tourney)
    }};

    render() {
        return(
            <React.Fragment>
                <form className="gameForm">
                    <div className="form-group">
                        <label htmlFor="name">Name Your Tournament</label>
                        <input type="text"
                       
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Name Your Tournament"
                        
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="game">Game</label>
                        <select
                        name="game"
                        onChange={this.handleFieldChange}
                        id="venue"
                        value={this.game}
                        className="form-control"
                        >
                            <option key="gameselect">Select a Game</option>
                            {this.state.games.map(game => <option key={game.id} value = {game.gameName}>{game.gameConsole}  ---  {game.gameName}</option>)}
                        </select>
                    </div>
                    <div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label> 
                        <input type="date"
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="YYYY/MM/DD"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Venue</label>
                        <select 
                        name="address"
                        onChange={this.handleFieldChange}
                        id="venue"
                        value={this.locationAddress}
                        className="form-control"
                        >
                            <option key="locationselect">Select a Venue</option>
                            {this.state.addresses.map(address => <option key={address.id} value={address.address}>{address.address}</option>)}
                        </select>
                    </div>

                     <button
                     className="btn btn-primary"
                     onClick={this.saveNewTourney}>
                         Submit
                     </button>
                     
                     
                </form>
            </React.Fragment>
        )
    }
}
