 import React from 'react';
import Cardlist from '../Components/Cardlist'
import Searchbox from '../Components/Searchbox'
import './App.css'
import Scroll from '../Components/Scroll'
// const state ={
// robots:robots,
// searchfield:''
// }
class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>{return response.json()}).then(users=>{this.setState({robots:users})})

	}
	onSearchChange=(event)=>{
		this.setState({searchfield : event.target.value})
		
		// console.log(filteredRobots);
	}
	render(){
		const filteredRobots=this.state.robots.filter((user)=>{
			return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
		if (this.state.robots.length === 0){
			return <h1>Loading!</h1>;
		}
		else{
	
		return(

		<div  className='tc'>
			<h1 className='f1'>Robo friends</h1>
			<Searchbox searchChange={this.onSearchChange}/>
		{/*Wrapping components with components and using props.children to manipulate the inner components*/}
		<Scroll>
			<Cardlist robots={filteredRobots}/>
		</Scroll>
		</div>
		)
	}
} 
	
}



export default App

// ****  event.target.value