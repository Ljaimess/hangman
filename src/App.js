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

let gameStat;
class App extends Component {
  //to load all images into component & the var of wrong guesses
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.keyPress = this.keyPress.bind(this);
    window.addEventListener("keydown", this.keyPress);
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map(letter => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(e) {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  keyPress(event) {
    /**
     * 8 = backspace
     * 13 = enter
     * 32 = space
     * 65 = A (Capital)
     * 90 = Z (Capital)
     * 97 = a (Small)
     * 122 = z (Small)
     */
    if (gameStat === "Well Done" || gameStat === "Better luck next time") {
      if (event.keyCode === 8 || event.keyCode === 13 || event.keyCode === 32) {
        this.resetButton();
      }
    } else if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122)
    ) {
      this.handleGuess(event.key);
    } else if (
      event.keyCode === 8 ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      this.resetButton();
    } else {
    }
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    );
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  };

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "Well Done";
    }

    if (gameOver) {
      gameStat = "Better luck next time";
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="Hangman container">
          <h1 className="text-center">Hangman</h1>
          <div className="guessCounter text-center">
            Wrong Guesses:{this.state.mistake} out of {this.props.maxWrong}{" "}
          </div>
          <div className="text-center">
            <img src={this.props.images[this.state.mistake]} alt="" />
          </div>
          <div className="text-center">
            <p>Guess your card</p>
            <p>(spaces will be added into words soon)</p>
            <p>
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p>
              {gameStat}
            </p>
            <button onClick={this.resetButton}>Reset</button>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
