import React from 'react'
import Square from './square'
import '../board.css'
import {win} from '../services/gameLogic'
//import {} from '../services/aiLogic'


class Board extends React.Component{

	state = {
		board: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
		movesMade: 0
	}

//2-player
/*
	updateBoard = (row, column) => {
		let move = ''
		let movesMade = this.state.movesMade + 1
		if (movesMade % 2 === 0){
			move='X'
		}else{
			move = 'O'
		}
		let board = this.state.board
		if (board[row][column] === ' '){
			board[row][column] = move
			this.setState( {movesMade, board} )
		}
	}
	*/
	//1 player

	componentDidUpdate = () => {
		let didWin = win(this.state.board)
		this.checkBoard(didWin)
	}

	checkBoard = (didWin) => {
		if (didWin){
			let winner = this.state.movesMade % 2 !== 0 ? "Player 1 Won!" : "Player 2 Won!"
			alert(winner)
			// console.log(winner)
			this.setState(
				{ board: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']], 
				  movesMade: 0 }
			)
		}
		else if	(this.state.movesMade === 9){
			alert("game over; no winner")
		}
	}

	//AI
	aiFirstMove = () =>{
		//first pick the middle square, if taken go in top left corner
		if (this.state.board[1][1] === ' '){
			this.updateBoard(1,1)
		}else{
			this.updateBoard(0,0)
		}
	}

	aiSubsequentMoves = () => {
		// if I have 2 in a row, place the third one
		// if they have 2 in a row/column/diagonal and the last is blank, block them
		// otherwise, go anywhere open
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