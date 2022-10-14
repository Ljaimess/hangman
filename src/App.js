import React, { Component } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

import { randomWord } from "../src/components/words";
import step0 from "./components/images/0.jpg";
import step1 from "./components/images/1.jpg";
import step2 from "./components/images/2.jpg";
import step3 from "./components/images/3.jpg";
import step4 from "./components/images/4.jpg";
import step5 from "./components/images/5.jpg";
import step6 from "./components/images/6.jpg";

class App extends Component {
  //to load all images into component & the var of wrong guesses
  static defautProps = {
    maxWrong: 6,
    images: [step0,step1,step2,step3,step4,step5,step6]
  }

  constructor(props) {
    super(props);
    this.state= {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Hangman container">
        <h1 className="text-center">Hangman</h1>
        <div className="guessCounter">
        Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
        </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
