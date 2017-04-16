import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';

const Greetings = ()=>{
    return <div>Hello</div>;
};
export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="posts/new" component={PostNew}/>
    </Route>
);