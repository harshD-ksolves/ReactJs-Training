
import React, { Component } from 'react'
import './App.css';
import ListItems from './components/ListItems';


export class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      items:[],
      currItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currItem:{
        text:e.target.value,
        key:Date.now()
      }
    });
  }
  addItem(e){
    e.preventDefault();
    const newItem=this.state.currItem;
    
    if(newItem.text !== ""){
      const items=[...this.state.items,newItem];
      this.setState({
        items:items,
        currItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems=this.state.items.filter(item=>item.key!==key);
    this.setState({
      items:filteredItems,
      currItem:{
        text:'',
        key:''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <form action="" id="todo-form" onSubmit={this.addItem}>
            <input type="text" onChange={(e)=>this.handleInput(e)} placeholder="Enter Text" value={this.state.currItem.text}/>
            <button type="submit">Add</button>
          </form>
        </div>
        <ListItems items={this.state.items} deleteItem={this.deleteItem}></ListItems>
      </div>

    )
  }
}

export default App;


