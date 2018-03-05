import React from 'react'
import Square from './square'
import '../board.css'
import {win} from '../services/gameLogic'
import {move} from '../services/aiLogic'


class Board extends React.Component{

	state = {
		board: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
		movesMade: 0
	}

	//user is O, user goes first

	updateBoard = (row, column) => {
		let move = ''
		// added 1 to movesMade because otherwise would be the last move, 
		// meaning same player would go 2x
		let movesMade = this.state.movesMade + 1
		if (movesMade % 2 === 0){
			move = 'X'
		}else{
			move = 'O'
		}
		let board = this.state.board
		if (board[row][column] === ' '){
			board[row][column] = move
			this.setState( {movesMade, board} )
		}
	}

	componentDidUpdate = () => {
		//check if theres a winner
		let winner = win(this.state.board)
		if (!winner && this.state.movesMade < 9 && this.state.movesMade % 2 !== 0){
				debugger
				move(this.state.board, this.state.movesMade, this.updateBoard)
		}else if (winner){
			this.gameOver(winner)
		}
		else if (this.state.movesMade === 9){
			this.gameOver(winner)
		}
	}

	gameOver = (winner) => {
		if (winner){
			let whoWon = this.state.movesMade % 2 !== 0 ? "Player 1 Won!" : "Player 2 Won!"
			setTimeout(alert(whoWon), 1000)
			// display popup instead of alerting
			this.setState(
				{ board: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']], 
				  movesMade: 0 }
			)
		}else{
			alert("game over; no winner")
			this.setState(
				{ board: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']], 
				  movesMade: 0 })
			//display popup instead of alerting
		}
	}


	render(){
		return(
			<div className='board'>
				<h2>tic-tac-toe</h2>
				{this.state.board.map((row, rowIndex) => {
						return (<div className='row' key={rowIndex}>
										{row.map( (square, columnIndex) => <Square updateBoard={this.updateBoard} 
																													key={columnIndex} 
																													row={rowIndex} 
																													column={columnIndex} 
																													square={square}/>)}
										</div>)
					}
				)}
			</div>
			)
	}
}


export default Board