import React, { Component } from 'react';
import axios from 'axios';


export class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = (e)=> {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state);
    axios.post('http://127.0.0.1:8000/api/post',this.state)
    
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const {userID, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input 
              type="text" 
              name="userId" 
              value={userID} 
              onChange = {this.changeHandler} 
            />
          </div>
          <div>
            <input 
              type="text" 
              name="title" 
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input 
              type="text" 
              name="body" 
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm