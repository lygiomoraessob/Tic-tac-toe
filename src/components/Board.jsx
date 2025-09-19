import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Vencedor: ' + winner;
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div
        className="status"
        style={{
          marginBottom: 16,
          fontSize: 24,
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '1px 1px 4px #000',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {winner ? (
          <>
            <i className="bi bi-trophy-fill" style={{ color: '#FFD700' }}></i>
            Vencedor: {winner}
          </>
        ) : (
          <>
            <i className="bi bi-person" ></i>
            Próximo jogador: {xIsNext ? 'X' : 'O'}
          </>
        )}
      </div>
      <div className="board-row" style={{ display: 'flex', justifyContent: 'center' }}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row" style={{ display: 'flex', justifyContent: 'center' }}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row" style={{ display: 'flex', justifyContent: 'center' }}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}