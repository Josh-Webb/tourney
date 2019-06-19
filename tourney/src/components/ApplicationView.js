//application view.  Of course
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './header/header'
import Login from './login/loginCard'
import RegisterOne from './login/registerOne'
import RegisterTwo from './login/registerTwo'
import TourneyList from './tourneyPage/tourneyList';
import LibraryList from './library/libraryList'
import LocationForm from './locations/locationForm'



class ApplicationView extends Component {
    state = {
        bracket: [],
        library: [],
        locations: [],
        tourneyPage: [],
        login: []
    };

    isAuthenticated = () => sessionStorage.getItem('credentials')  !== null;

    render() {
        console.log('ApplicationView Render');
        return (
            <React.Fragment>
                <Route exact path="/login" component={Login} />
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
                <Route exact path="/finish"
                render={props => {
                    return (
                        <RegisterTwo
                        {...props}
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