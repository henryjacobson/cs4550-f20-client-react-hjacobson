import React from "react";
import "../../css/styles.css"
import TopicComponent from "./TopicComponent";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {findModulesForCourse, selectModule} from "../../actions/moduleActions";
import {findLessonsForModule, selectLesson} from "../../actions/lessonActions";
import {findTopicsForLesson, selectTopic} from "../../actions/topicActions";
import {findWidgetsForTopic, togglePreview} from "../../actions/widgetActions";
import {findCourseById} from "../../services/CourseService";
import ModuleList from "./ModuleList";
import LessonList from "./LessonList";
import TopicList from "./TopicList";
import WidgetList from "./WidgetList";

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
                    this.props.findWidgetsForTopic(topicId)
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
            this.props.findWidgetsForTopic(topicId)
        }
    }

    togglePreview(cb) {
        this.props.togglePreview(cb.checked)
    }

    render() {
        return(
            <div className={"container-float"}>
                <div className="row">
                    <div className="col-4">
                        <h1>
                            <Link className="fa fa-times wbdv-source-editor wbdv-close"
                                  to={'/courses/table'}/>
                            <div className="wbdv-course-title">Knitting</div>
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
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-8">
                        <div className="container">
                            <div className="row">
                                <TopicList/>
                            </div>

                            <br/>



                            <WidgetList/>


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
    findWidgetsForTopic: topicId => findWidgetsForTopic(dispatch, topicId),
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "FIND_COURSE_BY_ID",
            course: actualCourse
        }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(CourseEditorComponent)