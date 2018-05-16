import React from 'react';
// Code ClickityClick Component Here
class ClickityClick extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			timesClicked: 0
		};
	}
	handleClick = () =>{
		this.setState({
			timesClicked: this.state.timesClicked + 1
		}, ()=>console.log(this.state.timesClicked))
	}
	render(){
		return(
			<div>
				<button onClick={this.handleClick}>Click Here</button>
				<p>
					I have been clicked {this.state.timesClicked} times
				</p>
			</div>
		)	
	}
}

export default ClickityClick;