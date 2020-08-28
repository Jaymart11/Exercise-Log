import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("/users");

    if (response.data.length > 0) {
      this.setState({
        users: response.data,
      });
    }
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    const { username, description, duration, date } = this.state;
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    axios.post("/exercises/add", exercise);

    swal("Exercice Added!", "", "success").then(() => (window.location = "/"));
  };

  render() {
    return (
      <div className="w-25 mx-auto align-middle ">
        <h2 className="text-center my-5">Create Exercise</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <select
              className="form-control"
              id="username"
              name="username"
              onChange={this.onChangeHandler}
              value={
                this.state.username === "" ? "Nothing" : this.state.username
              }>
              <option value="Nothing" disabled>
                Select User
              </option>
              {this.state.users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              className="form-control"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChangeHandler}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (in minutes)</label>
            <input
              id="duration"
              className="form-control"
              type="text"
              name="duration"
              value={this.state.duration}
              onChange={this.onChangeHandler}
              placeholder="Duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              className="form-control"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark w-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
