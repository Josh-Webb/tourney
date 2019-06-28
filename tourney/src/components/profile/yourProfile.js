import React, { Component } from 'react';
// import GameList from './GameList'
// import DaysAvailable from './DaysAvailable'
// import NameAddress from './NameAddress'
import { withRouter } from 'react-router'
import UserManager from '../../modules/UserManager'
import collectSessStorage from '../../modules/UpdateProfileButton'

class YourProfile extends Component {
    state = {
        userProfile: {}
    };

    componentDidMount() {
        const newState = {}
            UserManager.getId(collectSessStorage())
            .then(user => (newState.userProfile = user))
            console.log(newState)
            this.setState(newState)        
    };

    render() {
        return (
            <div className="profileView">
                <section className="userName">
                    <h2>{this.state.userProfile.user_name}Test</h2>
                </section>
            </div>
        )
    }

}

export default withRouter (YourProfile)