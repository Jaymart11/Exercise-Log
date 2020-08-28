import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    const { username } = this.state;
    e.preventDefault();

    const user = {
      username: username,
    };

    axios
      .post("/users/add", user)
      .then((res) => swal(res.data, "", "success"))
      .catch((err) => swal(err, "", "error"));

    this.setState({ username: "" });
  };

  render() {
    return (
      <div className="w-75 mx-auto ">
        <h2 className="my-5 text-center">Create New User</h2>
        <form onSubmit={this.onSubmitHandler} className="w-25 mx-auto">
          <div className="form-group">
            <label htmlFor="username" className="text-end">
              User Name
            </label>
            <input
              required
              id="username"
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-dark">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
