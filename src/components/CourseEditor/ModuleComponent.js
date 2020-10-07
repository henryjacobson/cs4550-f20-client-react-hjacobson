import React from 'react';

class ModuleComponent extends React.Component {
    render() {
        return(
            <li className="list-group-item wbdv-module-item-title">{this.props.module}<i
                className="fa fa-times float-right wbdv-module-item-delete-btn"/></li>
        )
    }
}

export default ModuleComponent