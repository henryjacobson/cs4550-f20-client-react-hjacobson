import React from "react";
import "../../css/styles.css"
import TopicComponent from "./TopicComponent";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {findModulesForCourse, selectModule} from "../../actions/moduleActions";
import {findLessonsForModule, selectLesson} from "../../actions/lessonActions";
import {findTopicsForLesson, selectTopic} from "../../actions/topicActions";
import {findCourseById} from "../../services/CourseService";
import ModuleList from "./ModuleList";
import LessonList from "./LessonList";
import TopicList from "./TopicList";

class CourseEditorComponent extends React.Component {
    state = {
        modules: [
            "Module 1 - jQuery",
            "Module 2 - React",
            "Module 3 - Redux",
            "Module 4 - Native",
            "Module 5 - Angular",
            "Module 6 - Node",
            "Module 7 - Mongo",
        ],
        lessons: [
            "Build",
            "Pages",
            "Theme",
            "Store",
            "Apps",
            "Setting",
        ],
        topics: [
            "Topic 1",
            "Topic 2",
            "Topic 3",
            "Topic 4",
        ]
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.selectModule(moduleId)
            this.props.findLessonsForModule(moduleId)
            if(lessonId) {
                this.props.findTopicsForLesson(lessonId)
                this.props.selectLesson(lessonId)
                if(topicId) {
                    this.props.selectTopic(topicId)
                }
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const previousModuleId = prevProps.match.params.moduleId
        if(moduleId !== previousModuleId) {
            this.props.selectModule(moduleId)
            this.props.findLessonsForModule(moduleId)
            this.props.findTopicsForLesson(moduleId)
        }
        const lessonId = this.props.match.params.lessonId
        const previousLessonId = prevProps.match.params.lessonId
        if(lessonId !== previousLessonId) {
            this.props.selectLesson(lessonId)
            this.props.findTopicsForLesson(lessonId)
        }
        const topicId = this.props.match.params.topicId
        const previousTopicId = prevProps.match.params.topicId
        if(topicId !== previousTopicId) {
            this.props.selectTopic(topicId)
        }
    }

    render() {
        return(
            <div className={"container-float"}>
                <div className="row">
                    <div className="col-4">
                        <h1>
                            <Link className="fa fa-times wbdv-source-editor wbdv-close"
                                  to={'/courses/table'}/>
                            <span className="wbdv-course-title">Knitting</span>
                        </h1>
                    </div>

                    <div className="col-8">
                        <LessonList/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                        <div className="container">
                            <div className="row">
                                <ModuleList/>
                                {/*<ul className="list-group wbdv-module-list">*/}
                                {/*    {*/}
                                {/*        this.state.modules.map(module =>*/}
                                {/*            <ModuleComponent*/}
                                {/*                module={module}*/}
                                {/*                key={module}/>*/}
                                {/*        )*/}
                                {/*    }*/}
                                {/*</ul>*/}
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-8">
                        <div className="container">
                            <div className="row">
                                <TopicList/>
                            </div>

                            <br/>

                            <div className="row">
                <span className="float-right">
                <a className="btn btn-success" id="save">
                    Save
                </a>
                <label htmlFor="preview">
                    Preview
                </label>
                <input type="checkbox" id="preview" className="wbdv-preview"/>

                </span>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="border">
                                    <div className="container">
                                        <h3>
                                            Heading Widget
                                            <span className="float-right">
                        <a className="btn btn-warning wbdv-nudge-3px-up">
                            <i className="fa fa-arrow-up"/>
                        </a>
                        <a className="btn btn-warning wbdv-nudge-3px-up">
                            <i className="fa fa-arrow-down"/>
                        </a>
                        <select>
                            <option>Heading</option>
                            <option>YouTube</option>
                            <option>Image</option>
                            <option>Document</option>
                            <option>Slides</option>
                        </select>
                        <a className="btn btn-danger wbdv-nudge-3px-up">Delete</a>
                            </span>
                                        </h3>

                                        <input className="form-control"/>
                                        <select className="form-control">
                                            <option>Heading 1</option>
                                            <option>Heading 2</option>
                                            <option>Heading 3</option>
                                            <option>Heading 4</option>
                                            <option>Heading 5</option>
                                        </select>

                                        <br/>

                                        <input className="form-control"
                                               title="Name your widget" placeholder="Widget Name"/>

                                        <h3>
                                            Preview
                                        </h3>
                                        <h1>
                                            Heading text
                                        </h1>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <i className="fa fa-plus col-xs-6 float-right"/>
                            </div>
                        </div>


                        <br/>


                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
    course: state.courseReducer.course
})
const propertyToDispatchMapper = (dispatch) => ({
    findModulesForCourse: courseId => findModulesForCourse(dispatch, courseId),
    selectModule: (moduleId) => selectModule(dispatch, moduleId),
    findLessonsForModule: moduleId => findLessonsForModule(dispatch, moduleId),
    selectLesson: lessonId => selectLesson(dispatch, lessonId),
    findTopicsForLesson: lessonId => findTopicsForLesson(dispatch, lessonId),
    selectTopic: topicId => selectTopic(dispatch, topicId),
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "FIND_COURSE_BY_ID",
            course: actualCourse
        }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(CourseEditorComponent)