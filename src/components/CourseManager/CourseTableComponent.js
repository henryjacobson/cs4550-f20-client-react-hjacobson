import React from "react";
import {updateCourse} from "../../services/CourseService";
import CourseTableEntryComponent from "./CourseTableEntryComponent";

class CourseTableComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th className="wbdv-header wbdv-title">Title</th>
                    <th className="wbdv-header wbdv-owner">Owner</th>
                    <th className="wbdv-header wbdv-last-modified">Last Modified</th>
                    <th className="wbdv-header wbdv-title">
                        <i className="fa fa-th-large wbdv-button wbdv-grid-layout"
                            onClick={() => this.props.changeView()}/>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.courses.map(course =>
                        <CourseTableEntryComponent
                            key={course._id}
                            deleteCourse={this.props.deleteCourse}
                            course={course}/>
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default CourseTableComponent
