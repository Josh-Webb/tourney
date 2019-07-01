//game library cards. Generator button goes here.
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import './library.css';
import collectSessStorage from '../../modules/UpdateProfileButton'
import ConnectionManager from '../../modules/ConnectionManager'
import UserManager from '../../modules/UserManager'
// import generator from '../../modules/Generator'
import parseGameIds from "../../modules/ParseGameId"
import ParsePlayerDays from '../../modules/ParsePlayerDays'
import Generator2 from '../../modules/Generator2'
import ParsePlayerIds from '../../modules/ParseGameId'
import './library.css'


class LibraryCard extends Component {
    state = {
        saveDisabled: false,
        playerIds: [],
        validAddresses: [],
        dayToPlay: ' '
    };
  
  handleClick = e => {
    console.log('click', e, this.props.games.id);
    this.setState({
      saveDisabled: true
    });
    this.props.deleteGame(this.props.games.id);
  };

  addConnection = connection => 
    ConnectionManager.post(connection);

  
    ParsePlayerIds = (gameId) => {
        ConnectionManager.getAll()
            .then(connections => {
                const loopArray1 = [];
                // console.log("connections", connections)
                // console.log(connections.length)
                let arrayLength = connections.length
                console.log(arrayLength, "arrayLength var")
                for (let i = 1; i < arrayLength; i++) {
                    if (gameId === connections[i].game_id) {
                        console.log([i], connections[i].game_id,'<game_id', connections[i].user_id,'<user_id')
                        loopArray1.push(connections[i].user_id)
                        console.log(loopArray1, 'playerIdArray')
                    } else {
                        console.log('nope')
                    } 
                }console.log(loopArray1, 'looparray2')
                this.setState({
                    playerIds: loopArray1
                }) 
                return loopArray1
                
                })
                .then(arrayarino => {
                    console.log(this.state.playerIds, arrayarino, "arrayarino")
                    this.ParseDayAddresses(arrayarino)
                }).then(dayStuff => {
                        console.log(dayStuff, "daystuff")
                        const parsedDayStuff = JSON.parse(dayStuff)
                        const dayInput = parsedDayStuff[0];
                        console.log(dayInput)
                        const addresses = parsedDayStuff.shift();
                        this.setState({
                            validAddresses: addresses,
                            winnerDay: dayInput
                        })
                    })
                }
            

    ParseDayAddresses = (array) => {
        // let winnerArray = [];
        let mondayAddressesArray = [{day: "monday"}];
            let tuesdayAddressesArray = [{day: "tuesday"}];
            let wednesdayAddressesArray = [{day: "wednesday"}];
            let thursdayAddressesArray = [{day: "thursday"}];
            let fridayAddressesArray = [{day: "friday"}];
            let saturdayAddressesArray = [{day: "saturday"}];
            let sundayAddressesArray = [{day: "sunday"}];
            let allAddressesArray = [mondayAddressesArray, tuesdayAddressesArray, wednesdayAddressesArray, thursdayAddressesArray, fridayAddressesArray,saturdayAddressesArray, sundayAddressesArray]
            let orderedAddressesArray = ((allAddressesArray.sort(function(a,b){return b.length - a.length})))
            let winnerArray = [orderedAddressesArray[0]]
            
        array.forEach(function(element) {
                console.log(element)
                UserManager.getId(element)
                .then(grabedUser => {
                    console.log(grabedUser.checkboxes.monday)
                    if (grabedUser.checkboxes.monday === true) {
                        
                        mondayAddressesArray.push(grabedUser.address);
                    
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.tuesday)
                    if (grabedUser.checkboxes.tuesday === true) {
                        
                        tuesdayAddressesArray.push(grabedUser.address)
                    
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.wednesday)
                    if (grabedUser.checkboxes.wednesday === true) {
            
                        wednesdayAddressesArray.push(grabedUser.address)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.thursday)
                    if (grabedUser.checkboxes.thursday === true) {
            
                        thursdayAddressesArray.push(grabedUser.address)
                    
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.friday)
                    if (grabedUser.checkboxes.friday === true) {
    
                        fridayAddressesArray.push(grabedUser.address)

                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.saturday)
                    if (grabedUser.checkboxes.saturday === true) {

                        saturdayAddressesArray.push(grabedUser.address)

                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.sunday)
                    if (grabedUser.checkboxes.sunday === true) {
                        sundayAddressesArray.push(grabedUser.address)

                    } else {
                        console.log("false")
                    };
                    console.log(mondayAddressesArray, "addresses array")
                    console.log(tuesdayAddressesArray, "tuesday addresses")
                    console.log(wednesdayAddressesArray, "wednesday addresses")
                    console.log(thursdayAddressesArray, "thursday addresses")
                    console.log(fridayAddressesArray, "friday addresses array")
                    console.log(saturdayAddressesArray, "saturday addresses array")
                    console.log(sundayAddressesArray, "sunday addresses array")
                    // let allAddressesArray = [mondayAddressesArray, tuesdayAddressesArray, wednesdayAddressesArray, thursdayAddressesArray, fridayAddressesArray,saturdayAddressesArray, sundayAddressesArray]
                    let orderedAddressesArray = ((allAddressesArray.sort(function(a,b){return b.length - a.length})))
                    let winnerAddressesArray = orderedAddressesArray[0];
                    let winnerDay = winnerAddressesArray[0].day;
                    console.log(winnerAddressesArray, "winner addresses array")
                    let shutUp = "please"
                    let day = winnerAddressesArray;
                    console.log("All Addresses Array", allAddressesArray)
                    console.log((allAddressesArray.sort(function(a, b){return b.length - a.length})), "ordered with length")
                    console.log("WINNER ADDRESSES", winnerAddressesArray)
                    console.log("winner day", winnerDay)
                    
                    console.log(day, 'end of loop')
                    
                    
                    
                })
                
                
            }
            ) 
            
        }
               


  generateTournament = id => {
      this.ParsePlayerIds(id);

  }


    handleOtherClick = e => {
      console.log('click', e, this.props.games.id);
      this.setState({
          saveDisabled: true
      });

      const connectionInfo = {
          game_id: this.props.games.id,
          user_id: collectSessStorage()
      }
      this.addConnection(connectionInfo);
  }

  handleOtherOtherClick = e => {
      console.log('click', e, this.props.games.id)
    //   let gid = this.props.games.id;
      this.setState({
          saveDisabled: true
      });
      
      this.generateTournament(this.props.games.id);

      console.log(this.props.games.id, "Game Id")
      console.log()
  }

  render() {
    return (
      <div className="library-card">
        <h2>{this.props.games.gameName}</h2>
        <h6>For the {" " + this.props.games.gameConsole}</h6>
        <button type="button" className="btn btn-success" onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <button type="button" className="btn btn-success" onClick={this.handleOtherClick} disabled={this.state.saveDisabled}>
          Add Game to Games Played
        </button>
        <button type="button" className="btn btn-success" onClick={this.handleOtherOtherClick} disabled={this.state.saveDisabled}>
          Generator Tourney
        </button>
        <br/><br/>
      </div>
    );
  }
}

export default withRouter (LibraryCard);
