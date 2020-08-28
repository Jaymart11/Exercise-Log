import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExerciseList from "./Components/ExerciseList/ExerciseList";
import EditExercise from "./Components/EditExercise/EditExercise";
import CreateExercise from "./Components/CreateExercise/CreateExercise";
import CreateUser from "./Components/CreateUser/CreateUser";
import Navbar from "./Components/Navbar/Navbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Route exact path="/" component={ExerciseList} />
      <Route exact path="/edit/:id" component={EditExercise} />
      <Route exact path="/create" component={CreateExercise} />
      <Route exact path="/user" component={CreateUser} />
    </div>
  );
}

export default App;
