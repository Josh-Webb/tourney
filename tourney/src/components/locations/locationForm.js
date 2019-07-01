//Add location form.
import React, { Component } from 'react';
import LocationsManager from '../../modules/LocationsManager';
import { Media, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import './locations.css';
import Checkbox from "../../modules/Checkboxes";

const OPTIONS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export default class LocationForm extends Component {
  // Set initial state
  state = {
    address: '',
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
      label={option.charAt(0).toUpperCase()+option.slice(1)}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);


  addLocation = location =>
    LocationsManager.post(location)
      .then(() => LocationsManager.getAll('location'))
      .then(locations =>
        this.setState({
          locations: locations
        })
      )
      .then(() => this.props.history.push('locations'));

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;

    this.setState(stateToChange)
    console.log(stateToChange);
  };



  saveNewLocation = evt => {
    evt.preventDefault();
    

    const location = {
      address: this.state.address,
      checkboxes: this.state.checkboxes
    };

    this.addLocation(location).then(() => this.props.history.push('/'));
    console.log(sessionStorage.getItem('credentials'))
  };

  render() {
    return (
      <React.Fragment>


        <div className="container">
          <div className="form-group">
                        <label htmlFor="address">What's the Address of the Venue?</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="Address"
                        />
                    </div>
              <div className="header">What Day or Days is this Venue Available</div>
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
                onClick={this.saveNewLocation}>
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

