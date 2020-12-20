
import React, {Component} from 'react';
import Board from "./Board";
import {Button} from "@material-ui/core";


export default class Game extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    
    if (winner || squares[i]) {
        return;
      }
    
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

 
render(){
  const history = this.state.history;
  const current = history[this.state.stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Start the Game';
    return (
      <li key={move}>
        <Button  variant="contained" color="secondary" style={{marginTop:"1%"}} onClick={() => this.jumpTo(move)}>{desc}</Button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next player is: " + (this.state.xIsNext ? "X" : "O");
  }

  return (
    
    <div >
      <div >
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div >
          <div style={{paddingLeft:"25%",marginBottom:"10px",fontWeight:"bold",fontSize:25,}}  >{status}</div>
          <ul style={{paddingTop:"1%",paddingLeft:"25%"}}>{moves}</ul>
        </div>
    </div>
    
  );
}
  
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }