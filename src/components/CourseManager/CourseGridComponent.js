import React from "react";
import CourseGridEntryComponent from "./CourseGridEntryComponent";

class CourseGridComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className={"row"}>
                    <div className={"col-6 wbdv-header"}>
                        Recent Documents
                    </div>
                    <div className={"col-3 wbdv-header"}>
                        Owned by me
                    </div>
                    <div className={"col-3 wbdv-header"}>
                        <i className="fa fa-list wbdv-button wbdv-list-layout"
                           onClick={() => this.props.changeView()}/>
                    </div>
                </div>
                <div className={"row"}>
                {
                    this.props.courses.map(course =>
                        <CourseGridEntryComponent
                            key={course._id}
                            deleteCourse={this.props.deleteCourse}
                            course={course}
                            changePage={this.props.changePage}/>
                    )
                }
                </div>
            </div>
        );
    }
}

export default CourseGridComponent
