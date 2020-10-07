import React from 'react';

class LessonComponent extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a href="#" className="nav-link">{this.props.lesson}</a>
            </li>
        )
    }
}

export default LessonComponent