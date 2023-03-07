import React,{Component} from "react";
import CardList from './CardList';
import './App.css'
import Scroll from './Scroll'
import SearchBox from './SearchBox'
import  {robots} from './robots';


class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>  response.json()) 
        .then(users =>this.setState({robots: users}) ) 
    }
onSearchChange =(event)=>
{
    this.setState({ searchfield: event.target.value})
    
        
}    
render()
{
    
    const filterdRobots = this.state.robots.filter(robots =>
        {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        } )
        if(robots.length===0){
        return <h1>Loading</h1>
        } else {

        
    return (
    <div className='tc '>
    <h1 className="f1">RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} / >
    <Scroll>
       <CardList robots={filterdRobots} />
    </Scroll>
    </div>);
    }
 }  
}
export default App;