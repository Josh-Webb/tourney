// //library add game form.
// import React, { Component } from 'react';
// // import LibraryList from '/libraryList'
// import TourneyManager from '../../modules/LibraryManager';
// import Radio from '../../modules/RadioButton';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
// import LocationsManager from '../../modules/LocationsManager';
// import Planet from './tourneyRadio'


// export default class TourneyInvite extends Component {
//     state = {
//       name: '',
//       game: '',
//       locationAddress: '',
//       date: '',
//       addresses: []
//     };


   
    
//     saveNewTourney = evt => {
//         evt.preventDefault();

//         const tourney = {
//             name: this.state.name,
//             game: this.state.game,
//             locationAddress: this.state.locationAddress,
//             date: ''
//         };

//         this.props.addTournament(tourney)
//     };

    
    

//     handleFieldChange = evt => {
//         const stateToChange = {};
//         stateToChange[evt.target.id] = evt.target.value;
//         this.setState(stateToChange);
//     };

    
//     componentDidMount(){
//     let initialAddresses = [];
//     LocationsManager.getAll()
//         // .then(response => {
//         //     return response.json
//         .then(data => {
//             initialAddresses = data.map((locationAddress) => {
//                 return locationAddress
//             });
//             console.log(initialAddresses)
//             this.setState({
//                 addresses: initialAddresses,
//             });
//         });
//     }
//     render() {
//         return(
//             <React.Fragment>
//                 <form className="gameForm">
//                     <div className="form-group">
//                         <label htmlFor="name">Name Your Tournament</label>
//                         <input type="text"
//                         required
//                         className="form-control"
//                         onChange={this.handleFieldChange}
//                         id="name"
//                         placeholder="Name Your Tournament"
                        
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="game">Game</label>
//                         <input type="text"
//                         required
//                         className="form-control"
//                         onChange={this.handleFieldChange}
//                         id="game"
//                         placeholder="Game"
//                         />
//                     </div>
//                     <Planet />
//                     {/* {function () {
//         let planets = this.state.addresses;
//         let optionItems = planets.map((planet) =>
//                 <option key={planet.locationAddress}>{planet.locationAddress}</option>
//             );

//         return (
//          <div>
//              <select>
//                 {optionItems}
//              </select>
//          </div>
//         )
//     }
// } */}
                    
//                      <button
//                      className="btn btn-primary"
//                      onClick={this.saveNewGame}>
//                          Submit
//                      </button>
                     
//                 </form>
//             </React.Fragment>
//         )
//     }
// }