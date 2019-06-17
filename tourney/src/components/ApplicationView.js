//application view.  Of course
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './header/header'
import Login from './login/loginCard'
import RegisterOne from './login/registerOne'
import RegisterTwo from './login/registerTwo'



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
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationView)