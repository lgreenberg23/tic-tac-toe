import React from 'react'
import '../board.css'

class Square extends React.Component{

	handleClick = () => {
		console.log('i clicked this:', this.props.row, this.props.column)
		this.props.updateBoard(this.props.row, this.props.column)
	}

	render(){
		return(
			<div className='square' onClick={this.handleClick}>
			{this.props.square}
			</div>
			)
	}

}

export default Square