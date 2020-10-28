import React from 'react';
import ReactDOM from 'react-dom';

const Game = () => {
  return( 
    <div>
      Tic-Tac-Toe Game!
    </div>
  );
};

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);