//library add game form.
import React, { Component } from 'react';
// import LibraryList from '/libraryList'
import TourneyManager from '../../modules/LibraryManager';
import Radio from '../../modules/RadioButton';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import LocationsManager from '../../modules/LocationsManager';
import Planet from './tourneyRadio'


export default class TourneyInvite extends Component {
    state = {
      name: '',
      game: '',
      locationAddress: '',
      date: '',
      addresses: []
    };

    

   
    
    saveNewTourney = evt => {
        evt.preventDefault();

        const tourney = {
            name: this.state.name,
            game: this.state.game,
            locationAddress: this.state.venue,
            date: this.state.date
        }

        this.props.addTourney(tourney)
    };

    randomMonday = e => {
        console.log('click', e, this.props.monday);
        var rand = this.props.monday[Math.floor(Math.random() * this.props.monday)]
        console.log(rand, 'rand')
        }

        

    

    
    

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
                        <input type="text"
                        
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="game"
                        placeholder="Game"
                        />
                    </div>
                    <div>
                    </div>
                    {/* <div>
                    {this.buildOption('monday')}
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="date">Date</label> 
                        <input type="text"
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="venue">Venue</label>
                        <input type="text"
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="venue"
                        placeholder="Venue" />
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
