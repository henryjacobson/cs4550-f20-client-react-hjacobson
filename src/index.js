import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import * as serviceWorker from './serviceWorker';
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorComponent from "./components/CourseEditor/CourseEditorComponent";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import courseReducer from "./reducers/courseReducer";
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";

const rootReducer = combineReducers({
    moduleReducer,
    courseReducer,
    lessonReducer,
    topicReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route
                    path={'/'}
                    component={Home}/>
                <Route
                    path={'/courses/table'}
                    render={(props) => (
                        <CourseManagerContainer {...props} table={true}/>
                    )}/>
                <Route
                    path={'/courses/grid'}
                    render={(props) => (
                        <CourseManagerContainer {...props} table={false}/>
                    )}/>
                <Route
                    path={[
                        '/editor/:courseId',
                        '/editor/:courseId/modules/:moduleId',
                        '/editor/:courseId/modules/:moduleId/lessons/:lessonId',
                        '/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId'
                    ]}
                    exact component={CourseEditorComponent}/>
            </div>
        </Router>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
