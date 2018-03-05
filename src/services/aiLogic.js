export const move = (board, movesMade, updateBoard) => {
	if (canIwin()){
		//updateBoard()
	}
	else if (canTheyWin()){
		//updateBoard
	}
	else{
		//my first move?
		if (movesMade === 1){
			aiFirstMove(board)
		}
		//find empty space, go there
		// board.forEach(row => {
		// if (row.every(square => square === "O")){
		// 	win = true
		// } else if (row.every(square => square === "X")){
		// 	win = true
		// }
	}
}



export const aiFirstMove = (board, updateBoard) =>{
	//first pick the middle square, if taken go in top left corner
	if (board[1][1] === ' '){
		updateBoard(1,1)
	}else{
		updateBoard(0,0)
	}
}

export const aiSubsequentMoves = (board) => {
	// if I have 2 in a row, place the third one
	checkForTwo(board)

	// if they have 2 in a row/column/diagonal and the last is blank, block them
	// otherwise, go anywhere open
}



//check if I'm about to win
export const canIwin = (board) => {

}


//if that 
export const twoInRow = (board) => {
	let twoIn = false
	board.forEach(row => {
		
	})

	return false;
}

export const twoInColumn = (board) => {
	// first if statement is making sure that all of the squares don't equal each other by all being empty spaces
	// first column
		if(board[0][0] === board[1][0] 
			&& board[0][0] === board[2][0]){
			return true
		}
	// second column
		if(board[0][1] === board[1][1] 
			&& board[0][1] === board[2][1]){
			return true
		}
	// third column
		if(board[0][2] === board[1][2] 
			&& board[0][2] === board[2][2]){
			return true
		}
	return false
}

export const twoInDiagonal = (board) => {
	// check middle square first, then check relevant corners
	if (board[1][1] === ' ') return false;
	if(board[0][0] === board[1][1] 
		&& board[1][1] === board[2][2]){
		return true
	}else if(board[0][2] === board[1][1] 
		&& board[1][1] === board[2][0]){
		return true
	}
	return false

}