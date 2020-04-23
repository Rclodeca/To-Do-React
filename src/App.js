import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item.js';

class App extends Component {
    constructor(){
        super();
        this.state = {
           items: [],
           textBoxContents: ""
        };
        this.updateText = this.updateText.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    updateText(event){
        this.setState({textBoxContents: event.target.value})
    }

    addItem(){
        let contents = this.state.textBoxContents;
        let items = this.state.items;
        items.push(contents);
        this.setState({items});
    }

    removeItem(index){
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({items});
    }

    render(){
        return (
            <div className="App">
                <h1>To-Do List</h1>
                <div>
                    <p>Add and remove to-do's as needed<br />Click on an item to cross it off the list</p>
                    <input type="text" placeholder="enter items" onChange={this.updateText} />
                    <button onClick={this.addItem}>Enter</button>
                    
                    {this.state.items.map((element, index) => {
                        return <Item value={element} index={index} removeItem={this.removeItem}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
