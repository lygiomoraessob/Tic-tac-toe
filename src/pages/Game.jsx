import { useState } from 'react';
import Button from '@mui/material/Button';
import wallpaper from '../assets/wp2922078-wallpaper-hd-galaxy.jpg';
import Board from '../components/Board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir para o movimento #' + move;
    } else {
      description = 'Ir para o início do jogo';
    }
    return (
      <li key={move} style={{ marginBottom: 8 }}>
        <Button
          variant="outlined"
          onClick={() => jumpTo(move)}
          sx={{
            color: '#fff',
            borderColor: '#888',
            backgroundColor: '#222',
            '&:hover': {
              backgroundColor: '#444',
              borderColor: '#fff',
            },
          }}
        >
          {description}
        </Button>
      </li>
    );
  });

  return (
    <div
     className="game"
      style={{
        minHeight: '100vh',
        background: `url(${wallpaper}) center center / cover no-repeat, rgba(0,0,0,0.85)`,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div className="game-board" style={{ marginBottom: 32 }}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol style={{ padding: 0, listStyle: 'none' }}>{moves[0]}</ol>
      </div>
    </div>
  );
}

export default Game