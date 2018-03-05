export const move = (board, movesMade, updateBoard) => {
	// if I have 2 in a row, win
	if (canIWin(board, updateBoard)){
		debugger
		return true
	}
	// if they have 2 in a row, block them
	else if (canIBlock(board, updateBoard)){
		debugger
		return true
	}
	else{
		debugger
		//my first move?
		if (movesMade === 1){
			aiFirstMove(board, updateBoard)
		}else{
			debugger
		//find empty space, go there
			board.forEach(row => {
				debugger
				for (let i=0; i<3; i++){
					if(board[row][i] === ' '){
						updateBoard(row, i)
						break
					}
				}
				return true
				// break
			})
		}
		return true
	}
}