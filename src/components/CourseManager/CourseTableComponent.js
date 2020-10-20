import React from "react";
import CourseTableEntryComponent from "./CourseTableEntryComponent";
import {Link} from 'react-router-dom'

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
                        <Link className="fa fa-th-large wbdv-button wbdv-grid-layout"
                              to={"/courses/grid"}/>
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
