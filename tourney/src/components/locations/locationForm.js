//Add location form.
import React, { Component } from 'react';
import LocationsManager from '../../modules/LocationsManager';
import { Media, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './locations.css';

export default class EventForm extends Component {
  // Set initial state
  state = {
    address: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  };

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
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thursday: this.state.thursday,
      friday: this.state.friday,
      saturday: this.state.saturday,
      sunday: this.state.sunday
    };

    this.addLocation(location).then(() => this.props.history.push('/'));
  };

  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="address">Event Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="address"
              placeholder="Address"
            />
          </div>
          <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Monday
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Tuesday
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Wednesday
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Thursday
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Friday
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Saturday
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Sunday
                        </Label>
                      </FormGroup>
          <button className="button" onClick={this.saveNewLocation}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
