


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
// */

}