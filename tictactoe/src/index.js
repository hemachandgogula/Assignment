import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }
    render() {
        return (
            <div>
                <div className="status"></div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber:0,
            isX: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if (getWinner(squares) || squares[i])
            return
        squares[i] = this.state.isX ? 'X' : 'O';
        this.setState({
            history:history.concat([{
                squares: squares,
            }]),
            stepNumber:history.length,
            isX: !this.state.isX
        })
    }
    jumpTo(move){
        this.setState({
            stepNumber: move,
            isX: (move % 2) === 0,
          });
    }
    render() {
        const history=this.state.history;
        const current=history[this.state.stepNumber];
        const winner = getWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else
            status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
        const moves = history.map((step,move)=>{
            const desc=move?'Go to step #' + move:'Go to start game';
            return(
                <li key={move}><button onClick={()=>this.jumpTo(move)}>{desc}</button></li>
            )
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i)=>this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function getWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 8]
    ]
    for (let l = 0; l < lines.length; l++) {
        const [a, b, c] = lines[l];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }
    return null;
}
