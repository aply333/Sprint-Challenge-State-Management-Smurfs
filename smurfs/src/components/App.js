import React from "react";
import { connect } from "react-redux";
import { fetchSmurfData } from "../actions";
import "./App.css";
import SmurfBuilder from "./smurfBuilder";


const App = props => {

  const TriggerAxios = e => {
    e.preventDefault();
    props.fetchSmurfData();
  }
  const ConsoleLogAxios = e => {
    e.preventDefault();
    console.log(props.smurfs)
  }

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br />
        <button onClick={TriggerAxios} >Test</button>
        <button onClick={ConsoleLogAxios}>ConsoleLog</button>
        <hr />
        <SmurfBuilder/>
      </div>
    );
};

const mapStateToProps = (state) => {
  return{
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfData }) (App);
