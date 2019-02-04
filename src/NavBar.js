import React, { Component } from "react";
import { Route, Link, Switch, HashRouter as Router } from "react-router-dom";
import Results from "./Results";
import Main from "./Main";
//import { Data } from "./Data";
import erorImg from "./images/404.png";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class NavBar extends Component {
  state = {
    minAge: "",
    maxAge: "",
    gender: "",
    personFromDB: [],
    personResult: []
  };

  componentDidMount() {
    const url = "http://proj.ruppin.ac.il/bgroup75/test1/tar4/api/persons";
    fetch(url)
      .then(this.handleErrors)
      .then(response => response.json())
      .then(data => this.setState({ personFromDB: data }));
  }
  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  onSubmit = value => {
    const gender = value.gender;
    const minAge = value.minAge;
    const maxAge = value.maxAge;
    this.setState({
      gender: gender,
      minAge: minAge,
      maxAge: maxAge
    });
    console.log(this.personFromDB);
    const personResult = this.state.personFromDB.filter(
      person =>
        person.Gender === gender && person.Age >= minAge && person.Age <= maxAge
    );
    this.setState({ personResult: personResult });
  };

  render() {
    return (
      <Router>
        <div>
          <AppBar color="default" position="static">
            <Tabs onChange={this.handleChange}>
              <span className="LOGO">Tinder</span>
              <Link to="/">
                <Tab label="Home" />
              </Link>
              <Link to="/Results">
                <Tab label="Results" />
              </Link>
            </Tabs>
          </AppBar>
          <Switch>
            <Route
              path="/Results"
              component={value =>
                this.state.personResult.length > 0 ? (
                  <Results person={this.state.personResult} />
                ) : (
                  <img src={erorImg} className="eror" />
                )
              }
            />
            <Route
              path="/"
              component={value => (
                <Main onSubmit={value => this.onSubmit(value)} />
              )}
              exact
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;
