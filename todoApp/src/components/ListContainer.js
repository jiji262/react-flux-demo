import React, { Component } from 'react';
import AddItem from './AddItem'; 
import List from './List'; 

export default class ListContainer extends Component {
  state = {
    list: []
  }

  handleAddItem = (newItem) => {
    var list = this.state.list;
    list.push(newItem);
    this.setState({
      list: list
    });
  }

  handleRemoveItem = (index) => {
   this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    });
  }

  render = () => {
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
}