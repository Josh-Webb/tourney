//application view.  Of course
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './header/header'
import RegisterOne from './login/registerOne'
import RegisterTwo from './login/registerTwo'
import TourneyList from './tourneyPage/tourneyList';
import LibraryList from './library/libraryList'
import LocationForm from './locations/locationForm'
import Login from "./login/login"
import NavBar from './nav/navBar';
import './applicationView.css';
import '../modules/UpdateProfileButton'
import collectSessStorage from '../modules/UpdateProfileButton';
import Welcome from './welcome/welcome'
import YourProfile from './profile/yourProfile'



class ApplicationView extends Component {
    state = {
        bracket: [],
        library: [],
        locations: [],
        tourneyPage: [],
        login: [],
        register: [],
        updateProfile: [],
        profile: []
    };

    isAuthenticated = () => sessionStorage.getItem('credentials')  !== null;

    render() {
        console.log('ApplicationView Render');
        // console.log(collectSessStorage())
        

        return (
            <React.Fragment>
                <NavBar />
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profileview" render={props => {
                    return (
                        <YourProfile
                        {...props}
                        userProfile={this.state.userProfile}
                        />
                    )
                }} />
                <Route exact path="/signup"
                render={props => {
                    return (
                        <RegisterOne
                         {...props}
                         users={this.state.users}
                         addUser={this.addUser}
                         />
                    );
                }}

                />
                <Route exact path='/user/:userId(\d+)/edit'
                render={props => {
                    return (
                        <RegisterTwo
                        {...props}
                        updateUser={this.updateUser}
                        users={this.state.users}
                        />
                    );
                }}
                />
                <Route exact path="/tourney"
                render={props => {
                    return (
                        <TourneyList
                        {...props}
                        />
                    );
                }}
                />
                <Route
            exact
            path="/locations"
            render={props => {
              return (
                <LocationForm
                  {...props}
                  locations={this.state.locations}
                  addEvent={this.addLocation}
                />
              );
            }}
          />
                <Route exact path="/library"
                render={props => {
                    return (
                        <LibraryList
                        {...props}
                        library={this.state.library}
                        addGame={this.addGame}
                        />
                    );
                }}
                />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationView)