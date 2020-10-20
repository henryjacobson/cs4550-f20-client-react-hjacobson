import React from 'react';
import CourseManagerContainer from "./CourseManagerContainer";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";

class PageContainer extends React.Component {
    state={
        manager: true
    }

    changePage = () => {
        this.setState(prevState => {
            return {manager: !prevState.manager}
        })
    }

    render() {
        return(
            <span>
                {
                    this.state.manager &&
                    <CourseManagerContainer
                        changePage={this.changePage}/>
                }
                {
                    !this.state.manager &&
                        <CourseEditorComponent
                            changePage={this.changePage}/>
                }
            </span>

        )
    }
}

export default PageContainer