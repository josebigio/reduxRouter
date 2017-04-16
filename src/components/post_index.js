import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {

  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchPosts();
  }

  render() {
    console.log('app');
    return (
      <div>
        <div className="text-xs-right" >
          <Link to={'posts/new'} className="btn btn-primary">
            Add a post
              </Link>
        </div>
        Post Index
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);