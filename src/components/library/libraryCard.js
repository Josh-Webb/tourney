
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import collectSessStorage from '../../modules/UpdateProfileButton'
import ConnectionManager from '../../modules/ConnectionManager'
import UserManager from '../../modules/UserManager'
import './library.css'



class LibraryCard extends Component {
    state = {
        saveDisabled: false,
        validAddresses: [],
        dayToPlay: ''
    };


    deleteButton = e => {
        console.log('click', e, this.props.games.id);
        this.setState({
            saveDisabled: true
        });
        this.props.deleteGame(this.props.games.id);
    };

    addConnection = connection =>
        ConnectionManager.post(connection);



    addToPlayedButton = e => {
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

    render() {
        return ( <div className = "library-card" >
            <h2 > {
                this.props.games.gameName
            } </h2> 
            
            <h4> For the {
                " " + this.props.games.gameConsole
            } </h4> 
            
            <button type = "button"
            className = "btn btn-success"
            onClick = {
                this.deleteButton
            }
            disabled = {
                this.state.saveDisabled
            } >
             Delete </button> 
             
             <button type = "button"
            className = "btn btn-success"
            onClick = {
                this.addToPlayedButton
            }
            disabled = {
                this.state.saveDisabled
            } >
            Add Game to Games Played </button> 
            </div>
        )
    }



}
export default withRouter(LibraryCard)
