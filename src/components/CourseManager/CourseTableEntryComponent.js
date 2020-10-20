import React from "react";
import {updateCourse} from "../../services/CourseService";
import {Link} from 'react-router-dom'

class CourseTableEntryComponent extends React.Component {
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
      <tr>
        <td>
          {
            this.state.editing === true &&
            <input
              onChange={this.updateTitle}
              value={this.state.course.title}/>
          }
          {
            this.state.editing === false &&
            <span>
              <i className="fa fa-file col-xs-6 wbdv-row wbdv-icon"/>
              &nbsp;
              <Link to={`/editor/:${this.state.course._id}`}>{this.state.course.title}</Link>
            </span>
          }
        </td>
        <td className={"wbdv-row wbdv-owner"}>{this.props.course.owner}</td>
        <td className={"wbdv-row wbdv-modified-date"}>{this.props.course.lastUpdated}</td>
        <td className={"wbdv-row"}>
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
        </td>
      </tr>
    );
  }
}

export default CourseTableEntryComponent
