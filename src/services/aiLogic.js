export const move = (board, movesMade, updateBoard) => {
	// if I have 2 in a row, win
	if (!!canIWin(board, updateBoard)){
		return true
	}
	// if they have 2 in a row, block them
	else if (!!canIBlock(board, updateBoard)){
		return true
	}
	else{
		if (movesMade === 1){
			aiFirstMove(board, updateBoard)
		}else{
			let placeRow = -1
			let placeCol = -1
		//find empty space, go there
			board.forEach((row, index) => {	
				for (let column=0; column<3; column++){
				console.log(index, column)
					if(board[index][column] === ' '){
						placeRow = index
						placeCol = column 
						break
					}
				}
				// return true
				// break
			})
			updateBoard(placeRow, placeCol)
		}
		return true
	}
}

// export const makeMove(row, column, updateBoard){
// 	updateBoard(row, column)
// }


export const aiFirstMove = (board, updateBoard) =>{
	//first pick the middle square, if taken go in top left corner
	if (board[1][1] === ' '){
		updateBoard(1,1)
	}else{
		updateBoard(0,0)
	}
}


//check if I'm about to win
export const canIWin = (board, updateBoard) => {
	if (winRow(board, updateBoard) || winColumn(board, updateBoard) || winDiagonal(board, updateBoard)){
		return true
	}
	return false
}

export const canIBlock = (board, updateBoard) => {
	if (blockRow(board, updateBoard) || blockColumn(board, updateBoard) || blockDiagonal(board, updateBoard)){
		return true
	}
	return false
}

export const winRow = (board, updateBoard) => {
	//top row
	if (board[0][0] === ' ' || board[0][1]===' ' || board[0][2] === ' '){
		if(board[0][0] === 'X' && board[0][0] === board[0][1]){
			if (board[0][2] === ' '){
				updateBoard(0,2)
				return true
			}
		}else if (board[0][0] === 'X' && board[0][0] === board[0][2]){
			if (board[0][1] === ' '){
				updateBoard(0,1)
			return true
			}
		}else if (board[0][1] === 'X' && board[0][1] === board[0][2] ){
			if (board[0][0] === ' '){
				updateBoard(0,0)
				return true
			}
		}
	}
	// middle row
	if (board[1][0] === ' ' || board[1][1]===' ' || board[1][2] === ' '){
		if(board[1][0] === 'X' && board[1][0] === board[1][1]){
			if(board[1][2] === ' '){
					updateBoard(1,2)
					return true}
		}else if (board[1][0] === 'X' && board[1][0] === board[1][2]){
			if(board[1][1]=== ' '){
					updateBoard(1,1)
					return true}
		}else if (board[1][1] === 'X' && board[1][1] === board[1][2]){
			if(board[1][0] === ' '){
					updateBoard(1,0)
					return true}
		}
	}
	// bottom row
	if (board[2][0] === ' ' || board[2][1]===' ' || board[2][2] === ' '){
		if(board[2][0] === 'X' && board[2][0] === board[2][1]){
			if(board[2][2] === ' '){
				updateBoard(2,2)
				return true
			}
		}else if(board[2][0] === 'X' && board[2][0] === board[2][2]){
			if (board[2][1] === ' '){
				updateBoard(2,1)
				return true}
		}else if(board[2][1] === 'X' && board[2][2] === board[2][1]){
			if (board[2][0]=== ' '){
				updateBoard(2,0)
				return true
			}
		}
	}
	return false
}

export const blockRow = (board, updateBoard) => {
	//top row
	if (board[0][0] === ' ' || board[0][1]===' ' || board[0][2] === ' '){
		if(board[0][0] === 'O' && board[0][0] === board[0][1]){
			if (board[0][2] === ' '){
				updateBoard(0,2)
				return true
			}
		}else if (board[0][0] === 'O' && board[0][0] === board[0][2]){
			if (board[0][1] === ' '){
				updateBoard(0,1)
			return true
			}
		}else if (board[0][1] === 'O' && board[0][1] === board[0][2] ){
			if (board[0][0] === ' '){
				updateBoard(0,0)
				return true
			}
		}
	}
	// middle row
	if (board[1][0] === ' ' || board[1][1]===' ' || board[1][2] === ' '){
		if(board[1][0] === 'O' && board[1][0] === board[1][1]){
			if(board[1][2] === ' '){
					updateBoard(1,2)
					return true}
		}else if (board[1][0] === 'O' && board[1][0] === board[1][2]){
			if(board[1][1]=== ' '){
					updateBoard(1,1)
					return true}
		}else if (board[1][1] === 'O' && board[1][1] === board[1][2]){
			if(board[1][0] === ' '){
					updateBoard(1,0)
					return true}
		}
	}
	// bottom row
	if (board[2][0] === ' ' || board[2][1]===' ' || board[2][2] === ' '){
		if(board[2][0] === 'O' && board[2][0] === board[2][1]){
			if(board[2][2] === ' '){
				updateBoard(2,2)
				return true
			}
		}else if(board[2][0] === 'O' && board[2][0] === board[2][2]){
			if (board[2][1] === ' '){
				updateBoard(2,1)
				return true}
		}else if(board[2][1] === 'O' && board[2][2] === board[2][1]){
			if (board[2][0]=== ' '){
				updateBoard(2,0)
				return true
			}
		}
	}
	return false
}

export const winColumn = (board, updateBoard) => {
	// first if statement is making sure that all of the squares don't equal each other by all being empty spaces
	// first column
	if(board[0][0] === ' ' || board[1][0]===' ' || board[2][0] === ' '){
		if(board[0][0] === 'X' && board[0][0] === board[1][0]){
			if (board[2][0]=== ' '){
				updateBoard(2,0)
				return true
			}
		}
		if (board[0][0] === 'X' && board[0][0] === board[2][0]){
			if (board[1][0] === ' '){
				updateBoard(1,0)
				return true
			}
		}else if (board[1][0] === 'X' && board[1][0] === board[2][0] ){
			if (board[0][0]=== ' '){
				updateBoard(0,0)
				return true
			}
		}
	}
	// second column
	if (board[0][1] === ' ' || board[1][1]===' ' || board[2][1] === ' '){
		if(board[0][1] === 'X' && board[0][1] === board[1][1]){
			if (board[2][1]===' '){
				updateBoard(2,1)
				return true
			}
		}else if (board[0][1] === 'X' && board[0][1] === board[2][1]){
			if (board[1][1] === ' '){
				updateBoard(1,1)
				return true
			}
		}else if (board[1][1] === 'X' && board[1][1] === board[2][1]){
			if(board[0][1] === ' '){
				updateBoard(0,1)
				return true
			}
		}
	}
	// third column
	if (board[0][2] === ' ' || board[1][2]===' ' || board[2][2] === ' '){
		if(board[0][2] === 'X' && board[0][2] === board[1][2]){
			if(board[2][2]=== ' '){
				updateBoard(2,2)
				return true
			}
		}else if(board[2][2] === 'X' && board[0][2] === board[2][2]){
			if (board[1][2] === ' '){
				updateBoard(1,2)
				return true
			}
		}else if(board[2][2] === 'X' && board[2][2] === board[1][2]){
			if(board[0][2] === ' '){
				updateBoard(0,2)
				return true
			}
		}
	}
	return false
}

export const blockColumn = (board, updateBoard) => {
	// first column
	if(board[0][0] === ' ' || board[1][0]===' ' || board[2][0] === ' '){
		if(board[0][0] === 'O' && board[0][0] === board[1][0]){
			if (board[2][0]=== ' '){
				updateBoard(2,0)
				return true
			}
		}else if (board[0][0] === 'O' && board[0][0] === board[2][0]){
			if (board[1][0] === ' '){
					updateBoard(1,0)
					return true}
		}else if (board[1][0] === 'O' && board[1][0] === board[2][0] ){
			if (board[0][0]=== ' '){
				updateBoard(0,0)
				return true
			}
		}
	}
	// second column
	if (board[0][1] === ' ' || board[1][1]===' ' || board[2][1] === ' '){
		if(board[0][1] === 'O' && board[0][1] === board[1][1]){
			if (board[2][1]===' '){
				updateBoard(2,1)
				return true
			}
		}else if (board[0][1] === 'O' && board[0][1] === board[2][1]){
			if (board[1][1] === ' '){
				updateBoard(1,1)
				return true
			}
		}else if (board[1][1] === 'O' && board[1][1] === board[2][1]){
			if(board[0][1] === ' '){
				updateBoard(0,1)
				return true
			}
		}
	}
	// third column
	if (board[0][2] === ' ' || board[1][2]===' ' || board[2][2] === ' '){
		if(board[0][2] === 'O' && board[0][2] === board[1][2]){
			if(board[2][2]=== ' '){
				updateBoard(2,2)
				return true
			}
		}else if(board[2][2] === 'O' && board[0][2] === board[2][2]){
			if (board[1][2] === ' '){
				updateBoard(1,2)
				return true
			}
		}else if(board[2][2] === 'O' && board[2][2] === board[1][2]){
			if(board[0][2] === ' '){
				updateBoard(0,2)
				return true
			}
		}
	}
	return false
}

export const winDiagonal = (board, updateBoard) => {
	//top left to bottom right
	if(board[0][0] === ' ' || board[0][1] ===' ' || board[2][2]===' '){
		if(board[0][0] === 'X' && board[0][0] === board[1][1]){
			if(board[2][2] === ' '){
				updateBoard(2,2)
				return true
			}
		}else if (board[0][0] === 'X' && board[0][0] === board[2][2]){
			if(board[1][1]=== ' '){
				updateBoard(1,1)
				return true
			}
		}else if (board[1][1] === 'X' && board[1][1] === board[2][1] ){
			if(board[0][0]=== ' '){
				updateBoard(0,0)
				return true
			}
		}
	}
	// top right to bottom left
	if(board[0][2] === ' ' || board[0][1] ===' ' || board[2][0]===' '){
		if(board[0][2] === 'X' && board[0][2] === board[1][1]){
			if(board[2][0] === ' '){
				updateBoard(2,0)
				return true
			}
		}else if (board[0][2] === 'X' && board[0][2] === board[2][0]){
			if(board[1][1]=== ' '){
				updateBoard(1,1)
				return true}
		}else if (board[1][1] === 'X' && board[1][1] === board[2][0]){
			if(board[0][2]=== ' '){
				updateBoard(0,2)
				return true
			}
		}
	}
	return false
}

export const blockDiagonal = (board, updateBoard) => {
	//top left to bottom right
	if(board[0][0] === ' ' || board[0][1] ===' ' || board[2][2]===' '){
		if(board[0][0] === 'O' && board[0][0] === board[1][1]){
			if(board[2][2] === ' '){
				updateBoard(2,2)
				return true
			}
		}else if (board[0][0] === 'O' && board[0][0] === board[2][2]){
			if(board[1][1]=== ' '){
				updateBoard(1,1)
				return true
			}
		}else if (board[1][1] === 'O' && board[1][1] === board[2][1] ){
			if(board[0][0]=== ' '){
				updateBoard(0,0)
				return true
			}
		}
	}
	// top right to bottom left
	if(board[0][2] === ' ' || board[0][1] ===' ' || board[2][0]===' '){
		if(board[0][2] === 'O' && board[0][2] === board[1][1]){
			if(board[2][0] === ' '){
				updateBoard(2,0)
				return true
			}
		}else if (board[0][2] === 'O' && board[0][2] === board[2][0]){
			if(board[1][1]=== ' '){
				updateBoard(1,1)
				return true}
		}else if (board[1][1] === 'O' && board[1][1] === board[2][0]){
			if(board[0][2]=== ' '){
				updateBoard(0,2)
				return true
			}
		}
	}
	return false
}
