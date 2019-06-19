// Full register.  Games/address/distance/daybooleans
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserManager from '../../modules/UserManager';
import { Media, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import LibraryManager from '../../modules/LibraryManager'
import LibraryOption from '../library/libraryOptions'




export default class RegisterTwo extends Component {

    

    // Set initial state
    state = {
        user_name: '',
        address: '',
        maxDistance: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
        thumbnailId: '',
        gameArray: [],
        currentUser: {}
    };

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
        console.log(stateToChange)
    }
    
    registerTwo = evt => {
        evt.preventDefault();

        const registerFull = {
            id: this.props.match.params.userId,
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            maxDistance: this.state.maxDistance,
            monday: this.state.monday,
            tuesday: this.state.tuesday,
            wednesday: this.state.wednesday,
            thursday: this.state.thursday,
            friday: this.state.friday,
            saturday: this.state.saturday,
            sunday: this.state.sunday,
            thumbnailId: this.state.thumbnailId

        };
        console.log("user", registerFull)

        UserManager.put(registerFull).then(() => this.props.history.push('/'));
    };



    componentDidMount() {
        UserManager.get(this.props.match.params.userId).then(user => {
            this.setState({
                user_name: user.user_name,
                email: user.email,
                password: user.password,
                address: user.address,
                maxDistance: user.maxDistance,
                monday: user.monday,
                tuesday: user.tuesday,
                wednesay: user.wednesday,
                thurdsay: user.thurdsay,
                friday: user.friday,
                saturday: user.saturday,
                sunday: user.sunday,
                thumbnailId: user.thumbnailId
            })
        })

        
        LibraryManager.getAll().then(games => {
            this.setState({
                gameArray: games.gameName
            })
        })
        
    }

                render() {
                  return (
                      <React.Fragment>
                    <Form>
                      <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="address" name="address" id="address" value={this.state.address} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="maxDistance">Max Distance</Label>
                        <Input type="maxDistance" name="maxDistance" id="maxDistance" value={this.state.maxDistance} />
                      </FormGroup>
                      {/* <ReactMultiSelectCheckboxes options = { this.props.gameArray } /> */}


                      
                      {/* <FormGroup>
                        <Label for="exampleSelect">Pick a Thumbnail</Label>
                        <Media left href="#">
                        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                         </Media>
                        <Input type="select" name="select" id="exampleSelect">
                        </Input>
                        </FormGroup> */}
                    
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
                      <FormGroup>
                        <FormText color="muted">
                          This is some placeholder block-level help text for the above input.
                          It's a bit lighter and easily wraps to a new line.
                        </FormText>
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                  </React.Fragment>
                  );
                }
              }
            