import React, { Component } from "react";
import logo from "./edel-illo.jpg";
import Button from "@material-ui/core/Button";

class Results extends Component {
  constructor(props) {
    super(props);
    var i = 0;
    const PL = this.state.PersonList.filter((p, index) => i === index);

    const PName = PL.map(p => p.Name);
    const Pgender = PL.map(p => p.Gender);
    const Page = PL.map(p => p.Age);
    const Pheight = PL.map(p => p.Height);
    const Plocation = PL.map(p => p.Address);
    const Pimg = PL.map(p => p.Image);
    const Ppremium = PL.map(p => p.Premium);
    var Phobbie = "";
    if (Ppremium[0] === true) {
      Phobbie = PL.map(p => p.hobbies);
    }

    this.state = {
      PersonList: this.props.person,
      i: i + 1,
      name: PName[0],
      gender: Pgender[0],
      age: Page[0],
      height: Pheight[0],
      location: Plocation[0],
      image: Pimg[0],
      premium: Ppremium[0],
      hobbies: Phobbie[0]
    };
  }

  state = {
    PersonList: this.props.person,
    i: 0,
    id: "",
    name: "",
    gender: "",
    age: "",
    height: "",
    location: "",
    image: "",
    premium: "",
    hobbies: ""
  };

  render() {
    return (
      <div id="Res">
        <h2>Name: {this.state.name}</h2>
        <img
          id="imgPerson"
          alt=""
          src={this.state.image !== "" ? this.state.image : logo}
        />
        <br />
        <Button variant="contained" color="secondary" type="button">
          {" "}
          LIKE{" "}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={this.click}
        >
          {" "}
          NEXT{" "}
        </Button>

        <br />
        <p>Age: {this.state.age}</p>
        <p>Height: {this.state.height}</p>
        <p>Location: {this.state.location}</p>
        {this.randerHobbie()}
      </div>
    );
  }
  click = () => {
    var i = this.state.i;
    const PL = this.state.PersonList.filter((p, index) => i === index);

    const PName = PL.map(p => p.Name);
    const Pgender = PL.map(p => p.Gender);
    const Page = PL.map(p => p.Age);
    const Pheight = PL.map(p => p.Height);
    const Plocation = PL.map(p => p.Address);
    const Pimg = PL.map(p => p.Image);
    const Ppremium = PL.map(p => p.Premium);
    var Phobbie = "";
    if (Ppremium[0] === true) {
      Phobbie = PL.map(p => p.hobbies);
    }

    if (i === this.state.PersonList.length - 1) i = -1;
    this.setState({
      i: i + 1,
      name: PName[0],
      gender: Pgender[0],
      age: Page[0],
      height: Pheight[0],
      location: Plocation[0],
      image: Pimg[0],
      premium: Ppremium[0],
      hobbies: Phobbie[0]
    });
  };
  randerHobbie = () => {
    var str = "";
    if (this.state.premium === true) {
      str += "Hobbies: ";
      str += this.state.hobbies.map(c => {
        return c + " ";
      });
    }
    return str;
  };
}

export default Results;
