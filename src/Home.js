import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Link to={'/editor'}>Course Editor</Link>
                <Link to={'/courses/table'}>Course Manager</Link>
            </div>
        )
    }
}

export default Home