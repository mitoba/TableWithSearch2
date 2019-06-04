import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Form extends Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    address: "",
    addressError: "",
    email: "",
    emailError: "",
    phone: "",
    phoneError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      addressError: "",
      emailError: "",
      phoneError: ""
    };

    if (!this.state.firstName.match(/^[a-zA-Z ]*$/)) {
      isError = true;
      errors.firstNameError = "Please only alphabetic values/Usa solo caracteres del alfabeto";
    }

    if (!this.state.lastName.match(/^[a-zA-Z ]*$/)) {
      isError = true;
      errors.lastNameError = "Please only alphabetic values/Usa solo caracteres del alfabeto";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    if(!this.state.phone.match(phoneno)){
      isError = true;
      errors.phoneError = "Please use right format";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        address: "",
        addressError: "",
        email: "",
        emailError: "",
        phone: "",
        phoneError: ""
      });
    }
  };

  render() {
    return (
      <form style={formStyle}>
        <TextField
          name="firstName"
          hintText="First name"
          floatingLabelText="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          errorText={this.state.firstNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          errorText={this.state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="address"
          hintText="address"
          floatingLabelText="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
          errorText={this.state.addressError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="phone"
          hintText="Phone"
          floatingLabelText="Phone"
          value={this.state.phone}
          onChange={e => this.change(e)}
          errorText={this.state.phoneError}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
}

}

const formStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '40%',
}

export default Form