
import React, {
    Component
} from 'react';
import {
    withRouter
} from 'react-router-dom'
// import './library.css';
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


    handleClick = e => {
        console.log('click', e, this.props.games.id);
        this.setState({
            saveDisabled: true
        });
        this.props.deleteGame(this.props.games.id);
    };

    addConnection = connection =>
        ConnectionManager.post(connection);



    ReturnAddress = (obj) => {
        for (let i = 0; i < obj.length; i++){
            return obj[i].address
        }
    };


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
        return ( <div className = "library-card" >
            <h2 > {
                this.props.games.gameName
            } </h2> <h6> For the {
                " " + this.props.games.gameConsole
            } </h6> 
            <button type = "button"
            className = "btn btn-success"
            onClick = {
                this.handleClick
            }
            disabled = {
                this.state.saveDisabled
            } >
             Delete </button> 
             
             <button type = "button"
            className = "btn btn-success"
            onClick = {
                this.handleOtherClick
            }
            disabled = {
                this.state.saveDisabled
            } >
            Add Game to Games Played </button> 
            <button type = "button"
            className = "btn btn-success"
            onClick = {
                this.handleOtherOtherClick
            }
            disabled = {
                this.state.saveDisabled
            } >
            Generator Tourney </button>
            </div>
        )
    }



}
export default withRouter(LibraryCard)
