// Full register.  Games/address/distance/daybooleans
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserManager from '../../modules/UserManager';
import LibraryManager from '../../modules/LibraryManager'
import Checkbox from "../../modules/Checkboxes"


const OPTIONS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

class RegisterTwo extends Component {
  // Set initial state
  state = {
    address: '',
    maxDistance: '',
    checkboxes: OPTIONS.reduce(
        (options, option) => ({
            ...options,
            [option]: false
        }),
        {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);


  updateUser = user =>
    UserManager.patch(user)
      .then(() => UserManager.getAll('users'))
      .then(users =>
        this.setState({
          users: users
        })
      )
      .then(() => this.props.history.push('users'));

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;

    this.setState(stateToChange)
    console.log(stateToChange);
  };



  saveNewUpdate = evt => {
    evt.preventDefault();
    

    const users = {
      id: this.props.match.params.userId,
      address: this.state.address,
      maxDistance: this.state.maxDistance,
      checkboxes: this.state.checkboxes
    };

    this.updateUser(users).then(() => this.props.history.push('/'));
  };

  render() {
    return (
      <React.Fragment>
          <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="Address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="maxDistance">maxDistance</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="maxDistance"
                        placeholder="In miles"
                        />
                    </div>


        <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary"
                onClick={this.saveNewUpdate}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter (RegisterTwo)
           