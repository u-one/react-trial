import { useState } from 'react'

type SquareState = 'O' | 'X' | null

type SquareProps = {
  value: SquareState
  onClick: () => void
}

const Square = (props: SquareProps) => (
  <button className="square" onClick={props.onClick} >
    {props.value}
  </button>
)

type BoardState = [
  SquareState, SquareState, SquareState,
  SquareState, SquareState, SquareState,
  SquareState, SquareState, SquareState]

type BoardProps = {
  squares: BoardState
  onClick: (i: number) => void
}

const Board = (props: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  )

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

type GameState = {
  readonly squares: BoardState
  readonly xIsNext: boolean
}

const Game = () => {
  const [state, setState] = useState<GameState>({
    squares: [null, null, null, null, null, null, null, null, null],
    xIsNext: true,
  })

  const current = state
  const winner = calculateWinner(current.squares)
  let status: string
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (current.xIsNext ? 'X' : 'O');
  }

  const handleClick = (i: number) => {

    const next: GameState = (({ squares, xIsNext }) => {
      const nextSquares = squares.slice() as BoardState
      nextSquares[i] = xIsNext ? 'X' : 'O'
      return {
        squares: nextSquares,
        xIsNext: !xIsNext,
      }
    })(current)

    setState(({squares, xIsNext}) => {
      return {
        squares: next.squares,
        xIsNext: next.xIsNext
      }
    })
  }

  return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares: BoardState) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;
