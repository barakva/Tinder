import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Main extends Component {
  state = {
    minAge: "",
    maxAge: "",
    gender: ""
  };

  submit = e => {
    this.props.onSubmit(this.state);
  };
  handelMin = () => {
    console.log(this);
  };

  render() {
    return (
      <div id="Main">
        <br />
        <div id="gender">
          <label>Choose partner gender</label>
          <select
            onChange={gender => this.setState({ gender: gender.target.value })}
          >
            <option selected disabled hidden>
              Choose partner's gender
            </option>
            <option>Female</option>
            <option>Male</option>
          </select>
          <br />
        </div>
        <br />
        <label> Choose partner's age</label>
        <br />
        <label>Between</label>
        <input
          type="text"
          placeholder="Minimum Age"
          value={this.state.minAge}
          onChange={v => this.setState({ minAge: v.target.value })}
        />
        <br />
        <label>And</label>
        <input
          type="text"
          placeholder="Maximum Age"
          value={this.state.maxAge}
          onChange={v => this.setState({ maxAge: v.target.value })}
        />
        <br />
        <br />

        <div>
          <Link to="/Results">
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={e => this.submit(e)}
            >
              FIND!
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
