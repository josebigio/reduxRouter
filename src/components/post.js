import React from 'react';  

const Post = ({title, categories, content}) => {
    console.log('Post class',title,categories,content);
    return (
        <div className="container">
        <div className="jumbotron">
            <h6>Title</h6>
            <p1>{title}</p1>
            <h6>Categories</h6>
            <p1>{categories}</p1>
            <h6>Content</h6>
            <p1>{content}</p1>
        </div>
        </div>
    );
}

export default Post;