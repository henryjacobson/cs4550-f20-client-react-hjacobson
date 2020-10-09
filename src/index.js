import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import * as serviceWorker from './serviceWorker';
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorContainer from "./containers/CourseEditorContainer";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home'

ReactDOM.render(
    <Router>
        <div>
            <Route
                path={'/'}
                component={Home}/>
            <Route
                path={'/courses'}
                component={CourseManagerContainer}/>
            <Route
                path={'/editor'}
                component={CourseEditorContainer}/>
        </div>
    </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
