import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserManager from '../../modules/UserManager';
import collectSessStorage from '../../modules/UpdateProfileButton'
import { get } from 'http';

export default class Login extends Component {
  // Set initial state
  state = {
    user_name: '',
    email: '',
    password: ''
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    console.log(stateToChange)
  };

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();

    UserManager.get(this.state.user_name).then(result => {
      console.log('result', result);
      if (result.length > 0) {
        sessionStorage.setItem(
          'credentials',
          JSON.stringify({
            user_name: result[0].user_name,
            email: result[0].email,
            password: result[0].password,
            id: result[0].id
          })
        );
        console.log(sessionStorage.getItem('credentials'))
        this.props.history.push('/tourney');
      } else {
        alert('Please sign up');
      }
    });

    /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
  };

  render() {
    return (
      <div className="form-group">
      <form onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUserName">Name</label>
        <input
          onChange={this.handleFieldChange}
          type="text"
          id="user_name"
          placeholder="Username"
          required=""
          autoFocus=""
        />

        <label htmlFor="inputUserEmail">Email</label>
        <input
          onChange={this.handleFieldChange}
          type="email"
          id="email"
          placeholder="Name@Mail.com"
          required=""
        />

        <label htmlFor="inputUserPassword">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder="password"
          required=""
        />
        <button type="submit">Sign in</button>
      </form>
      </div>
    );
  }
}
