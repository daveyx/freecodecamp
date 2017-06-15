'use strict';

import React, {Component} from 'react';
import {Row, Col, Modal, Button} from 'react-bootstrap';
import PlayGround from './playGround';
import PlayerSelection from './playerSelection'

const initialGameState = {
  sqr1: "",
  sqr2: "",
  sqr3: "",
  sqr4: "",
  sqr5: "",
  sqr6: "",
  sqr7: "",
  sqr8: "",
  sqr9: ""
}

let winnerMessage = "";

export default class TicTacToe extends Component {
  constructor(props) {
    super();
    this.state = {
      userPlayer: "",
      computerPlayer: "",
      gameState: initialGameState,
      showModal: false,
      gameFinished: false
    };
    this.selectPlayer = this.selectPlayer.bind(this);
    this.setField = this.setField.bind(this);
    this.computerMove = this.computerMove.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.userPlayer !== "" && this.state.computerPlayer !== "" && ! this.state.gameFinished) {
      const computerWinner = hasWon(nextState.gameState, nextState.computerPlayer);
      if (computerWinner === nextState.computerPlayer) {
        console.log("--->computer won!", nextState.computerPlayer);
        this.finishGame(nextState.computerPlayer);
      } else if (computerWinner === "XO") {
        console.log("--->DRAW!");
        this.finishGame("XO");
      }

      const userWinner = hasWon(nextState.gameState, nextState.userPlayer);
      if (userWinner === nextState.userPlayer) {
        console.log("--->user won!", nextState.userPlayer);
        this.finishGame(nextState.userPlayer);
      }
    }
  }

  finishGame(winner) {
    if (winner === "XO") {
      winnerMessage = "Draw!";
    } else {
      if (winner === this.state.userPlayer) {
        winnerMessage = "You won!";
      } else {
        winnerMessage = "You lost!";
      }
    }
    this.setState({
      gameFinished: true,
      showModal: true
    });
  }

  selectPlayer(val) {
    const computerPlayer = val === "X" ? "O" : "X";
    this.setState({
      userPlayer: val,
      computerPlayer: computerPlayer
    });
  }

  setField(field, player) {
    const nextMove = player === this.state.userPlayer ? this.computerMove : () => null;
    const newGameState = Object.assign({}, this.state.gameState);
    newGameState[field] = player;
    this.setState({
      gameState: newGameState
    }, nextMove);
  }

  computerMove() {
    const fieldToSet = getFieldToSet(this.state.gameState, this.state.computerPlayer, this.state.userPlayer);
    this.setField(fieldToSet, this.state.computerPlayer);
  }

  closeModal() {
    this.setState({
      gameFinished: false,
      userPlayer: "",
      computerPlayer: "",
      gameState: initialGameState,
      showModal: false
    });
    winnerMessage = "";
  }

  render() {
    return(
      <div className="text-center">
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Game end</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {winnerMessage}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        { ! this.state.userPlayer
           ? <PlayerSelection clickHandler={this.selectPlayer} />
           : <PlayGround clickHandler={this.setField} gameState={this.state.gameState} player={this.state.userPlayer} />
        }
      </div>
    );
  }
}

function getFieldToSet(gameState, computerPlayer, userPlayer) {
  // win?
  for (let i = 1; i <= 9; i++) {
    const field = "sqr" + i;
    if (gameState[field] === "") {
      const winGameSate = Object.assign({}, gameState);
      winGameSate[field] = computerPlayer;
      if (hasWon(winGameSate, computerPlayer) === computerPlayer) {
        return field;
      }
    }
  }

  // block?
  for (let i = 1; i <= 9; i++) {
    const field = "sqr" + i;
    if (gameState[field] === "") {
      const winGameSate = Object.assign({}, gameState);
      winGameSate[field] = userPlayer;
      if (hasWon(winGameSate, userPlayer) === userPlayer) {
        return field;
      }
    }
  }

  // do next possible
  for (let i = 1; i <= 9; i++) {
    const field = "sqr" + i;
    if (gameState[field] === "") {
      return field;
    }
  }
}

function hasWon(gameState, val) {
  if (gameState.sqr1 === val && gameState.sqr2 === val && gameState.sqr3 === val) {
    return val;
  } else if (gameState.sqr4 === val && gameState.sqr5 === val && gameState.sqr6 === val) {
    return val;
  } else if (gameState.sqr7 === val && gameState.sqr8 === val && gameState.sqr9 === val) {
    return val;
  } else if (gameState.sqr1 === val && gameState.sqr5 === val && gameState.sqr9 === val) {
    return val;
  } else if (gameState.sqr1 === val && gameState.sqr4 === val && gameState.sqr7 === val) {
    return val;
  } else if (gameState.sqr2 === val && gameState.sqr5 === val && gameState.sqr8 === val) {
    return val;
  } else if (gameState.sqr3 === val && gameState.sqr6 === val && gameState.sqr9 === val) {
    return val;
  } else if (gameState.sqr3 === val && gameState.sqr5 === val && gameState.sqr7 === val) {
    return val;
  }
  const isDraw = Object.entries(gameState).reduce((prev, x) => {
    return prev && x[1] !== "";
  }, true);
  if (isDraw) {
    return "XO";
  }
  return null;
}
