	
export const win = (board) => {
		if (this.winRow(board) || this.winColumn(board) || this.winDiagonal(board)){
			return true
		}
		return false
	}

export const winRow = (board) => {
		let win = false
		board.forEach(row => {
			if (row.every(square => square === "O")){
				win = true
			} else if (row.every(square => square === "X")){
				win = true
			}
		})

		if (win) return true;

		return false;
	}

	export const winColumn = (board) => {
		// first if statement is making sure that all of the squares don't equal each other by all being empty spaces
		// first column
		if (board[0][0] !== ' '){
			if(board[0][0] === board[1][0] 
				&& board[0][0] === board[2][0]){
				return true
			}
		}
		// second column
		if (board[0][1] !== ' '){
			if(board[0][1] === board[1][1] 
				&& board[0][1] === board[2][1]){
				return true
			}
		}
		// third column
		if (board[0][2] !== ' '){
			if(board[0][2] === board[1][2] 
				&& board[0][2] === board[2][2]){
				return true
			}
		}
		return false
	}

	export const winDiagonal = (board) => {
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
