import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from "./components/Board";
  
class Game extends React.Component {
    render() {
      return (
        <main className="game">
          <div className="game-board">
            <Board />
          </div>
        </main>
      );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);