import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';
import Post from './post';

class PostIndex extends Component {

  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log("renderPosts",this.props);
    if(!this.props.all) {
      return;
    }
    console.log("renderPosts rendering");
    return this.props.all.map((post)=>{
      console.log('post: ' + post);
      return <Post title={post.title} content={post.content} categories={post.categories}/>
    });
  }

  render() {
    console.log('app');
    return (
      <div>
        <div className="text-xs-right" style={{marginBottom:"20px"}} >
          <Link to={'posts/new'} className="btn btn-primary">
            Add a post
              </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  console.log('mapStateToProps',state);
  return {
    all:state.posts.all
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);