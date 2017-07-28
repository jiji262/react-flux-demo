import React, { Component } from 'react';
import AddItem from './AddItem'; 
import List from './List'; 
import todoStore from '../stores/todoStore';
import todoActions from '../actions/todoActions';

export default class ListContainer extends Component {
  state = {
    list: todoStore.getList()
  }

  componentDidMount = () => {
    todoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount = () => {
    todoStore.removeChangeListener(this._onChange);
  }

  handleAddItem = (newItem) => {
    todoActions.addItem(newItem);
  }

  handleRemoveItem = (index) => {
    todoActions.removeItem(index);
  }

  _onChange = () => {
    this.setState({
      list: todoStore.getList()
    })
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