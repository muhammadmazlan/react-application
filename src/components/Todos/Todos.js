import React, { Component } from 'react'
import TodoList from '../TodoList/TodoList';

export default class Todos extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: this.state.items.length + 1
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }

    render() {
        const listing = this.state.items.length === 0 ? "Empty Todo List, Please Enter ToDo List" : (<TodoList items={this.state.items} />) 
        return (
          <div>
          <h3>TODO</h3>
          
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Adding Task
            </button>
          </form>

          <h4>Listing Todo: </h4>
          {listing}
        </div>
        );
    }
}
