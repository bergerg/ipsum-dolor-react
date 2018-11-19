import React, {Component} from 'react';

import Client from "./Client";

import './main.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: '',
      comments: [],
      q: '',
      loading: false
    };
  }

  getComments = e => {
    e.preventDefault();
    const id = this.state.postId;
    if (id) {
      this.setState({loading: true, comments: []})
      Client.getComments(id, comments => {
        this.setState({
          comments: comments,
          loading: false
        });
      });
    }
  }

  setPostId = e => {
    const state = this.state;
    state.postId = e.target.value;
    this.setState(state);
  }

  setQ = e => {
    const state = this.state;
    state.q = e.target.value;
    this.setState(state);
  }

  render() {
    const { postId, comments, q, loading } = this.state;
    return (
      <div className="App">
        <form>
          <input className="rightMargin" autoComplete="off" type="text" name="postId"
           value={postId} id="postId" placeholder="post ID" onChange={this.setPostId}></input>
          <input onClick={this.getComments} className="btn" type="submit" value="Get comments"></input>
          <input className="withBuffer" autoComplete="off"
           onChange={this.setQ} type="text" name="q" id="query" value={this.q}
           placeholder="Search comments" ></input>
        </form>
        {!!comments && (
          <ul className="resultWrapper">
          {comments.map(comment => {
            if (comment.body.includes(q)) {
              return (
                <li key={comment.id}>
                  <p>comment id: {comment.id}</p>
                  <p>comment body: {comment.body}</p>
                </li>
              )
            } else {
              return null;
            }
          })}
          </ul>
        )}
        {loading && (
          <div className="lds-dual-ring"></div>
        )}
      </div>
    );
  }
}
export default App;
