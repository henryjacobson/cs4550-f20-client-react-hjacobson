import React from "react";
import {updateCourse} from "../../services/CourseService";

class CourseGridEntryComponent extends React.Component {
    state = {
        editing: false,
        courseTitle: "Some Course",
        course: this.props.course
    }

    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = { ...this.state.course }
        course.title = newTitle
        this.setState({
            course: course
        })
    }

    updateCourse = () => {
        this.setState({editing: false})
        updateCourse(this.state.course._id, this.state.course)
    }

    render() {
        return (
            <div className={"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
                    <div className="card container">
                        {
                            this.state.editing === true &&
                            <input
                                onChange={this.updateTitle}
                                value={this.state.course.title}/>
                        }
                        {
                            this.state.editing === false &&
                            <div className="row no-gutters">
                                <div className={"col-2"}>
                                    <i className="fa fa-file text-center align-middle wbdv-icon"/>
                                </div>
                                <label className={"text-truncate col-10 align-middle"}
                                onClick={() => this.props.changePage()}>{this.state.course.title}</label>
                            </div>
                        }
                        <div className={"row wbdv-modified-date"}>
                            <div className={"col-8"}>
                                {this.props.course.lastUpdated}
                            </div>
                            <div className={"col-4"}>
                                {
                                    this.state.editing &&
                                    <i
                                        className={"fa fa-check wbdv-button wbdv-ok"}
                                        onClick={this.updateCourse}/>
                                }
                                {
                                    !this.state.editing &&
                                    <i
                                        className={"fa fa-gear wbdv-button wbdv-edit"}
                                        onClick={() => this.setState({editing: true})}/>
                                }
                                &nbsp;
                                <i
                                    className={"wbdv-color-red fa fa-trash wbdv-row wbdv-button wbdv-delete"}
                                    onClick={() => this.props.deleteCourse(this.props.course)}/>
                            </div>
                        </div>
                    <div/>
                    </div>
            </div>
        );
    }
}

export default CourseGridEntryComponent
