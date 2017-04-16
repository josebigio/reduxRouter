import React, { Component } from 'react';
import { fetchPosts } from '../actions';


export default class App extends Component {

  render() {
    console.log('app');
    return (
      <div className="container" style={{padding:"20px", height:"100%"}}>
        {this.props.children}
      </div>
    );
  }
}
