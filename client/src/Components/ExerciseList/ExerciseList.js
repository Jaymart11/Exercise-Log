import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseList: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("/exercises");
    try {
      this.setState({ exerciseList: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  deleteExercise = (id) => {
    axios.delete(`/exercises/${id}`).then((res) => console.log(res.data));

    this.setState({
      exerciseList: this.state.exerciseList.filter((exe) => exe._id !== id),
    });

    swal("Deleted", "", "success");
  };

  render() {
    console.log(this.state.exerciseList);
    return (
      <table className="table table-striped table-dark mt-5 w-75 mx-auto">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.exerciseList.map((exercise) => (
            <tr key={exercise._id}>
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date.slice(0, 10)}</td>
              <td className="text-center">
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => this.deleteExercise(exercise._id)}>
                  Delete
                </button>
                <Link
                  className="btn btn-success mx-2"
                  to={`/edit/${exercise._id}`}>
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
