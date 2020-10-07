import React from 'react';
import CourseManagerContainer from "./CourseManagerContainer";
import CourseEditorContainer from "./CourseEditorContainer";

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
                        <CourseEditorContainer
                            changePage={this.changePage}/>
                }
            </span>

        )
    }
}

export default PageContainer