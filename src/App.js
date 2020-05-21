import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import GoogleSearch from "./components/GoogleSearch";
import Saved from "./components/Save";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Intro from "./components/Intro";

class App extends Component {
  state = {
    score: 0,
    topScore: 0
  }

  updateScore = (score) => {
    this.setState({
      score: score
    })
  }

  updateTopScore = (topScore) => {
    this.setState({
      topScore: topScore
    })
  }

  resetScore = () => {
    this.setState({
      score: 0
    })
  }
  render() {
    return (
      <div className="container text-center">
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <Game {...this.state} updateScore={this.updateScore} updateTopScore={this.updateTopScore} resetScore={this.resetScore} />
        <Footer/>
      </div>
    );
  }
}

export default App;
