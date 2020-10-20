import React from "react";
import $ from 'jquery'
import CourseTableEntryComponent from "../components/CourseManager/CourseTableEntryComponent";
import courseService from "../services/CourseService";
import "../css/styles.css"
import "../css/course-manager.style.client.css"
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseGridComponent from "../components/CourseManager/CourseGridComponent";

class CourseManagerContainer extends React.Component {
    state = {
        courses: [],
        table: this.props.table
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
    }

    createCourse = () => {
        const $title = $("#newCourseTitle")
        const title = $title.val()
        $title.val("")
        const newCourse = {
            title: title,
            owner: 'me',
            lastUpdated: 'yesterday'
        }

        // UNSAFE:
        // const newState = {
        //   courses: [
        //     ...this.state.courses, newCourse
        //   ]
        // }
        //
        // this.setState(newState)

        // SAFE:

        courseService.createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => {
                    return {
                        courses: [
                            ...prevState.courses, actualCourse
                        ]
                    }
                })
            )
            .catch(error => {})
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(() => this.setState(prevState => ({
                courses: prevState.courses.filter(c => c._id !== course._id)
            })))
    }

    render() {
        return(
            <div className="container">
                <h3 className="wbdv-sticky-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <i className="fa fa-bars wbdv-field wbdv-hamburger"/>
                            </div>
                            <div className="col-3">
                                <div className="wbdv-nudge-9px-down wbdv-label wbdv-course-manager">
                                    Course Manager
                                </div>
                            </div>
                            <div className="col-7">
                                <input id="newCourseTitle"
                                        placeholder="New Course Title"
                                       type="text"
                                       className="form-control wbdv-nudge-9px-down wbdv-field wbdv-new-course"/>
                            </div>
                            <div className="col-1">
                                <i className="wbdv-color-red fa fa-2x fa-plus-circle wbdv-button wbdv-add-course"
                                    onClick={() => this.createCourse()}/>
                            </div>


                            <i className="wbdv-stuck-bottom-right wbdv-color-red fa fa-2x fa-plus-circle wbdv-button wbdv-add-course"/>
                        </div>
                    </div>
                </h3>

                <div className="wbdv-padding-top-55">
                    {
                        this.state.table &&
                        <CourseTableComponent
                            courses={this.state.courses}
                            deleteCourse={this.deleteCourse}/>
                    }
                    {
                        !this.state.table &&
                        <CourseGridComponent
                            courses={this.state.courses}
                            deleteCourse={this.deleteCourse}/>
                    }
                </div>
            </div>
        )
    }
}

export default CourseManagerContainer
