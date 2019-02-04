import React, { Component } from "react";

class Person extends Component {
  constructor(_id, _name, _gender, _age) {
    super();
    this.setState({ id: _id, name: _name, gender: _gender, age: _age });
  }
  state = {
    id: "",
    name: "",
    gender: "",
    age: ""
  };
  render() {
    return "";
  }
}

export default Person;
