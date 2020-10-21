import React from "react";
import {connect} from "react-redux";
import {
    updateModule,
    createModule,
    deleteModule
} from "../../actions/moduleActions";
import {Link} from "react-router-dom";

const ModuleList = (
    { course,
        modules=[],
        selectedModule,
        deleteModule,
        createModule,
        updateModule}) =>
    <div>
        <ul className="list-group wbdv-module-list">
            {
                modules.map(module =>
                    <span key={module._id}>
                        {
                            module.editing &&
                            <li className="list-group-item active wbdv-module-item-title">
                                <input
                                    onChange={(event) =>
                                        updateModule({...module, title: event.target.value})
                                    }
                                    value={module.title}/>

                                <i className={"fa fa-check wbdv-button wbdv-ok"}
                                    onClick={() => updateModule({...module, editing: false})}/>
                                <i className="fa fa-times float-right wbdv-module-item-delete-btn"
                                    onClick={() => deleteModule(module)}/>
                            </li>
                        }
                        {
                            !module.editing &&
                            module._id === selectedModule &&
                            <li className="list-group-item active wbdv-module-item-title">
                                {module.title}
                            </li>
                        }
                        {
                            !module.editing &&
                            module._id !== selectedModule &&
                            <li className="list-group-item wbdv-module-item-title">
                                <Link to={`/editor/${course._id}/modules/${module._id}`}>
                                    {module.title}
                                </Link>
                                <i className={"fa fa-gear float-right wbdv-button wbdv-edit"}
                                   onClick={() => updateModule({...module, editing: true})}/>
                            </li>
                        }
                    </span>)
            }
        </ul>
        <button onClick={() => createModule(course, {title: "New Module"})}>
            Create Module
        </button>
    </div>

// export default ModuleList

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    selectedModule: state.moduleReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteModule: (module) => deleteModule(dispatch, module),
    createModule: (course, module) => createModule(dispatch, course, module),
    updateModule: (module) => updateModule(dispatch, module)
})

export default connect
(stateToPropertyMapper,
    propertyToDispatchMapper)
(ModuleList)
