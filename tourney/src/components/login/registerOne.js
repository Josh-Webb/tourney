// Register name email and password.  Check if name or email is in use.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserManager from '../../modules/UserManager';

export default class RegisterOne extends Component {

    // Set initial state
    state = {
        user_name: '',
        email: '',
        password: '',
        currentUser: {}
    };
    
    addUser = user =>
        UserManager.post(user)
            // .then(() => LoginManager.getAll('users'))
            .then(newUser => {
                this.setState({
                    currentUser: user
                })
                console.log("new user", newUser)
            }
            )
    // .then(() => this.props.history.push('users'));

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    saveNewUser = evt => {
        evt.preventDefault();

        const user = {
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password,
            address: '',
            maxDistance: '',
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            thumbnailId: Math.random(1, 26)

        };
        console.log("user", user)

        this.addUser(user).then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <React.Fragment>
                <form className="SignupForm">
                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="user_name"
                            placeholder="User Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email"
                            placeholder="Name@Mail.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        className="button"
                        onClick={this.saveNewUser}
                        className="btn btn-primary"
                    >
                        Submit
              </button>
                </form>
            </React.Fragment>
        );
    }

}
