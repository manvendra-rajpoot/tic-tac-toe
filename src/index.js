import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props) => {
  return( 
    <div className="square">
      {props.value}
    </div>
  );
};
const Board = () => {
  const renderSquare = (i) => {
    return(
      <Square value={i} />
    );
  };
  return( 
    <div style = {
      {
        backgroundColor: "skyblue",
        margin: 10,
        padding: 20,
      }
    }>
      Board
      <div className = "board-row">
        {renderSquare('X')}{renderSquare('O')}{renderSquare()}
      </div>
      <div className = "board-row">
        {renderSquare('O')}{renderSquare()}{renderSquare()}
      </div>
      <div className = "board-row">
        {renderSquare()}{renderSquare('X')}{renderSquare()}
      </div>
    </div>
  );
};
const Game = () => {
  return( 
    <div className = "game">
      Tic-Tac-Toe Game
      <Board/>
    </div>
  );
};

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);