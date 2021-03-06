import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostNew extends Component {

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        console.log(handleSubmit);
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textArea className="form-control" {...content} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
},
    null,
    { createPost }
)(PostNew);