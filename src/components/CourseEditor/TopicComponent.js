import React from 'react';

class TopicComponent extends React.Component {
    render() {
        return(
            <li className="nav-item">
                <a href="#" className="nav-link wbdv-topic-pill">{this.props.topic}</a>
            </li>
        )
    }
}

export default TopicComponent