import React, { Component } from "react";
import ListItems from "./ListItems";
import Item from "./Item";
import axios from 'axios';

export default class ItemsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      todos: {}
    };
  }
  componentDidMount(){
    axios.get('/api/todo').then(response => {
      console.log(response.data)
      this.setState({
        loading:false,
        todos: response.data
      })
    })
  }
  render() {
    const {todos} = this.state
    console.log(todos)
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }
    return (
      <ListItems>
        {todos.map(el => {
return <Item title={el.title} isDone={el.is_done} />
        })}
       
      </ListItems>
    );
  }
}
